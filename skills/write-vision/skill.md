---
name: write-vision
description: Create your vision — a collection of vivid "example day" passages describing the life you're building toward. Use during first-run setup or anytime you want to add a new vision passage.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(mkdir *)
---

# Write Vision

Walk the user through creating their vision — a collection of vivid, concrete passages describing specific days in the life they're building toward. These become the grounding texts that the vision skill reads back to them when they need it.

## Setup

**Load config:** Read `~/.claude/cothought.json`. If it doesn't exist, tell the user to run `/setup` first and stop. Extract `notes_dir`.

Notes directory: `<notes_dir from config>`
Vision directory: `<notes_dir>/vision/`

Check if the vision directory exists. If not, create it. Check if any vision passages already exist (Glob for `[0-9][0-9]-*.md` files).

## First-time flow

If no vision passages exist yet, walk them through the full process:

### 1. Explain what this is

Keep it short and real:

"This is where you write down the life you're building toward. Not goals. Not a five-year plan. Specific days — what they look, feel, smell, and sound like. A Tuesday morning. A Saturday with the kids. A nothing day where everything is quiet and good.

These passages become your grounding texts. When you're stuck or drifting, you can run /vision and it'll read one back to you. The more vivid and specific they are, the harder they hit."

### 2. Write the core vision

Ask: "Before we write specific days, let's get the big picture. In a few paragraphs, what does the life you're building toward actually look like? Don't filter. Don't be practical. Just describe it."

Capture their words verbatim. Write this to `vision/00-vision.md` with a simple format:

```markdown
# The Vision

[Their words, exactly as spoken]
```

### 3. Write example days

Now walk them through 3-5 specific days. For each one:

1. **Prompt with a scenario.** Suggest a type of day that would be meaningful:
   - A regular weekday morning
   - A day deep in creative work
   - A weekend with family
   - A nothing day — no plans, just peace
   - A day where something hard happens and they handle it well
   - A winter evening / summer afternoon (seasonal)

2. **Ask them to describe it.** "Walk me through this day. What time do you wake up? What do you see? What does the house smell like? Who's there? What are you doing at 10am? At 3pm? How does the evening go?"

3. **Capture verbatim and write.** Save each as a numbered file: `vision/01-morning.md`, `vision/02-deep-work.md`, etc. Use their words. You can shape the prose slightly (load the voice skill from this plugin's `skills/voice/skill.md` if it exists), but the content is theirs.

Format for each passage:

```markdown
# [Descriptive title — e.g., "A Tuesday Morning" or "Deep in the Novel"]

[Their vision of this day, vivid and specific]
```

4. **Don't force it.** If they run out of steam after 2-3 passages, that's fine. They can always come back with `/write-vision` to add more.

### 4. Optionally create hooks

After the vision passages, ask: "Some people find it helpful to have a short list of daily 'hooks' — small anchors that connect each day to the bigger vision. Things like 'Bed by 10:30' or '20 minutes of writing before email.' Want to create a hooks file?"

If yes, capture their hooks and write to `hooks.md` in the notes directory. Add `"hooks": "hooks.md"` to `reference_files` in the config.

### 5. Update config

If they created vision passages, update `~/.claude/cothought.json` to add:
```json
"reference_files": {
  "vision": "vision/00-vision.md"
}
```

(Merge with existing reference_files, don't overwrite.)

### 6. Wrap up

Tell them:
- Their vision passages are in `<notes_dir>/vision/`
- They can read them anytime with `/vision` (if they have a vision skill set up)
- They can add more passages anytime with `/write-vision`
- The journal and review skills will read the vision file for context

## Returning flow

If vision passages already exist, show what's there and ask what they want to do:

- **Add a new passage** — prompt with a scenario suggestion, capture, and write
- **Revise an existing one** — read it back, ask what's changed, update it
- **Rewrite the core vision** — sometimes the big picture shifts. That's healthy, not failure.

## Voice

- Load the voice skill (this plugin's `skills/voice/skill.md`) if it exists. The vision passages should sound like the user, not like AI.
- Be warm but not sappy. This is a personal exercise. Match their energy.
- Don't push. If they're not feeling it, let them stop and come back later.
- The user's words are the foundation. You shape, you don't generate.
- No emojis.
