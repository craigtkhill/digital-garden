---
{"dg-publish":true,"permalink":"/blog/ai-uses/","tags":["ai"]}
---

Before we dive into trying to make AI work better, here are some of the things I think AI does quite well.

## Socratic Method
Use AI to ask you questions to get you thinking.
Use AI to ask you questions about what you are not thinking about.
AI is great for this to help you clarify your ideas.
The opportunity of using AI to make breakthroughs in many fields, including mathematics, will be simply helping you identify ideas you were unaware of and apply it to your problem.

## Good Enough Search
AI is useful when you have no clue how to do something and want to get to an answer quickly.
But it is useless for finding optimal answers.
If you are pressed for time and you don't care enough about an answer to invest more time into it, then AI is certainly better than traditional web search or following your gut.
If it is something more serious, then you will need to check your answers.

## Automate the Boring Stuff
There's busy work that isn't valuable. That is, it doesn't produce any measurable impact for yourself or the business. But it still needs to get done. This can be general tasks, something as simple as writing an email, marketing, AB testing... whatever is **not** the most important thing you need to do. With AI, we can become generalists and specialists, letting AI *automate the boring stuff* while we execute on the critical tasks and deliver value. The task needs to be simple, simple enough for AI to have a chance, but not so simple as to be done faster without AI.   Like finding and removing illegal racial clauses in legal documents that would take a single human 10 years, but takes a finetuned model 6 days to [review](https://www.deeplearning.ai/the-batch/stanford-and-princeton-researchers-fine-tune-a-language-model-to-identify-racial-discrimination-in-property/). It might be less accurate, but there are some use cases where it is clear that the benefit of AI outweighs the drawbacks. The skill is identifying and knowing how to *automate the boring stuff*, while turning your attention to the important value-adding stuff. 

## Simple Debugging
If you have a bug in your code, you should always try to figure it out yourself. It's a muscle that you need to keep flexing. Oftentimes, the error is simple to catch and you can fix faster than the time it would take you to prompt an LLM, especially if you use tools with helpful error messages. However, if you find yourself staring at a problem to the point that your brain is skipping over gaps, trying to figure out what might be going on, it's helpful to throw it into AI to get a second opinion. Usually, it works pretty well. But always be wary of false positives and don't ask AI to seek bugs that might be there. Its response is usually too noisy and unless you know what you are doing and can separate the wheat from the chaff, it's often counterproductive to take its suggestions wholesale.

## Rapid Prototyping
When you know what you want, AI sucks. When you don't know what you want, AI is great.
AI can be useful for experimentation as long as the results don't need to be reliable.
And with the cost of writing crappy code being reduced, you can now perform more experiments faster.
In problems where there is less time involved, AI performs better (2-hour projects).
However, when given more time, humans perform better (both AI and humans get 32-hour time budgets)
Problems involving more code favor humans, while fewer favor AI.
Also, if you think this is a trend that's changing, and there is evidence of a so-called Moore's Law of AI that suggests AI can exponentially perform tasks that take longer and longer, then I have news for you. It's true, but it comes at the cost of precision. An AI can perform tasks that take longer and longer, but when you look at the steps it takes to get there, its assumptions are often wildly off, providing a rocky foundation on which to build.

![RE-Bench performance vs time budget](/img/user/IMAGES/human-vs-ai.png)
*Performance comparison showing optimal time allocations vary by agent type, with AI agents making faster initial progress but humans improving more rapidly with additional time. Source: Wijk et al. (2025). RE-Bench: Evaluating frontier AI R&D capabilities of language model agents against human experts. METR.*

## Base for Tweaking
One antidote to the loss of precision might be to use AI to generate things and then human artists fine-tune and tweak it to match their creative vision. Imagine you can generate characters or other game assets for a virtual world in seconds, creating a rough starting point and then use hard-won skills to delicately mould this template into exactly what you want. I'm inspired by open models like [Hunyuan3D](https://3d-models.hunyuan.tencent.com/world/) to generate 3D assets. However, when you have a creative vision, it's very difficult to articulate that vision exactly in words for a generative model to get exactly right. Therefore, humans will still need valuable crafting skills. These models will save hours. If you want background items to fill your game world, you will no longer need to painstakingly craft each item. But if you have a design for a beautiful vase in mind, you can easily generate a foundation mesh and add flourishing touches. Therefore, we should focus on learning (and building) the right tools to edit the work of AI and creating compatible interfaces between prompting and tweaking.

## Self-Made Tools and Systems
If you know how to use your tools, using AI often isn't that helpful. If you know how to write code and know what you want, then it is often faster to write the code yourself rather than repeatedly prompt AI until it gives you the code you are looking for. Sometimes you may have processes that you understand very well and are worthwhile automating. AI is great for these tasks. However, I suggest you create a system that uses AI to funnel data into it rather than using the AI (and I mean specifically the model) as the system itself. Not only is this more reliable, but it will also give you an advantage, so long as your system isn't easily sherlocked, you'll have access to something that makes you more productive than anyone else has.

## Deeptech Breakthroughs
AI is terrible, especially if you ask it about a domain you know nothing about. But if you know a domain very well and ask the right questions, it can reveal insights that can help you make breakthroughs. Granted, 90% of its suggestions will be pure hocum but if you know your stuff, AI can still be helpful, and you can identify a little golden nugget to explore. Always check its sources. AI does make progress in deep technical challenges. Google DeepMind created AlphaEvolve, an AI system that found an algorithm to multiply 4x4 complex-valued matrices using 48 scalar multiplications, improving upon Strassen's 1969 algorithm. You should think about this sort of discovery exactly like evolution, the probability of a new discovery or improvement is extremely small, so if you are prepared to burn down the rainforest and you know how to evaluate an answer is correct, you can make a breakthrough, hopefully that breakthrough is on how not to burn down the rainforest.


