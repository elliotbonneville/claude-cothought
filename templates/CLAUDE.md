# Notes — Instructions

## Voice
When creating or adding to notes, always transcribe the user's words exactly as spoken. These are personal journal entries — the user's own voice and phrasing must be preserved verbatim. Do not paraphrase, rewrite, or editorialize their words.

If adding reflections or commentary, clearly separate them from the user's words (e.g., below a horizontal rule) so it's obvious what is theirs and what is added.

## Tool Usage

**ALWAYS prefer built-in tools over Bash equivalents.** Bash commands require manual approval, halting progress.

| Instead of Bash... | Use Built-in Tool |
|-------------------|-------------------|
| `ls`, `find`      | **Glob**, **LS**  |
| `cat`, `head`, `tail` | **Read**      |
| `grep`, `rg`      | **Grep**          |
| `sed`, `awk`      | **Edit**, **MultiEdit** |

This applies to subagents spawned via Task as well.

## File Safety
Use `trash` instead of `rm` for deleting files. Never permanently delete notes.
