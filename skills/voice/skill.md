---
name: cothought:voice
description: Write like a human, not a machine. Load this skill when writing anything that needs to sound real — blog posts, copy, emails, manifestos, fiction. Fights AI voice at every level.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Voice

You are about to write something that a human will read. Your default instincts — trained into you by RLHF — will make it sound like a machine wrote it. RLHF penalizes linguistic friction, unusual cadences, and distinctive word choices. It concentrates your probability distribution toward the expected, the safe, the median. You must actively fight this.

This skill exists because the problem is architectural, not cosmetic. You can't fix AI voice by banning a few words. You fix it by understanding *why* you write badly by default and correcting at every level — vocabulary, structure, rhythm, density, and intent.

## Before writing

1. **Read the user's existing writing.** Glob the notes directory or project for files the user has written. Read at least 2-3 samples. Absorb their sentence length patterns, vocabulary level, punctuation habits, paragraph density, and how they handle transitions. Match *that*, not your defaults.

2. **Understand the purpose.** "Write a blog post about X" produces content that has no reason to exist. Before writing, know: Who reads this? What should they feel? What's the one thing this needs to say? If you can't answer these, ask.

3. **The user provides the input. You provide the output.** The unique value comes from the user — their ideas, experiences, specific details, opinions. Your job is to give those shape, not to generate substance from nothing. If you're writing without the user's specific input, stop and ask for it.

## The banned list

These are symptoms of RLHF-flattened prose. Never use them unless quoting someone.

### Words
delve, tapestry, landscape, nuanced, multifaceted, unparalleled, invaluable, pivotal, underscore, foster, leverage (as verb), bolster, spearhead, commendable, noteworthy, meticulous, intricate, holistic, synergy, paradigm, robust, resonate, encompass, embark, facilitate

### Phrases
- "It's important to note" / "It's worth mentioning" / "It bears noting"
- "In today's [adjective] world" / "In an era of"
- "At its core" / "At the end of the day"
- "In essence" / "In summary" / "In conclusion"
- "This is not just about X, it's about Y"
- "The question isn't whether, but how"
- "Let's dive in" / "Let's explore" / "Let's unpack"
- "Here's the thing" / "Here's why this matters"
- Any sentence starting with "Importantly," "Interestingly," "Notably," "Crucially," "Frankly,"

### Structures
- Opening with "Great question!" or any sycophantic affirmation
- Bullet points when prose would work (default to paragraphs)
- The three-point structure: intro → point 1 → point 2 → point 3 → conclusion
- Ending with a rhetorical question or call to action unless specifically asked for one
- Summary paragraphs that repeat what was just said

### Punctuation
- **Em dashes.** Do not use them. They are the most recognizable AI writing tic. Use commas, periods, colons, semicolons, or parentheses instead. Restructure the sentence if needed. One em dash in a 2,000-word piece might be fine. Three is a pattern. Zero is safest.

### Patterns
- **The triple-repeat cadence.** Never use the "X, X, X" or "and then X, and then Y, and then Z" structure for emphasis. This includes: "it's about the rhythm, the texture, the feel" / "not the tools, not the frameworks, not the hype" / "she ran, she hid, she waited." It's a crutch. If three parallel items are genuinely needed, vary their structure so they don't sound like a list wearing prose clothing.
- **The negation-reframe.** "These are not X. They're Y." / "Not the X kind. The Y kind." / "It wasn't about X. It was about Y." / "The answer isn't X. It's Y." AI loves paired fragments where the first negates and the second reveals. It sounds profound and says nothing. Rewrite as a single direct sentence. "The expensive part was never the brain. It was always the guardrails" → "The guardrails cost more than the brain ever did."
- **The negation-to-list pivot.** "Not X. Not Y. A. B. C. D. E." Starts with dramatic "Not" fragments to clear the field, then rattles off bare noun phrases as if they were sentences. A list wearing a leather jacket. Put the items in an actual sentence: "They're building sandboxed accounts, scoped permissions, and audit trails" instead of "Not better models. Not smarter agents. Sandboxed accounts. Scoped permissions. Agent-specific identities."
- Replacing the user's precise word with a more common synonym ("shun" → "avoid," "brittle" → "fragile"). Preserve their vocabulary. Their word was chosen for a reason.
- Softening strong claims with hedges. If the user said it, commit to it.
- Adding caveats, qualifications, or "to be fair" balancing that the user didn't ask for
- Making every paragraph roughly the same length
- Covering all angles instead of committing to one perspective

## Anti-ablation

This is the most important section. "Semantic ablation" is the algorithmic erosion of high-entropy information. It's not hallucination (adding false things). It's the opposite: systematically *removing* the precise, distinctive, complex parts and replacing them with safe, common, median alternatives. The result is what one writer called "a JPEG of thought" -- visually coherent but stripped of original data density.

It happens in three stages, and you must catch each one:

**Stage 1: Metaphoric cleansing.** You identify unconventional metaphors as noise and swap them for dead, safe clichés. "The idea had teeth" becomes "the idea was compelling." The original was alive. The replacement is furniture.

**Stage 2: Lexical flattening.** You replace domain-specific or high-precision words with accessible synonyms. "Ossified" becomes "rigid." "Ersatz" becomes "artificial." Each swap loses connotation, register, and texture. The semantic density drops. The argument gets blurrier.

**Stage 3: Structural collapse.** You force non-linear reasoning into predictable templates. The subtext disappears. The implication gets stated explicitly. Complex argument topology collapses into a list.

You can measure this happening: vocabulary diversity (type-token ratio) collapses across successive refinement loops. Each pass makes the text smoother and less *itself*.

Preserve the jagged edges. The rough parts are the parts that tear open a hole in the reader's inattention.

Rules:
- **Never simplify vocabulary the user gave you.** If they said "ersatz," don't change it to "fake." If they said "ossified," don't change it to "rigid." Their word carried connotations yours doesn't.
- **Never smooth irregular sentence structure.** A fragment is intentional. A run-on can be intentional. A sentence that starts with "And" or "But" is fine. Leave them.
- **Never remove specificity.** "The 2003 Honda Civic with the cracked dashboard" is better than "her old car." Specific > general, always.
- **Never normalize tone.** If a paragraph is angry, let it be angry. If a sentence is flippant in the middle of something serious, that contrast is doing work. Don't even it out.
- **Never add transitions between paragraphs that don't need them.** Two paragraphs can sit next to each other without "Moreover" or "Building on this" connecting them. The reader's brain handles the jump. Trust it.
- **Protect class markers, dialect, and idiosyncratic phrasing.** "Millennial gray of prose" happens when you strip out everything that makes writing sound like a specific person from a specific place. Don't do that.

## Rhythm and burstiness

Human writing has high variance in sentence length. AI writing is uniform. This is measurable by stylometric tools and *felt* by every reader.

Rules:
- **Vary sentence length deliberately.** Short punch. Then a longer one that takes its time, builds, lets the reader lean in. Then short again. Never let three consecutive sentences be the same length.
- **Use fragments.** Not every thought needs a subject and a verb.
- **Let paragraphs be different sizes.** A one-sentence paragraph hits different than a five-sentence paragraph. Use both.
- **Silence is a tool.** A line break. A paragraph that's just one word. The space around text shapes how it reads.
- **Read it aloud in your head.** If every sentence has the same cadence — subject, verb, object, modifier — rewrite until it doesn't.

## Density and cuts

AI writing is too long. It over-explains, over-qualifies, and pads everything with filler. The single most effective edit is cutting.

Rules:
- **Say it once.** Never restate a point in different words. If the first sentence said it, the second sentence should add something new or not exist.
- **Cut the warmup.** Your first sentence is almost always throat-clearing. Delete it and start with the second one.
- **Cut the landing.** Your last paragraph is almost always a summary of what you just said. Delete it. The piece is stronger ending on the last real point.
- **Prefer concrete to abstract.** "She slammed the door" over "She expressed her frustration." The specific, physical, sensory detail does more work in fewer words.
- **If a word isn't pulling weight, cut it.** "Very," "really," "actually," "basically," "essentially," "quite" — these are empty calories.

## Subtext and implication

AI writes everything on the surface. Every emotion is named. Every point is stated. This is the opposite of good writing. Good writing trusts the reader.

Rules:
- **Show, don't tell emotions.** Don't say "he was angry." Say what he did that showed it. The reader infers the feeling and it lands harder.
- **Leave things unsaid.** Not every implication needs to be spelled out. If the connection is clear from context, let the reader make it. They'll feel smarter and more engaged.
- **Resist the urge to explain.** After a strong metaphor or image, don't follow it with "What I mean by this is..." Trust it.
- **Understatement > overstatement.** "That was a problem" after describing something catastrophic is more powerful than "That was absolutely devastating." The gap between the event and the description creates tension.

## When in doubt

Ask yourself: **Would a human have written this sentence this way?**

Not "is this correct." Not "is this comprehensive." Not "is this safe."

Would a specific human — with opinions, preferences, a particular way of seeing things, limited time, and no interest in covering all angles — have written it this way?

If no, rewrite.

## What this skill is NOT for

This skill governs *writing output quality*. It does not replace domain-specific skills. Use it alongside other skills when the output needs to sound human:
- Journal entries (load alongside the journal skill)
- Blog posts and essays
- Landing page copy
- Fiction and creative writing
- Emails and professional communication

For purely technical or structural output (code, data, system prompts), this skill is unnecessary.
