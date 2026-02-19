---
name: project
description: Capture, document, and research a new project idea. Use when the user has a project idea to explore — creates a research note, does web research, and links it in projects.md. Does NOT create a repo (use /cothought:begin-project for that).
allowed-tools: Read, Write, Edit, Glob, Grep, WebSearch, WebFetch, Task
---

# Project

Capture a project idea, research it, and create a proper project note linked into the network. This skill is for the *thinking and documenting* phase — exploring what a project could be, gathering research, and writing it up. It does NOT create repos, folders, or code. When the user is ready to start building, they use `/cothought:begin-project`.

## Setup

Today's date: !`date +%m-%d-%Y`

**Load config:** Read `~/.claude/cothought.json`. If it doesn't exist, tell the user to run `/cothought:setup` first and stop. Extract `notes_dir`.

Notes directory: `<notes_dir from config>`

1. Read the zettelkasten skill (in this plugin's `skills/zettelkasten/skill.md`) for note format conventions, linking rules, and history table requirements.
2. Read `projects.md` in the notes directory to see existing projects.
3. If context is unclear, ask the user what the project idea is in one sentence.

## Flow

1. **Understand the idea.** Ask the user what they're thinking, or infer from context. Get enough to know what to research.

2. **Research.** Spawn a research subagent (Task tool, subagent_type: general-purpose, run_in_background: true) to search the web for:
   - Prior art — what already exists in this space
   - Key techniques, tools, or approaches
   - Relevant articles, papers, blog posts, discussions
   - Any specific references the user mentioned
   Run this in the background (`run_in_background: true`) so the conversation keeps flowing. Check the output later and weave findings into the note.

3. **Search the note network.** Glob and Grep the notes directory for existing notes related to this project idea — concept notes, journal entries, other project notes. Read anything relevant for context.

4. **Create the project note.** Follow zettelkasten note conventions from the zettelkasten skill:
   - Filename: lowercase with spaces (e.g., `ai writing quality.md`)
   - Content above `---`, history table below
   - At least one link to a related note (no orphans)
   - Include: project summary, research findings (with verified URLs), open questions, connections to existing notes/threads

5. **Link it in projects.md.** Add the project to the appropriate section (Active, Research/Background, Dormant) using standard markdown link format: `[project name](project%20name.md)` with a short description.

6. **Back-link.** If the project note references other existing notes, add back-links to those notes.

7. **Report back.** Tell the user the note is created, what research was found, and what it connects to. If they want to spin up a repo, point them to `/cothought:begin-project`.

## Notes

- Every project gets its own note file. `projects.md` is the index only — no project ideas inline.
- Use standard markdown links (`[title](file%20name.md)`), not wikilinks. Validate with Glob before writing.
- All external URLs must be verified with WebFetch before including them.
- If the user mentions the project in a journal session, also capture it in the journal entry.
