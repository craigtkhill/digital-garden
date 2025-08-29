---
{"dg-publish":true,"permalink":"/thoughts/language-learning/lngkata/","tags":["language","portuguese","blogged","to_blog","to_refactor"],"created":"2025-08-27T06:13:21.321+01:00","updated":"2025-08-29T07:17:56.997+01:00"}
---

I've been struggling to learn a foreign language. Every language learning app is frankly crap.  I tried Duolingo and a host of other apps, and they eventually either frustrate me or bore me and more importantly, I wasn't learning. The others that look promising don't have my target language, Brazilian Portuguese.

The only method that I tried that seemed to work even a little bit was the Michel Thomas Method... but it's in European Portuguese [^1]

I also know it's not enough to engage with the material once; I need to revisit it periodically. In other words, spaced repetition. 

I've given up on finding the right application. As I'm genuinely frustrated by the apps I've used, I know the pain points others face. I know what I want, so why not roll my own?

As a busy person with not much time for side projects, I didn't really fancy writing a whole app just to try out some hypothesis I had about engaging ways to learn a foreign language. I could vibe code it. But even when you are paying attention and using LLMs, they still have a tendency to enter doom loops where technical debt slows down development to a halt.

Why not just take bits of tried and tested pieces of software and put them together? So I prototyped a custom language learning app in one hour without any vibe coding, and it works pretty great so far. If I use it and find it helpful, then maybe I'll build something more custom.

Right now it consists of 
- Obsidian as a frontend
- Spaced Repetition Plugin
- Edge Text-to-Speech Plugin

How it works
I get AI to translate some "How do you say phrases like, *What do you think of the political and economic situation in Italy right now*" into Brazilian Portuguese and format them in a manner that the Spaced Repetition Plugin can parse as flashcards. For each answer part of the flashcard, I use the Edge TTS plugin to generate audio (with a Brazilian voice) so I can get the correct response. Then each day, I go through the flashcards, testing both my recognition of Brazilian Portuguese to English translations, and recall English to Brazilian Portuguese Translations with the TTS providing corrections.

[^1]: It provides information on translating European to a Brazilian pronunciation. However, this is not an engaging way to learn the language.