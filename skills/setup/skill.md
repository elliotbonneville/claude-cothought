---
name: cothought:setup
description: First-run configuration for Cothought. Creates ~/.claude/cothought.json and optionally seeds your notes directory with a metamap template.
allowed-tools: Read, Write, Edit, Glob, Task, Bash(ls *), Bash(cp *)
---

# Setup

Interactive first-run configuration for Cothought. This creates the config file that all other skills depend on.

## Check existing config

First, check if `~/.claude/cothought.json` already exists. If it does, read it and ask the user if they want to reconfigure or just update specific values. Don't overwrite without confirmation.

## Choose setup mode

Unless the user already passed `advanced` as an argument, ask upfront:

"Two ways to set up: **quick** gets you journaling in under a minute — just your notes folder and a dictation tool. **Full setup** also configures weekly review foundations, metamap options, and a vision exercise. Which do you want?"

- If they pick quick, run the simple setup below.
- If they pick full, run simple setup first, then continue into advanced setup.
- If `$ARGUMENTS` contains "advanced", skip the question and run both.

## Simple setup

Get the user journaling as fast as possible. Ask only what's essential.

### 1. Notes directory

"Where do your notes live? This is the directory where journal entries, zettelkasten notes, and the metamap will be stored."

- Must be an absolute path
- Verify it exists with `ls`
- If it doesn't exist, ask if they want to create it

### 2. Reference files (optional, quick)

"Do you have any files in your notes directory you'd want the journal to read for context? A vision document, a plan, daily hooks — anything like that. You can always add these later."

- Each reference file has a name (key) and a path relative to the notes directory
- All optional — skip if the user doesn't have any yet
- Don't belabor this — one quick question, move on

### 3. Voice dictation

"Cothought works best with voice dictation — you talk, it captures your words. What are you using for speech-to-text?"

If they already have a setup (macOS Dictation, Whisper, Superwhisper, etc.), note it and move on.

If they don't have one or aren't sure, spawn a background research agent (Task tool, subagent_type: general-purpose, run_in_background: true) to find the best current voice dictation options for their platform. While waiting, continue with the rest of setup. When results come back, suggest 2-3 good options:

- **macOS built-in Dictation** — free, works everywhere, good enough to start. System Settings → Keyboard → Dictation.
- **Wispr Flow** — popular voice-to-text app for Mac, designed for developers and writers.
- Any other standout tools the research surfaces (Whisper-based apps, Superwhisper, etc.)

The goal is to make sure they leave setup with a working dictation method, not just a config file.

### 4. Done

Write `~/.claude/cothought.json` with just the essentials:

```json
{
  "notes_dir": "/Users/name/notes/",
  "reference_files": {}
}
```

Then offer: "That's it — you're ready to journal. Run `/cothought:journal` to start. If you want to configure review foundations, project directories, or other advanced settings, run `/cothought:setup advanced` anytime."

## Advanced setup

Triggered by `/cothought:setup advanced` or if the user asks for more options. Includes everything from simple setup plus:

### Review foundations

"When you do a weekly review, what areas of your life do you want to track? These are the 'foundations' — things like sleep, exercise, writing, finances. Each one gets a name and some keywords to search for in journal entries."

- Each foundation has a name and a list of keywords
- Default suggestion: Sleep, Exercise, Writing
- The user can customize or skip entirely

### Metamap options

"The metamap can track IFS-style internal 'parts' — voices or modes you notice in yourself, like 'the anxious part' or 'the maximizer.' Want to enable this?"

- If yes, ask them to name their parts (they can add more later)
- If no or unsure, set `ifs_enabled: false`

**Note:** Dev directory and project categories are NOT configured here. The `/cothought:project` and `/cothought:begin-project` skills handle their own onboarding the first time they're used.

## Write config

After gathering all info, write `~/.claude/cothought.json` with the collected values. Show the user the final config and confirm before writing.

## Seed notes directory (optional)

After writing the config, ask: "Want me to set up your notes directory with a starter metamap?"

If yes:
1. Check if `metamap.md` already exists in the notes directory. If it does, don't overwrite.
2. If it doesn't exist, copy the template from the cothought repo's `templates/metamap.md` into the notes directory.
3. Check if a CLAUDE.md exists in the notes directory. If not, offer to create one from `templates/CLAUDE.md`.

## Vision (optional)

After the config and seed steps, ask: "One more thing — want to write your vision? This is a set of vivid 'example day' passages describing the life you're building toward. The journal and review skills use it for context, and you can read it back anytime with `/cothought:vision`. Takes about 10-15 minutes."

- If yes, tell them to run `/cothought:write-vision` — it walks through the whole process.
- If no, that's fine. Mention they can do it anytime later with `/cothought:write-vision`.

## Finish

Tell the user they're set up. Mention:
- Config is at `~/.claude/cothought.json`
- They can edit it anytime
- Suggest trying `/cothought:journal` to start their first session
- If they didn't seed the metamap, mention that the journal skill will create one automatically from their first few sessions
- If they skipped the vision, remind them `/cothought:write-vision` is there when they're ready
