---
{"dg-publish":true,"permalink":"/blog/lngkata-how-it-works/","tags":["blogged","refactored","language"],"created":"2026-02-15T13:00:13.447+00:00","updated":"2026-02-15T13:00:13.447+00:00"}
---

Right now it consists of 
- Obsidian as a frontend
- Spaced Repetition Plugin
- Edge Text-to-Speech Plugin

*How it works*

I get AI to translate some phrase like, "How would you say *"I want to know when you can do it"?*" into Brazilian Portuguese and format them in a manner that the Spaced Repetition Plugin can parse as flashcards. For each answer part of the flashcard, I use the Edge TTS plugin to generate audio (with a Brazilian voice) so I can get the correct response. Then each day, I go through the flashcards, testing both my recognition of Brazilian Portuguese to English translations, and recall English to Brazilian Portuguese Translations with the TTS providing corrections.

