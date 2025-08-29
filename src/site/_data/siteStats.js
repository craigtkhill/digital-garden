const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function() {
    const notesDir = path.join(__dirname, '../notes/**/*.md');
    const noteFiles = glob.sync(notesDir);
    
    let totalWords = 0;
    let totalNotes = 0;
    
    noteFiles.forEach(file => {
        try {
            const content = fs.readFileSync(file, 'utf8');
            // Remove frontmatter
            const withoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
            // Remove markdown syntax and count words
            const plainText = withoutFrontmatter
                .replace(/!\[.*?\]\(.*?\)/g, '') // images
                .replace(/\[.*?\]\(.*?\)/g, '') // links
                .replace(/`.*?`/g, '') // inline code
                .replace(/```[\s\S]*?```/g, '') // code blocks
                .replace(/#+ /g, '') // headers
                .replace(/[*_]{1,2}(.*?)[*_]{1,2}/g, '$1') // bold/italic
                .trim();
            
            const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
            totalWords += wordCount;
            totalNotes++;
        } catch (err) {
            console.log(`Error reading ${file}:`, err.message);
        }
    });
    
    // Average book is ~70,000 words
    const booksEquivalent = (totalWords / 70000).toFixed(2);
    
    // Get public thoughts percentage from environment variable
    const publicThoughtsPercent = process.env.PUBLIC_THOUGHTS_PERCENT || '1.94';
    
    return {
        totalWords,
        totalNotes,
        booksEquivalent,
        averageWordsPerNote: Math.round(totalWords / totalNotes),
        publicThoughtsPercent
    };
};