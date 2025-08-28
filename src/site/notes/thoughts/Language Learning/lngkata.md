---
{"dg-publish":true,"permalink":"/thoughts/language-learning/lngkata/","tags":["language","portuguese","refactored","blogged","to_blog"],"updated":"2025-08-28T22:06:19.955+01:00"}
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

discordian and obsidianite look like nice themes to try.
80s neon also looks cool.

read through all the themes to see if any jump out
https://publish.obsidian.md/hub/02+-+Community+Expansions/02.05+All+Community+Expansions/Themes/Neovim
actually, try to apply presets like in this tutorial to make it look really nice. https://www.youtube.com/watch?v=b735Wfvjjqo&list=WL&index=3 and obsidian border.
rolling lower number is better? have higher skills. 
maybe don't have a dm screen. 
update to the latest version of rust. 
```console
$ rustup update stable
```
instructor can be used to pass in a query with a response model.
use pydantic in the definition of tools.
nordic countries and canada , iceland, richer because of global warming. (Iceland by the most)
move to somewhere in preparation for 10m sea level rise can temperature increases of 3+ degrees.
Canada, Northern Europe, Chile, New Zealand, Northern Japan.
need a gateway game to get giulia into ttrpgs
land vs sea is an example.
add ttrpg elements to monopoly or settlers of catan or some well known games like them
get boardgames in charity shops and expand them out to be more ttrpgs like.
make blog on circuit python monopoly game. Need a couple of friends who can be players in our games. Maybe another couple, like natalie and vishal.
get people into ttrpgs slowly.
make game simple to learn but strategically hard to master and deeply complex.
simple rules, but interaction of rules creates complex strategies.
it's like chess, go, or programming, simple instructions layered together create complexity.
have optional rules can be added in over time.
make next blog on next most popular tag. (or if I have something to_blog)
give notes custom titles.
take fastpuccin and update the styles to how I like it.
Pefer something to a red level 1 heading.
use callouts in markdown.
try custom checkboxes.
anapuccin allows rainbow folders and speech bubbles.
also has numbering for codeblocks.
have a more muted heading color pallette for headings and base it on nature.
Don't like colors for italics and bold.
anapuccin also allows custom background (maybe minimalist lofi asthetic? but might prefer minimal)
can do image cards too. (using dataview I beleive.)