---
{"dg-publish":true,"permalink":"/blog/ignoring-folders/","tags":["blogged","refactored","zrt"],"created":"2025-08-26T19:48:02.931+01:00","updated":"2025-08-30T09:10:08.249+01:00"}
---

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
