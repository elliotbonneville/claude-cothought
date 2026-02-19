---
name: vision
description: Read an aspirational passage to reconnect with your vision. Use when feeling stuck, discouraged, lost, or needing grounding. Also triggered by "vision check", "remind me why".
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(date *), Bash(shuf *)
argument-hint: "[passage name or number, or 'random']"
---

# Vision

Read one of your vision passages to ground yourself in what you're building toward.

## Setup

Today's date: !`date +%m-%d-%Y`

**Load config:** Read `~/.claude/cothought.json`. Extract `notes_dir` and look for `reference_files.vision` — this should point to a directory or file containing your vision writing.

Vision directory: `<notes_dir>/<reference_files.vision>`

1. **Read the metamap** (`metamap.md` in the notes directory) silently. Hold the context — active threads, dominant stories, what you're working through, your current chapter. This informs your reflection.
2. **Discover available passages.** Use Glob for files in the vision directory. Don't hardcode the list — new passages may be added.

## Selection

- If the user passes an argument (`$ARGUMENTS`), match it:
  - A number (e.g., `/vision 4`) → read that numbered file
  - A keyword (e.g., `/vision winter`) → find the best match
  - `random` or no argument → pick one at random
- **Metamap awareness**: If no argument is given and you've read the metamap, lean toward a passage that speaks to what the user is currently working through. Use judgment — don't over-think it.

## Presentation

1. Read the selected file.
2. Present it directly to the user — just the content, cleanly. No preamble like "Here's your vision!" Just read it to them, as if reading aloud.
3. After the text, add one brief line — a short, honest reflection connecting the passage to where they are right now. You have the metamap — use it. Name what's real. If a dominant story is active and this passage contradicts it, that's worth one quiet sentence. Don't lecture. Don't coach. Just one line that lands.

## After reading

The fact that the user reached for the vision skill is itself a signal. Quietly note this in the metamap:

- If an active thread relates to what triggered the vision check, update its "latest development" with a brief note.
- If a dominant story is in play and the passage offers counter-evidence, add a row. The act of reconnecting with the vision is itself evidence of persistence.
- Keep it to one or two small updates. Don't make a production of it.

## Voice

- Quiet. Let the writing do the work.
- No emojis.
- Don't over-explain or analyze. Your job is to put the words in front of them.
