---
{"dg-publish":true,"permalink":"/thoughts/zrt/zrt/","title":"Zettelkasten Refactor Tool","updated":"2025-08-28T22:02:15.095+01:00"}
---

# Zettelkasten Refactor Tool

To help manage my Zettelkasten, I'm building `zrt` - the *Zettelkasten Refactor Tool*.
`zrt` has two primary goals.

1) to be a command line tool to help nurture Zettelkasten notes and
2) to be an introductory project for me to learn the Rust programming language.

My ordinary workflow involves using Obsidian. However, certain tasks require specific tools to help me with challenges I face. Chief among them for me right now is the question of "What notes should I organize next?".

While I could create a plugin for Obsidian, I wanted something that doesn't rely on any particular interface and that could be extended to work with any workflow, including Vim.

Hence, I started creating this cli tool in Rust. Welcome to the user guide and documentation for `zrt`.
