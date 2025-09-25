const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Load both .env files
require('dotenv').config();
require('dotenv').config({ path: '.env.custom' });

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
    const booksEquivalent = (totalWords / 70000).toFixed(4);
    
    // Average nonfiction page is ~250 words
    const pagesEquivalent = Math.round(totalWords / 250);
    
    // Get total words from environment variable and calculate private content
    const totalWordsAllNotes = parseInt(process.env.TOTAL_WORDS_ALL_NOTES);
    const privateWords = totalWordsAllNotes - totalWords;
    
    // Calculate public/private pages and books
    const pagesPublic = pagesEquivalent;
    const pagesPrivate = Math.round(privateWords / 250);
    const booksPublic = booksEquivalent;
    const booksPrivate = (privateWords / 70000).toFixed(4);
    
    // Calculate percentage for display
    const publicThoughtsPercent = ((totalWords / totalWordsAllNotes) * 100).toFixed(2);
    
    return {
        totalWords,
        totalNotes,
        booksEquivalent,
        booksPublic,
        booksPrivate,
        pagesEquivalent,
        pagesPublic,
        pagesPrivate,
        averageWordsPerNote: Math.round(totalWords / totalNotes),
        publicThoughtsPercent
    };
};