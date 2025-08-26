---
{"dg-publish":true,"permalink":"/blog/ignoring-folders/"}
---

# Ignoring Folders

If there are files and folders you don't want to consider in your refactoring,
you can add a `.zrtignore` file to the root of your obsidian vault or knowledge management folder.

It works like a `.gitignore` file.

```markdown
# /.zrtignore
ARCHIVE/
CALENDAR/
DRAWINGS/
IMAGES/
.git/
```

now the files in these folders will be ignored by the `zrt` tool.
