```
                    ┌───────────────────────────────────┐
                    │                                   │
                    │          COTHOUGHT                │
                    │                                   │
                    │   thinking with, not thinking at  │
                    │                                   │
                    └───────────────┬───────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
               ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
               │ journal │    │  zett.  │    │ review  │
               │         │◄──►│         │◄──►│         │
               └────┬────┘    └────┬────┘    └─────────┘
                    │              │
                    ▼              ▼
              ┌──────────┐  ┌──────────┐
              │ metamap  │  │  notes   │
              │ ◉ stories│  │ ◉──◉──◉ │
              │ ◉ threads│  │ │╲ │ ╱│ │
              │ ◉ patterns  │ ◉──◉──◉ │
              └──────────┘  └──────────┘
```

# Cothought

An AI-assisted thinking system, inspired by the ancient practice of the *hypomnema* (ὑπόμνημα, *hype-OM-neh-mah*): personal notebooks the Stoics and Epicureans used for self-examination. They compiled fragments from readings, conversations, and reflections into a "book of life." Not a diary. Not confession. A structured tool for self-formation.

Foucault described them as capturing "the already said, to collect what one has managed to hear or read, and for a purpose that is nothing less than the shaping of the self."

Marcus Aurelius kept one. This is the version where the notebook thinks back.

[Wikipedia: Hypomnema](https://en.wikipedia.org/wiki/Hypomnema) · [Foucault: "Self Writing"](https://foucault.info/documents/foucault.hypomnemata.en/)

---

A Claude Code plugin that turns a plain markdown folder into a thinking system. Journal capture, zettelkasten note network, weekly review, project scaffolding, and a living self-model called the metamap.

## What's in the box

Eight skills that work together:

- **/journal** — Voice-to-text capture with verbatim transcription. Two-zone format: conversation above the line, reflections below. Updates the metamap every session.
- **/zettelkasten** — Brainstorming and research companion. Creates and links notes with claim-based titles, history tables, back-links. Three note types (concept, reference, structure). Validates all links.
- **/review** — Weekly synthesis across journal entries and the note network. Follows links, reads history tables, surfaces patterns, checks progress on configurable life foundations.
- **/project** — Captures and researches a project idea into a zettelkasten note with web research and network connections.
- **/begin-project** — Spins up a GitHub repo from a project idea note, pulling related zettelkasten context into the repo's docs.
- **/voice** — Writing quality skill. Fights AI voice at the architectural level: vocabulary, structure, rhythm, density, subtext. Load alongside other skills when the output needs to sound human.
- **/setup** — Interactive first-run configuration. Creates your config file and optionally seeds your notes directory.
- **/write-vision** — Guided exercise for creating aspirational "example day" passages that ground the whole system.

## The metamap

The most distinctive piece. A living self-model stored in `metamap.md` that the journal updates every session. It tracks:

- **Who you are right now** — one paragraph, updated constantly. Includes a "chapter title" (from Dan McAdams' narrative identity research).
- **Dominant stories & counter-evidence** — the things you believe about yourself ("I never finish anything") alongside dated evidence for and against. Over time, the counter-evidence loosens the story's grip. This is the therapeutic core, drawn from Michael White's narrative therapy.
- **Pattern map** — recurring trigger → thought → feeling → behavior chains (CBT-style). Both destructive loops and positive ones.
- **Breakthroughs & experiments** — insights paired with whether they were tested and what happened. Reflection without experimentation is rumination.
- **Active threads, commitments, open questions, relationships, physical state correlations.**

Research foundations are documented in [docs/metamap-research.md](docs/metamap-research.md).

## Install

Install as a Claude Code plugin:

```bash
claude plugin install --path /path/to/cothought
```

Or test locally without installing:

```bash
claude --plugin-dir /path/to/cothought
```

Then run `/setup` in Claude Code to create your config file interactively, or copy and edit the example:

```bash
cp /path/to/cothought/cothought.example.json ~/.claude/cothought.json
```

Once published to GitHub, install directly:

```bash
claude plugin install github:elliotbonneville/claude-cothought
```

## Config

All skills read `~/.claude/cothought.json` at invocation. No build step, no template variables. The config has:

```json
{
  "notes_dir": "/path/to/your/notes/",
  "dev_dir": "~/dev",
  "dev_categories": ["apps", "games", "tools", "libs"],
  "reference_files": {
    "vision": "vision/main.md",
    "plan": "90-day-plan.md"
  },
  "review": {
    "foundations": [
      { "name": "Sleep", "keywords": ["bedtime", "sleep", "energy"] },
      { "name": "Exercise", "keywords": ["gym", "run", "strength"] }
    ]
  },
  "metamap": {
    "ifs_enabled": true,
    "parts": ["the maximizer", "the anxious part", "the builder"]
  }
}
```

- `notes_dir` — where all notes, journal entries, and the metamap live. Required.
- `dev_dir` — where code projects go. Used by /begin-project.
- `dev_categories` — subdirectories under dev_dir for organizing repos.
- `reference_files` — named files (relative to notes_dir) that journal and review read for context. Entirely optional. Add whatever matters to you.
- `review.foundations` — life areas to check during weekly review, each with keywords to search for. Only mentioned if they appear in entries.
- `metamap.ifs_enabled` — whether to track Internal Family Systems parts.
- `metamap.parts` — named parts to watch for during journal sessions.

Skills check for missing keys gracefully. The only required field is `notes_dir`.

## How skills connect

The skills reference each other and form a coherent system:

- Journal loads zettelkasten rules for linking and note creation
- Review reads history tables created by zettelkasten sessions
- Project creates notes following zettelkasten conventions
- Begin-project reads project notes and gathers related zettelkasten context
- Voice loads alongside journal or any writing task

## Updating

```bash
claude plugin update cothought
```

## Adding personal skills

You can add your own skills alongside the cothought ones in `~/.claude/skills/`. Personal skills and plugin skills coexist without conflicts. See [docs/customization.md](docs/customization.md) for examples.

## License

MIT
