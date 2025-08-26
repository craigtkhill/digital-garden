---
{"dg-publish":true,"permalink":"/blog/zrt/ignoring-folders/","updated":"2025-08-26T19:48:13.148+01:00"}
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
