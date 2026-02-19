# Cothought

A Claude Code plugin that turns a plain markdown folder into a thinking system. You journal by voice, and the AI captures your words verbatim, links ideas into a zettelkasten note network, and maintains a living self-model called the metamap. Over time, it builds a picture of who you are, what you're working through, and what patterns keep showing up. Then it uses that picture to ask better questions.

The name is a nod to the ancient *hypomnema* (ὑπόμνημα, *hype-OM-neh-mah*), personal notebooks the Stoics and Epicureans kept for self-examination. They compiled fragments from readings, conversations, and daily life into a structured tool for self-formation. Foucault described them as capturing "the already said, to collect what one has managed to hear or read, and for a purpose that is nothing less than the shaping of the self." Marcus Aurelius kept one. Seneca kept one. This is the version where the notebook thinks back.

[Wikipedia: Hypomnema](https://en.wikipedia.org/wiki/Hypomnema) · [Foucault: "Self Writing"](https://foucault.info/documents/foucault.hypomnemata.en/)

## Quick start

In Claude Code, open the marketplace, add a custom plugin, and paste `elliotbonneville/claude-cothought` as the source. Enable the plugin and restart Claude Code.

Then run `/cothought:setup` to create your config. It asks where your notes live, helps you pick a voice dictation tool, and you're done. Run `/cothought:journal` to start your first session.

All skills are prefixed with `cothought:` since they come from the plugin. You invoke them as `/cothought:journal`, `/cothought:review`, etc.

## What's in the box

Eight skills that work together:

- **/cothought:journal** — Voice-to-text capture with verbatim transcription. Two-zone format: conversation above the line, reflections below. Updates the metamap every session.
- **/cothought:zettelkasten** — Brainstorming and research companion. Creates and links notes with claim-based titles, history tables, back-links. Three note types (concept, reference, structure). Validates all links.
- **/cothought:review** — Weekly synthesis across journal entries and the note network. Follows links, reads history tables, surfaces patterns, checks progress on configurable life foundations.
- **/cothought:project** — Captures and researches a project idea into a zettelkasten note with web research and network connections.
- **/cothought:begin-project** — Spins up a GitHub repo from a project idea note, pulling related zettelkasten context into the repo's docs.
- **/cothought:voice** — Writing quality skill. Fights AI voice at the architectural level: vocabulary, structure, rhythm, density, subtext. Load alongside other skills when the output needs to sound human.
- **/cothought:setup** — Interactive first-run configuration. Creates your config file and optionally seeds your notes directory.
- **/cothought:write-vision** — Guided exercise for creating aspirational "example day" passages that ground the whole system.

## The metamap

The most distinctive piece. A living self-model stored in `metamap.md` that the journal skill updates every session. It draws on research from narrative therapy, CBT, IFS, and reflective practice to maintain a structured picture of who you are right now. It tracks:

- **Who you are right now** — one paragraph, updated constantly. Includes a "chapter title" (from Dan McAdams' narrative identity research).
- **Dominant stories & counter-evidence** — the things you believe about yourself ("I never finish anything") alongside dated evidence for and against. Over time, the counter-evidence loosens the story's grip. This is the therapeutic core, drawn from Michael White's narrative therapy.
- **Pattern map** — recurring trigger → thought → feeling → behavior chains (CBT-style). Both destructive loops and positive ones.
- **Breakthroughs & experiments** — insights paired with whether they were tested and what happened. Reflection without experimentation is rumination.
- **Active threads, commitments, open questions, relationships, physical state correlations.**

Research foundations are documented in [docs/metamap-research.md](docs/metamap-research.md).

## Config

All skills read `~/.claude/cothought.json` at invocation. Run `/cothought:setup` to create this interactively, or copy and edit the example:

```bash
cp cothought.example.json ~/.claude/cothought.json
```

The only required field is `notes_dir`. Everything else is optional and can be added later — either through `/cothought:setup advanced` or by skills that onboard their own config on first use (e.g., `/cothought:begin-project` asks for your dev directory the first time you use it).

```json
{
  "notes_dir": "/path/to/your/notes/",
  "reference_files": {
    "vision": "vision/main.md",
    "plan": "90-day-plan.md"
  }
}
```

See `cothought.example.json` for a full config with all options.

## How skills connect

The skills reference each other and form a coherent system:

- Journal loads zettelkasten rules for linking and note creation
- Review reads history tables created by zettelkasten sessions
- Project creates notes following zettelkasten conventions
- Begin-project reads project notes and gathers related zettelkasten context
- Voice loads alongside journal or any writing task

## Adding personal skills

You can add your own skills alongside the cothought ones in `~/.claude/skills/`. Personal skills and plugin skills coexist without conflicts. See [docs/customization.md](docs/customization.md) for examples.

## License

MIT
