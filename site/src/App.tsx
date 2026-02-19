import { useEffect, useRef, useState } from 'react'
import './App.css'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    const children = el.querySelectorAll('.reveal')
    children.forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [])
  return ref
}


const skills = [
  { name: '/cothought:journal', description: 'Voice-to-text capture with verbatim transcription. Two-zone format: conversation above the line, reflections below. Updates the metamap every session.' },
  { name: '/cothought:zettelkasten', description: 'Brainstorming and research companion. Creates and links notes with claim-based titles, history tables, and back-links. Validates all links.' },
  { name: '/cothought:review', description: 'Weekly synthesis across journal entries and the note network. Surfaces patterns, checks progress on configurable life foundations.' },
  { name: '/cothought:project', description: 'Captures and researches a project idea into a zettelkasten note with web research and network connections.' },
  { name: '/cothought:begin-project', description: 'Spins up a GitHub repo from a project idea note, pulling related zettelkasten context into the repo\'s docs.' },
  { name: '/cothought:voice', description: 'Writing quality skill. Fights AI voice at the architectural level: vocabulary, structure, rhythm, density, subtext.' },
  { name: '/cothought:setup', description: 'Interactive first-run configuration. Creates your config file and optionally seeds your notes directory.' },
  { name: '/cothought:write-vision', description: 'Guided exercise for creating aspirational "example day" passages that ground the whole system.' },
]

const metamapSections = [
  { name: 'Who I Am Right Now', detail: 'One paragraph, updated every session. A snapshot of current reality — not aspirational, descriptive. Includes a "chapter title" naming the current life period.', source: 'McAdams, narrative identity' },
  { name: 'Dominant Stories', detail: 'The things you believe about yourself alongside dated evidence for and against. Over time, the counter-evidence loosens the story\'s grip. The therapeutic core.', source: 'White, narrative therapy' },
  { name: 'Pattern Map', detail: 'Recurring trigger → thought → feeling → behavior chains. Both destructive loops and positive ones. The full chain, not just the trigger.', source: 'CBT case formulation' },
  { name: 'Breakthroughs', detail: 'Insights paired with whether they were tested and what happened. "Realized X → Tried Y → Result: Z." Reflection without experimentation is rumination.', source: 'Kolb, Di Stefano et al.' },
  { name: 'Active Threads', detail: 'Things being worked through that span multiple sessions. Status, date first appeared, latest development, connected threads.', source: 'Zettelkasten, knowledge graphs' },
  { name: 'Physical Correlations', detail: 'Body → mind connections confirmed across multiple sessions. Your personal user manual for your own body-mind system.', source: 'Pennebaker, quantified self' },
]

const researchDomains = [
  'Narrative therapy',
  'CBT',
  'Internal Family Systems',
  'Narrative identity',
  'Reflective practice',
  'Expressive writing',
  'Zettelkasten',
  'Progressive summarization',
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useReveal()
  const originRef = useReveal()
  const howRef = useReveal()
  const installRef = useReveal()
  const skillsRef = useReveal()
  const metamapRef = useReveal()
  const researchRef = useReveal()
  const demoRef = useReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
      {/* Header */}
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <span className="header__name">Cothought</span>
        <a className="header__github" href="https://github.com/elliotbonneville/claude-cothought">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </header>

      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="container">
          <div className="reveal">
            <p className="hero__greek">ὑπόμνημα</p>
          </div>
          <h1 className="hero__title reveal reveal--delay-1">Cothought</h1>
          <p className="hero__subtitle reveal reveal--delay-2">
            A Claude Code plugin that turns a plain markdown folder into a thinking system.
            Journal by voice. Link ideas into a zettelkasten. Maintain a living self-model
            that thinks back.
          </p>
        </div>
        <div className="hero__scroll-hint">
          <div className="hero__scroll-line" />
          <span>scroll</span>
        </div>
      </section>

      {/* Origin */}
      <section className="origin" ref={originRef}>
        <div className="container">
          <blockquote className="origin__epigraph reveal">
            "To collect what one has managed to hear or read, and for a purpose that is
            nothing less than the shaping of the self."
          </blockquote>
          <p className="origin__attribution reveal reveal--delay-1">
            — Michel Foucault, on the ancient <em>hypomnema</em>
          </p>
          <p className="origin__text reveal reveal--delay-2">
            The Stoics and Epicureans kept personal notebooks — <em>hypomnemata</em> —
            compiling fragments from readings, conversations, and daily life into a
            structured tool for self-examination. Marcus Aurelius kept one. Seneca kept one.
            Cothought is the version where the notebook thinks back. It captures your words
            exactly as spoken, links ideas across sessions, and maintains a living model of
            who you are and what you're working through. Then it uses that model to ask
            better questions.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="how" ref={howRef}>
        <div className="container">
          <p className="section-label reveal">How it works</p>
          <h2 className="section-heading reveal reveal--delay-1">No magic</h2>
          <p className="how__text reveal reveal--delay-2">
            Claude Code is your text editor. You talk, it writes the files. There's no
            separate app, no special UI. You open a terminal, run a slash command, and
            Claude reads your notes, writes your journal, links your ideas, and updates
            your metamap. The files are plain markdown in a folder. Readable, greppable,
            yours.
          </p>
          <p className="how__text reveal reveal--delay-3">
            There are no embeddings. No vector databases. No proprietary formats.
            What cothought does is maintain the map. It reads your recent entries,
            follows the links between notes, loads your reference files, and hands all
            of that to Claude as context before every session. You don't have to think
            about which files to include, or worry about losing a thread because you
            forgot to open the right document. The system remembers for you, just by
            reading the files every time and keeping the map up to date.
          </p>
          <p className="how__text reveal reveal--delay-4">
            It's a map that lives in your folder. Claude just helps you maintain it.
          </p>
        </div>
      </section>

      {/* Install */}
      <section className="install" ref={installRef}>
        <div className="container">
          <p className="section-label reveal">Getting started</p>
          <h2 className="section-heading reveal reveal--delay-1">Three steps</h2>
          <div className="install__steps">
            <div className="install__step reveal reveal--delay-1">
              <span className="install__step-number">1</span>
              <div className="install__step-content">
                <h3>Install the plugin</h3>
                <p>
                  In Claude Code, run <code>/plugins</code> and add a custom marketplace
                  with the URL <code>elliotbonneville/claude-cothought</code>. Then
                  install the cothought plugin from that marketplace.
                </p>
              </div>
            </div>
            <div className="install__step reveal reveal--delay-2">
              <span className="install__step-number">2</span>
              <div className="install__step-content">
                <h3>Run setup</h3>
                <p>
                  Restart Claude Code and run <code>/cothought:setup</code>. It asks where
                  your notes live, helps you pick a voice dictation tool, and you're done.
                  Run <code>/cothought:setup advanced</code> later for review foundations,
                  metamap options, and more.
                </p>
              </div>
            </div>
            <div className="install__step reveal reveal--delay-3">
              <span className="install__step-number">3</span>
              <div className="install__step-content">
                <h3>Start journaling</h3>
                <p>
                  Run <code>/cothought:journal</code> to start your first session. Speak
                  naturally — your words are captured exactly as spoken. The system builds
                  around you over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills" ref={skillsRef}>
        <div className="container">
          <p className="section-label reveal">What's in the box</p>
          <h2 className="section-heading reveal reveal--delay-1">Eight skills, one system</h2>
          <div className="skills__grid reveal reveal--delay-2">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-card__name">{skill.name}</div>
                <div className="skill-card__description">{skill.description}</div>
              </div>
            ))}
          </div>
          <p className="skills__note reveal reveal--delay-3">
            Every skill works on its own. Run <code>/cothought:zettelkasten</code> by
            itself to brainstorm, or <code>/cothought:review</code> without ever
            journaling. But they layer together — the journal loads zettelkasten rules
            automatically, the review reads history tables the zettelkasten created, and
            the metamap ties everything into one picture. Use one or use all eight.
          </p>
        </div>
      </section>

      {/* Demo */}
      <section className="demo" ref={demoRef}>
        <div className="container">
          <p className="section-label reveal">In practice</p>
          <h2 className="section-heading reveal reveal--delay-1">A journal session</h2>
          <div className="demo__window reveal reveal--delay-2">
            <div className="demo__titlebar">
              <div className="demo__dot" />
              <div className="demo__dot" />
              <div className="demo__dot" />
              <span className="demo__filename">02-19-2026.md</span>
            </div>
            <div className="demo__content">
              <h4>Wednesday evening</h4>
              <div className="demo__entry">
                <span className="demo__timestamp">9:32PM</span>{' '}
                I've been thinking about the novel again. I keep circling back to it but
                never actually sitting down to write. It's like I want the feeling of having
                written it more than I want to do the work.
              </div>
              <div className="demo__blockquote">
                That's an interesting distinction — wanting the result versus wanting the
                process. When you last worked on it, what was the actual experience of
                writing like?
              </div>
              <div className="demo__entry">
                <span className="demo__timestamp">9:35PM</span>{' '}
                Honestly it was good. Once I got past the first twenty minutes it was almost
                meditative. I just forget that part. I only remember the resistance before
                I start.
              </div>
              <div className="demo__blockquote">
                So the{' '}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  dominant story
                </a>{' '}
                is "writing is hard and I avoid it" but the actual evidence is "once I start,
                it's meditative." That gap is worth tracking.
              </div>
              <hr className="demo__rule" />
              <p className="demo__reflection">
                Session touched the novel thread again — third time this week. The
                resistance-vs-reality gap around writing is a textbook dominant story
                contradiction. Added counter-evidence to the metamap. The pattern: he
                remembers the dread but not the flow. Created zettelkasten note:{' '}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Resistance memory is stronger than flow memory
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metamap */}
      <section className="metamap" ref={metamapRef}>
        <div className="container">
          <p className="section-label reveal">The core</p>
          <h2 className="section-heading reveal reveal--delay-1">The metamap</h2>
          <p className="metamap__intro reveal reveal--delay-2">
            The metamap isn't a summary of your journal. It's a picture of who you are
            right now, maintained across sessions, built from what you've actually said
            and done. You tell it "I never finish anything" and it pulls up the three
            projects you finished last month. You make a commitment on Tuesday and it's
            still there on Friday. The patterns you can't see from inside your own head
            become visible because something outside your head is tracking them.
          </p>
          <div className="metamap__sections">
            {metamapSections.map((section, i) => (
              <div
                className={`metamap-section reveal reveal--delay-${Math.min(i + 1, 4)}`}
                key={section.name}
              >
                <div className="metamap-section__name">{section.name}</div>
                <div className="metamap-section__detail">{section.detail}</div>
                <div className="metamap-section__source">{section.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="research" ref={researchRef}>
        <div className="container">
          <p className="section-label reveal">Foundations</p>
          <h2 className="section-heading reveal reveal--delay-1">
            Built on real research
          </h2>
          <p className="research__text reveal reveal--delay-2">
            The metamap isn't invented from scratch. Every section maps to a research
            tradition — from Michael White's narrative therapy to Pennebaker's expressive
            writing research to Andy Matuschak's evergreen notes. The insight that makes it
            work: <em>journaling only improves outcomes when people move from describing
            events to making meaning</em>. The metamap is the meaning-making layer.
          </p>
          <div className="research__domains reveal reveal--delay-3">
            {researchDomains.map((domain) => (
              <span className="research__domain" key={domain}>
                {domain}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer__name">Cothought</p>
          <p className="footer__note">
            The notebook that thinks back.
          </p>
          <div className="footer__links">
            <a href="https://github.com/elliotbonneville/claude-cothought">GitHub</a>
            <a href="https://github.com/elliotbonneville/claude-cothought/blob/main/docs/metamap-research.md">Research</a>
            <a href="https://github.com/elliotbonneville/claude-cothought/blob/main/docs/customization.md">Customization</a>
          </div>
          <p className="footer__author">
            made by <a href="https://elliotbonneville.com">elliot</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
