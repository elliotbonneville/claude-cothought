---
name: setup
description: First-run configuration for Cothought. Creates ~/.claude/cothought.json and optionally seeds your notes directory with a metamap template.
allowed-tools: Read, Write, Edit, Glob, Bash(ls *), Bash(cp *)
---

# Setup

Interactive first-run configuration for Cothought. This creates the config file that all other skills depend on.

## Check existing config

First, check if `~/.claude/cothought.json` already exists. If it does, read it and ask the user if they want to reconfigure or just update specific values. Don't overwrite without confirmation.

## Gather information

Walk the user through these questions one at a time. Keep it conversational, not like a form.

### 1. Notes directory

"Where do your notes live? This is the directory where journal entries, zettelkasten notes, and the metamap will be stored."

- Must be an absolute path
- Verify it exists with `ls`
- If it doesn't exist, ask if they want to create it

### 2. Dev directory (optional)

"Where do you keep your code projects? This is used by /begin-project to spin up new repos."

- Default: `~/dev`
- Ask for category subdirectories (e.g., apps, games, tools, libs)
- Default categories: `["apps", "tools", "libs"]`

### 3. Reference files (optional)

"Do you have any special files in your notes directory that you want the journal and review skills to read for context? Things like a vision document, a plan, daily hooks, or a blog ideas list."

- Each reference file has a name (key) and a path relative to the notes directory
- Common ones: vision, plan, hooks, blog_ideas
- All optional — skip if the user doesn't have any yet

### 4. Review foundations (optional)

"When you do a weekly review, what areas of your life do you want to track? These are the 'foundations' — things like sleep, exercise, writing, finances. Each one gets a name and some keywords to search for in journal entries."

- Each foundation has a name and a list of keywords
- Default suggestion: Sleep, Exercise, Writing
- The user can customize or skip entirely

### 5. IFS / Parts tracking (optional)

"The metamap can track internal 'parts' — voices or modes you notice in yourself, like 'the anxious part' or 'the maximizer.' This comes from Internal Family Systems (IFS) therapy. Want to enable this?"

- If yes, ask them to name their parts (they can add more later)
- If no or unsure, set `ifs_enabled: false`

## Write config

After gathering all info, write `~/.claude/cothought.json` with the collected values. Show the user the final config and confirm before writing.

Example output:

```json
{
  "notes_dir": "/Users/name/notes/",
  "dev_dir": "~/dev",
  "dev_categories": ["apps", "tools", "libs"],
  "reference_files": {
    "vision": "vision/main.md",
    "plan": "90-day-plan.md"
  },
  "review": {
    "foundations": [
      { "name": "Sleep", "keywords": ["bedtime", "sleep", "energy", "waking"] },
      { "name": "Exercise", "keywords": ["gym", "run", "strength", "workout"] }
    ]
  },
  "metamap": {
    "ifs_enabled": false,
    "parts": []
  }
}
```

## Seed notes directory (optional)

After writing the config, ask: "Want me to set up your notes directory with a starter metamap?"

If yes:
1. Check if `metamap.md` already exists in the notes directory. If it does, don't overwrite.
2. If it doesn't exist, copy the template from the cothought repo's `templates/metamap.md` into the notes directory.
3. Check if a CLAUDE.md exists in the notes directory. If not, offer to create one from `templates/CLAUDE.md`.

## Vision (optional)

After the config and seed steps, ask: "One more thing — want to write your vision? This is a set of vivid 'example day' passages describing the life you're building toward. The journal and review skills use it for context, and you can read it back anytime with `/vision`. Takes about 10-15 minutes."

- If yes, tell them to run `/write-vision` — it walks through the whole process.
- If no, that's fine. Mention they can do it anytime later with `/write-vision`.

## Finish

Tell the user they're set up. Mention:
- Config is at `~/.claude/cothought.json`
- They can edit it anytime
- Suggest trying `/journal` to start their first session
- If they didn't seed the metamap, mention that the journal skill will create one automatically from their first few sessions
- If they skipped the vision, remind them `/write-vision` is there when they're ready
