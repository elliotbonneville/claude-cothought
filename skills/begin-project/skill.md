---
name: begin-project
description: Spin up a GitHub repo from a project idea note. Use when the user says "begin project", "spin up a project", "start a new repo", or wants to turn a project idea into a working repository.
allowed-tools: Read, Write, Edit, Glob, Bash(mkdir *), Bash(cd *), Bash(git *), Bash(cp *), Bash(ls *), Bash(gh *), Bash(mv *)
---

# Begin Project

Spin up a new project repo from a project idea note in the notes directory. This is the *execution* phase — the project note should already exist (created by `/project`). If it doesn't, create one first or point the user to `/project`.

## Setup

**Load config:** Read `~/.claude/cothought.json`. If it doesn't exist, tell the user to run `/setup` first and stop. Extract:
- `notes_dir` — where notes live
- `dev_dir` — root development directory (e.g., `~/dev`)
- `dev_categories` — list of category subdirectories (e.g., `["apps", "games", "tools", "libs"]`)

## Dev folder structure

The dev directory (`dev_dir` from config) is organized into categories, not a flat list of repos. The categories come from `dev_categories` in the config.

When creating a new project, ask the user which category it belongs in (or infer from context). Default to the first category that sounds like a catch-all (e.g., "tools") if unclear.

## Zettelkasten integration

This skill works with the zettelkasten note network in the notes directory. Before starting, read the zettelkasten skill (in this plugin's `skills/zettelkasten/skill.md`) for linking rules and note conventions. Key points for this skill:

- **Link format**: Use standard markdown links — `[note title](note%20title.md)`. Validate all links with Glob before writing them.
- **Gather related notes**: When spinning up a project, search for existing zettelkasten notes related to the project idea (Glob for keywords, check journal entries for references). These are valuable context.
- **Update the network**: When you create or update the project's note in the notes directory, link it to related concept notes and vice versa. Projects don't exist in isolation — they connect to ideas, research, and conversations already in the network.

## Flow

1. **Ask which project.** Check `projects.md` in the notes directory for existing project ideas. Show the user the list and ask which one they want to spin up — or let them name a new one.

2. **Pick the category.** Show the categories from config and ask which one it belongs in, or infer from context if obvious.

3. **Gather context from the note network.** Search the notes directory for all zettelkasten notes related to this project — concept notes, reference notes, journal entries where it was discussed. Read them to understand the full picture of what the user has already thought through.

4. **Create the repo.** Create a new directory in `<dev_dir>/<category>/<project-name>` (lowercase, hyphens). Run `git init` in it.

5. **Copy the project note and related context.** Create a `docs/` folder in the repo and copy the project's main note file from the notes directory into it as `docs/RESEARCH.md` (or a more fitting name if the note is a spec — e.g., `docs/SPEC.md`). If there are related zettelkasten notes that provide important context, include them in `docs/` too.

6. **Create a minimal README.** Write a `README.md` with the project name and a one-liner description pulled from the note.

7. **Create initial commit.** Stage and commit everything with a message like "Initial project setup from journal notes".

8. **Create remote repo on GitHub.** Use `gh repo create <name> --private --source=. --push` to create a private GitHub repo and push the initial commit. If the user wants it public, ask first.

9. **Update the note network.** Do all of the following:
   - Update the project's entry in `projects.md` with the repo location and a link to the GitHub repo.
   - Update the project's zettelkasten note in the notes directory to link to the repo and mark it as spun up.
   - Add back-links from related concept notes to the project note if they don't already exist.

10. **Report back.** Tell the user the repo is ready, where it is, and what notes were linked.

## Notes

- Don't add boilerplate (no license, no .gitignore, no CI config) unless asked. Keep it minimal.
- If the project note doesn't exist yet, create one in the notes directory first following zettelkasten note conventions (claim-based title, at least one link to a related note), ask the user what the project is about, then proceed. Or suggest they run `/project` first to research and document the idea.
- All links written to files in the notes directory must use the standard markdown format (`[title](file%20name.md)`) and be validated with Glob before writing.
