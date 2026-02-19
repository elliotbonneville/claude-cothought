# Customization

Cothought is a Claude Code plugin. Your personal skills live in `~/.claude/skills/` as regular directories, separate from plugin skills. This means you can extend the system with skills specific to your life without forking the repo.

## Adding a personal skill

Create a directory in `~/.claude/skills/` with a `skill.md` (or `SKILL.md`) file:

```
~/.claude/skills/my-skill/skill.md
```

The skill file needs YAML frontmatter with at minimum a `name` and `description`:

```yaml
---
name: my-skill
description: What this skill does. This text appears in Claude's skill list.
allowed-tools: Read, Write, Edit, Glob, Grep
---
```

Then write the skill instructions in markdown below the frontmatter.

## Loading the config

If your personal skill needs access to the notes directory or other cothought settings, read the config the same way the built-in skills do:

```markdown
**Load config:** Read `~/.claude/cothought.json`. If it doesn't exist, tell the user to run `/setup` first and stop. Extract `notes_dir`.
```

## Example: Vision skill

A skill that reads from a collection of aspirational "example day" writings to ground the user when they feel stuck. Reads the metamap for context, then picks a relevant passage.

```markdown
---
name: vision
description: Read an aspirational passage to reconnect with your vision. Use when feeling stuck, discouraged, or lost.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash(date *), Bash(shuf *)
argument-hint: "[day name or number, or 'random']"
---

# Vision

Read one of your vision passages to ground yourself.

## Setup

Today's date: !`date +%m-%d-%Y`

**Load config:** Read `~/.claude/cothought.json`. Extract `notes_dir` and check
for a `reference_files.vision` entry pointing to your vision directory or file.

1. Read the metamap silently for context — active threads, dominant stories,
   current chapter. This informs your reflection.
2. Discover available passages. Use Glob for files in the vision directory.

## Selection

- If the user passes an argument, match it (a number, keyword, or "random")
- If no argument, pick based on what the metamap suggests — a passage that speaks
  to what the user is currently working through.

## Presentation

1. Read the selected file.
2. Present it directly — no preamble, just the content.
3. After the text, add one brief line connecting the passage to where they are
   right now. Use the metamap. Name what's real. Don't lecture.

## After reading

Note the vision check in the metamap — the act of reaching for the vision is
itself a signal worth tracking.

## Voice

- Quiet. Let the writing do the work.
- No emojis.
```

## Example: Blog post skill

A skill that writes and publishes blog posts, loading the voice skill for quality and referencing the zettelkasten for research material.

```markdown
---
name: blog-post
description: Write and publish blog posts. Loads the voice skill for writing quality and zettelkasten for research.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Task, WebFetch, WebSearch
---

# Blog Post

You are writing a blog post. The user will give you a topic, thesis, or rough idea.

## Setup

**Load config:** Read `~/.claude/cothought.json`. Extract `notes_dir`.
Also set your blog repo path and posts directory.

Blog repo: `~/dev/apps/my-blog/`
Posts directory: `src/posts/`

1. **Load the voice skill.** Read `~/.claude/skills/voice/skill.md` and follow ALL
   of its rules. The writing must not sound like AI.
2. **Read existing posts** to absorb the user's voice and style.
3. **Check the zettelkasten.** Read related concept notes and journal entries for
   raw material — quotes, anecdotes, research.
4. **Research.** Verify all references. Spawn research subagents for anything
   that needs fact-checking.

## Writing process

1. **Gather raw material** from notes, journal, and research.
2. **Draft** following the voice skill strictly.
3. **De-AI pass** — go line by line checking against banned patterns.
4. **Verify** all URLs, quotes, names, dates.
5. **Present to the user** for approval before publishing.

## Voice

Study the user's existing posts. Match that energy and style.
The ideas come from the user. You shape the prose.
```

## Tips

- Personal skills can reference cothought plugin skills by reading them from the plugin's installed location.
- Personal skills in `~/.claude/skills/` and plugin skills coexist without conflicts.
- The config file is the right place for personal paths and settings. Skills should read it rather than hardcoding paths.
