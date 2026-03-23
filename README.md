# TALE

**The Author's Literary Engine** — An AI-driven literary development framework with 14 specialized agents, 70+ guided workflows, and adaptive intelligence that adjusts from short stories to full-scale musicals.

Built on the proven [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) framework for software development, TALE adapts BMAD's agent-based workflow orchestration, party mode collaboration, and structured elicitation techniques to the literary domain.

TALE transforms the writing process from blank page to polished manuscript through structured collaboration with expert AI agents who guide you through planning, writing, enrichment, review, editing, and publishing — across novels, screenplays, stage plays, and musical theatre.

## What You Can Build

| Format | Agents | Starting workflow |
|---|---|---|
| **Novel / Novella / Short Story** | Elena, Marcus, Theodore, Vivian, James, Sarah, Catherine, Patricia, Alexandra | `/tale-smm-create-srd` |
| **Non-Fiction** | Elena, Marcus, Sarah, Catherine, Patricia, Alexandra | `/tale-smm-create-srd` |
| **Screenplay** | Dominic + all novel agents | `/tale-smm-screenplay-structure` |
| **Stage Play** | Elena, Marcus + all novel agents | `/tale-smm-create-srd` |
| **Musical Theatre** | Alice (Book Writer), Larry (Lyricist) + all novel agents | `/tale-smm-create-musical-brief` |

## Why TALE?

Traditional AI writing tools generate content for you, producing generic results. TALE inherits BMAD's philosophy: agents act as expert collaborators who guide you through a structured creative process to bring out your best writing in partnership with AI, not replacement by AI.

- **AI Intelligent Help**: `/tale-help` guides you from beginning to end, adapting advice based on your project stage
- **Genre-Adaptive**: Automatically adjusts guidance based on your genre, prose sophistication level, and writing experience
- **Structured Workflows**: Grounded in literary best practices across planning, writing, editing, and publishing
- **Specialized Agents**: 14 domain experts across prose fiction, screenwriting, and musical theatre
- **Party Mode**: Inherited from BMAD — bring multiple agent personas into one session to brainstorm, troubleshoot, or discuss your project collaboratively
- **Complete Lifecycle**: From concept to publication, TALE is there with you every step of the way

## Quick Start

**Prerequisites**: Kiro CLI with TALE installed

Open Kiro CLI in your writing project directory and start with:

```
/tale-help
```

This tells you exactly what's next based on your project stage and what modules you have installed.

---

### Fast Path — Short Works (Short Stories, Novellas)

For short stories, novellas, or clear concepts — 4 core workflows:

1. `/tale-smm-create-srd` — Story Requirements Document (your foundation)
2. `/tale-smm-chapter-planning` — Detailed chapter/scene outlines
3. `/tale-smm-write-chapter` — Write each chapter (repeat as needed)
4. `/tale-smm-chapter-review` — Review and validate quality

---

### Full Planning Path — Novels & Complex Works

For novels, series, or complex narratives — comprehensive planning then write:

1. `/tale-smm-create-srd` — Define premise, themes, and story goals
2. `/tale-smm-create-story-bible` — Single source of truth for continuity
3. `/tale-smm-create-story-structure` — Three-act structure with turning points
4. `/tale-smm-create-profiles` — Develop character profiles and psychology
5. `/tale-smm-chapter-planning` — Chapter-by-chapter outline with beats
6. **Repeat per chapter:** `/tale-smm-write-chapter` → `/tale-smm-enrich-chapter` → `/tale-smm-chapter-review` → `/tale-smm-revise-chapter` (if needed)
7. **Editorial pass:** `/tale-smm-manuscript-evaluation` → `/tale-smm-structure-analysis` → `/tale-smm-pacing-review`
8. **Polish:** `/tale-smm-line-edit-chapter` → `/tale-smm-prose-polish` → `/tale-smm-final-proof`

---

### Screenplay Path

For original screenplays or adaptations:

1. `/tale-smm-screenplay-structure` — Beat sheet and three-act structure
2. `/tale-smm-create-profiles` — Character profiles (optional but recommended)
3. `/tale-smm-write-screenplay` — Write original screenplay, or `/tale-smm-adapt-to-screenplay` to adapt existing work
4. **Repeat per scene:** `/tale-smm-write-scene-screenplay`
5. **Polish:** `/tale-smm-screenplay-dialogue` — Dialogue pass for subtext and speakability

---

### Musical Theatre Path

For original musicals — book, lyrics, and song placement:

1. `/tale-smm-create-musical-brief` — **Start here.** Guided 6-step creation of the Musical Bible: concept, form, characters, song world, structure sketch. Produces your foundation document.
2. `/tale-smm-musical-structure` — Expand the sketch into a full two-act beat sheet with complete song placement map
3. `/tale-smm-create-profiles` — Character profiles (recommended — Alice and Larry both need them)
4. **For each song moment (Alice):** `/tale-smm-dialogue-to-song` — Identify the trigger, determine Internal/External voice, produce Song Brief
5. **For each song (Larry):** `/tale-smm-song-sheet` → `/tale-smm-write-lyric`
6. **For each book scene (Alice):** `/tale-smm-write-book-scene` — Industry-standard libretto format
7. **Polish (Larry):** `/tale-smm-lyric-polish` — Prosody, rhyme quality, character voice, dramatic arc

Every workflow tells you what's next. Ask `/tale-help` at any stage.

---

## The Agents

TALE provides 14 specialized literary agents organized by function:

### Story Development

**Elena — Story Architect** 📚
- Master story structure and narrative design
- Three-act frameworks, plot arcs, pacing
- Workflows: Create SRD, Create Story Bible, Create Story Structure, Chapter Planning, Character Arcs, Genre Compliance, Pacing Analysis

**Marcus — Character Developer** 🎭
- Character psychology, motivation, and growth
- Dialogue voice and relationship dynamics
- Workflows: Create Character Profiles, Design Character Arcs, Dialogue Voice, Character Relationships, Consistency Check

**Theodore — World Builder** 🌍
- World-building, cultures, magic systems
- Location detail and continuity
- Workflows: Create World, Develop Culture, Magic System, Location Detail, World Consistency

### Writing Production

**Marcus — Ghost Writer** ✍️
- Chapter and scene writing from outlines
- Voice matching and narrative consistency
- Workflows: Write Chapter, Write Scene, Revise Chapter, Voice Matching, Expand Scene

**Vivian — Narrative Enrichment Specialist** 🎨
- Descriptive depth and sensory detail
- Atmosphere, mood, and character presence
- Workflows: Enrich Chapter, Worldbuild Scene, Enhance Atmosphere, Sensory Audit, Character Presence

### Review & Quality Assurance

**James — Story Reviewer** 🔍
- Chapter and scene review
- Continuity, reader experience, improvement roadmaps
- Workflows: Chapter Review, Scene Review, Dialogue Review, Continuity Check, Reader Experience, Improvement Roadmap

### Editorial

**Sarah — Developmental Editor** ✏️
- Big-picture manuscript evaluation
- Structure, pacing, opening critique
- Workflows: Manuscript Evaluation, Structure Analysis, Pacing Review, Opening Critique, Revision Roadmap

**Catherine — Line Editor** ✂️
- Sentence-level prose refinement
- Rhythm, dialogue tightening, description refinement
- Workflows: Chapter Edit, Prose Polish, Dialogue Tightening, Description Refinement, Rhythm Analysis

**Patricia — Copy Editor** 📝
- Grammar, consistency, fact-checking
- Style sheets and final proofing
- Workflows: Chapter Edit, Style Sheet, Consistency Pass, Fact Check, Final Proof

### Publishing

**Alexandra — Publishing Strategist** 📈
- Market analysis and publishing paths
- Query letters, synopses, launch planning
- Workflows: Market Analysis, Query Letter, Synopsis, Publishing Path, Launch Plan

### Screenwriting

**Dominic — Screenwriter** 🎬
- Screenplay writing, adaptation, and industry-standard formatting
- Visual storytelling, subtext, scene economy
- Workflows: Adapt to Screenplay, Write Screenplay, Write Scene, Screenplay Structure, Dialogue Pass

### Musical Theatre

**Alice — Musical Theatre Book Writer** 🎭
- Book writing, dramaturgy, and song placement
- Two-act structure, the moment dialogue becomes song, industry-standard libretto format
- Applies the Song Trigger Framework to identify every musical moment
- Workflows: Create Musical Brief, Musical Structure, Write Book Scene, Dialogue to Song

**Larry — Musical Theatre Lyricist** 🎵
- Lyric writing with full musical theatre craft
- Prosody, rhyme, song form, character voice, emotional arc
- Built on the Watershed songwriting principles: active songs, AABA form, specificity, perfect rhyme
- Workflows: Song Sheet, Write Lyric, Lyric Polish

### Orchestration

**TALE Master** 🎯
- Workflow orchestration and knowledge custodian
- Party mode facilitation and advanced elicitation
- Available for any complex multi-agent coordination

---

## Workflow Phases

TALE organizes workflows into 5 phases that mirror the writing lifecycle:

### Phase 1: Planning

**Story Planning** — Foundation documents and structure
- Create SRD (Story Requirements Document) — *required for novels/prose*
- Create Story Bible — Single source of truth
- Create Story Structure — Three-act framework
- Chapter Planning — Detailed outlines
- Character Arcs — Map growth to plot
- Genre Compliance — Validate genre expectations

**Character Development** — Psychology and relationships
- Create Character Profiles
- Design Character Arcs
- Dialogue Voice
- Character Relationships
- Character Consistency Check

**World Building** — Settings and systems
- Create World
- Develop Culture
- Magic System
- Location Detail
- World Consistency Check

**Story Architecture** — Analysis and optimization
- Pacing Analysis
- Structure Analysis
- Screenplay Structure (beat sheet)

**Musical Theatre Planning** — Foundation for musicals
- Create Musical Brief — *required for musical theatre; start here* — 6-step guided creation of the Musical Bible
- Musical Structure — Full two-act beat sheet with song placement map

### Phase 2: Writing

**Writing Production** — Prose draft creation
- Write Chapter — *core workflow*
- Write Scene
- Revise Chapter
- Voice Matching
- Expand Scene

**Narrative Enrichment** — Depth and immersion
- Enrich Chapter
- Worldbuild Scene
- Enhance Atmosphere
- Sensory Audit
- Character Presence

**Screenwriting** — Script writing and adaptation
- Adapt to Screenplay
- Write Screenplay
- Write Scene (Screenplay)

**Musical Theatre Writing** — Book and lyric creation
- Write Book Scene — Industry-standard libretto format (Alice)
- Dialogue to Song — Identify the song moment; produce Song Brief (Alice)
- Create Song Sheet — Per-song reference document with trigger, voice, arc, lyric draft (Larry)
- Write Lyric — Full lyric with form, prosody, rhyme, character voice, emotional arc (Larry)

### Phase 3: Review

**Story Review** — Quality assurance
- Chapter Review
- Scene Review
- Dialogue Review
- Continuity Check
- Reader Experience
- Improvement Roadmap

**Developmental Editing** — Big-picture evaluation
- Manuscript Evaluation
- Structure Analysis
- Pacing Review
- Opening Critique
- Revision Roadmap

### Phase 4: Polish

**Line Editing** — Sentence-level refinement
- Chapter Edit
- Prose Polish
- Dialogue Tightening
- Description Refinement
- Rhythm Analysis

**Copy Editing** — Grammar and consistency
- Copy Edit Chapter
- Style Sheet
- Consistency Pass
- Fact Check
- Final Proof

**Screenplay & Musical Theatre Polish**
- Screenplay Dialogue Pass — Subtext and speakability (Dominic)
- Lyric Polish — Prosody, rhyme quality, character voice, dramatic arc (Larry)

### Phase 5: Publishing

**Publishing Strategy** — Market and launch
- Market Analysis
- Query Letter
- Synopsis
- Publishing Path
- Launch Plan

### Anytime Workflows

**Core Utilities** — Available at any stage
- `/tale-help` — Get unstuck, see what's next
- `/tale-brainstorming` — Generate ideas through interactive techniques
- `/tale-party-mode` — Multi-agent collaborative discussions
- `/tale-index-docs` — Create lightweight doc index for LLM scanning
- `/tale-shard-doc` — Split large documents into manageable sections

---

## Musical Theatre in Depth

### What Makes a Musical Different

A musical is not a play with songs added. It is three mediums — spoken word, music, and staging — that must serve each other. Songs are not decoration; they are the moments when emotion exceeds what speech can carry.

TALE's musical theatre framework is built around two key ideas:

**The Song Trigger Framework** — 10 reasons a character stops speaking and starts singing:

| # | Trigger | Example |
|---|---|---|
| 1 | Declaration of Want | *Somewhere Over the Rainbow*, *Defying Gravity* |
| 2 | Emotional Overflow | *Memory*, *All I Ask of You* |
| 3 | Conflict Escalation | *The Confrontation*, *Anything You Can Do* |
| 4 | Decision/Revelation | *Soliloquy* (Carousel), *Being Alive* |
| 5 | Communal Expression | *One Day More*, *Comedy Tonight* |
| 6 | Comic Exaggeration | *Adelaide's Lament*, *I Feel Pretty* |
| 7 | Seduction/Persuasion | *Shall We Dance*, charm songs |
| 8 | Narrative Compression | Journey songs, backstory numbers |
| 9 | Thematic Crystallisation | *For Good*, *No Day But Today* |
| 10 | Reprise/Echo | Any reprise that lands with new meaning |

The rule beneath all of them: **the song must change something** — the character, the relationship, or the audience's understanding. A song that ends in the same place it began has no reason to exist.

**Song Voice** — every song has a voice dimension that must be established before a lyric is written:

- **Internal / Soliloquy** — character sings to themselves, the audience, or an absent person. The other character doesn't hear it. Uses "I/he/she". Creates dramatic irony. (*On My Own*, *Being Alive*, *Somewhere Over the Rainbow*)
- **External / Direct** — character sings to another present character who participates. Uses "you". Escalates the relationship. (*All I Ask of You*, *People Will Say We're in Love*)
- **Mixed** — begins as one, shifts to the other

This distinction governs everything: pronoun, emotional target, whether the other character responds.

### Musical Styles Supported

| Style | Description | Touchstones |
|---|---|---|
| **Book Musical** | Story-driven; spoken scenes alternate with integrated songs | *Hamilton*, *Fun Home*, *Les Misérables* |
| **Concept Musical** | Theme- or idea-driven rather than linear narrative | *Company*, *A Chorus Line*, *Cabaret* |
| **Jukebox Musical** | Built around pre-existing songs | *Mamma Mia!*, *Jersey Boys* |
| **Revue** | Loosely connected numbers, minimal narrative | Celebration of theme or performer |
| **Chamber Musical** | Intimate scale, small cast | *The Band's Visit*, *tick, tick... BOOM!* |
| **Rock Musical** | Rock/pop score drives dramatic storytelling | *Spring Awakening*, *Rent*, *Hadestown* |
| **Sung-Through** | Minimal or no spoken dialogue | *Hamilton*, *Les Misérables* (original) |

### Key Musical Theatre Artifacts

**Musical Bible** — the foundation document (equivalent to the Story Bible for prose)
- Central dramatic question, protagonist want vs. need, the show's argument
- Musical style, score description, reference shows
- Song Placement Map with all numbers across both acts
- Character vocal register, recurring motifs, style notes for Alice and Larry

**Song Sheet** — per-song reference document (one per number)
- Song Trigger, Song Voice (Internal/External/Mixed)
- Emotional arc: start state → end state
- Song form (Verse-A-A-B-A, verse-chorus, through-composed)
- Central image or metaphor, reference touchstones
- Lyric draft with structural labels (VERSE, A1, A2, BRIDGE, A3, CODA)
- Development status tracking

**Musical Script** — the libretto in industry-standard format
- Character names in ALL CAPS; dialogue in regular prose
- Stage directions in parentheses/italics; present tense; lean
- Song cues centered; lyrics indented under character name
- Act/Scene headings centered and all caps

### Lyric Craft Principles (Larry's Framework)

Larry's lyric writing is built on proven musical theatre craft:

1. **Active songs only** — something must change by the final note
2. **Song form matters** — Verse-A-A-B-A for dramatic weight; the Bridge is where the character breaks through
3. **Prosody first** — natural speech stress must align with musical stress; never contort syntax for a rhyme
4. **Rhyme perfectly or not at all** — a near-rhyme lands like a wet dishcloth
5. **Come in through the back door** — metaphor and image, not stated emotion
6. **Character voice is absolute** — lyrics must sound like this character, not the writer
7. **Be specific** — musical theatre is not pop radio; no need to generalise
8. **Brevity is wit** — say it in one line if you can

---

## Prose Sophistication System

TALE adapts writing output to your target audience and literary ambition through four sophistication levels:

**Accessible** — Clear, direct prose. Prioritize readability and pace.
- Best for: YA, commercial thriller, genre fiction
- Focus: Plot momentum, clear character motivation, straightforward language

**Polished** — Confident, layered prose. Subtext in dialogue, varied rhythm.
- Best for: Mainstream literary, upmarket commercial
- Focus: Balanced depth, sophisticated but accessible, strong voice

**Literary** — Rich, complex prose. Psychological depth, thematic resonance.
- Best for: Literary fiction, award-contending work
- Focus: Character interiority, nuanced themes, artistic language

**Experimental** — Push boundaries. Unconventional structure, language as texture.
- Best for: Avant-garde, literary experimental
- Focus: Form innovation, ambiguity as tool, challenging conventions

Set your prose sophistication level during project configuration. All agents adapt their output accordingly.

---

## Project Configuration

TALE collects key project details during setup to personalize agent guidance:

**Core Settings** (from TALE Core)
- User name — What agents call you
- Communication language — Agent conversation language
- Document output language — Generated document language
- Output folder — Where files are saved (default: `_tale-output`)

**Project Settings** (from SMM Module)
- Project title
- Project type — Novel, novella, short story, non-fiction, screenplay, stage play, **musical theatre**
- Musical theatre style — Book musical, concept musical, jukebox musical, revue, chamber musical, rock musical, sung-through *(musical theatre projects only)*
- Primary genre — Literary fiction, commercial fiction, romance, mystery, sci-fi, fantasy, historical, YA, memoir, biography, self-help, other
- Target word count — 5k to 100k+ words
- Writing experience — Beginner, intermediate, experienced, professional
- Prose sophistication — Accessible, polished, literary, experimental
- Writing goals — Complete manuscript, improve craft, traditional publishing, self-publishing, personal satisfaction, build platform, contest submission

---

## Key Artifacts

**Story Requirements Document (SRD)** — Foundation document *(novels, prose, screenplays)*
- Premise, themes, target audience
- Story goals and success criteria
- Genre expectations and constraints

**Story Bible** — Single source of truth *(novels and prose)*
- Characters, world, timeline, continuity reference
- Living document updated throughout project

**Musical Bible** — Foundation document *(musical theatre)*
- Central dramatic question, want/need, the show's argument
- Song Placement Map across both acts (type, trigger, voice, character, function)
- Musical style, reference shows, score description, recurring motifs

**Song Sheet** — Per-song reference *(musical theatre)*
- Song Trigger, Song Voice, emotional arc, song form
- Central image, reference touchstones, lyric draft
- Status tracking from brief through final lyric

**Story Structure** — Narrative architecture *(prose and screenplay)*
- Three-act structure with turning points and scene sequences

**Chapter Outlines** — Detailed scene plans
- Chapter objectives, scene beats, character goals, pacing notes

**Character Profiles** — Psychology and motivation
- Background, personality, desires, internal and external conflicts, dialogue voice

**Manuscript Chapters / Book Scenes / Screenplay Pages** — The actual writing
- Written from outlines and song briefs; enriched and reviewed through editorial passes

**Editorial Reports** — Quality assessments
- Manuscript evaluation, structure analysis, pacing review, chapter reviews

---

## Party Mode

Party Mode brings multiple TALE agents into one collaborative session for dynamic multi-perspective discussions.

**Use Party Mode for:**
- Brainstorming story concepts with diverse agent perspectives
- Troubleshooting plot problems with Story Architect, Character Developer, and Developmental Editor
- For musicals: Alice and Larry working through a song moment together — Alice identifies the trigger and voice, Larry responds with lyric approach
- Planning publishing strategy with Publishing Strategist and Developmental Editor
- Any situation where multiple expert viewpoints add value

**How it works:**
1. Run `/tale-party-mode`
2. All installed TALE agents load into the session
3. Agents introduce themselves and their expertise
4. You guide the discussion — agents respond in character with their unique perspectives
5. Agents can build on each other's ideas and debate approaches
6. Session concludes with synthesis and next steps

---

## Typical Workflow Sequences

### Novel (Full Planning Path)

**Week 1-2: Foundation**
1. Create SRD — Define premise, themes, audience
2. Create Story Bible — Establish world and characters
3. Create Story Structure — Map three-act framework
4. Create Character Profiles — Develop main characters

**Week 3-4: Detailed Planning**
5. Chapter Planning — Outline all chapters with beats
6. Character Arcs — Map growth to plot progression
7. World Building (if needed)

**Months 2-6: Writing Production** (repeat per chapter)
8. Write Chapter → Enrich Chapter → Chapter Review → Revise Chapter (if needed)

**Month 7: Developmental Edit**
9. Manuscript Evaluation → Structure Analysis → Pacing Review → Revision Roadmap

**Month 8-9: Line and Copy Editing**
10. Line Edit Chapter → Prose Polish → Copy Edit → Style Sheet → Final Proof

**Month 10: Publishing Prep**
11. Market Analysis → Query Letter → Synopsis → Publishing Path → Launch Plan

---

### Musical Theatre

**Foundation (Alice)**
1. Create Musical Brief — 6-step guided session producing the Musical Bible
2. Musical Structure — Full beat sheet with complete song placement map
3. Create Character Profiles (Marcus) — needed by both Alice and Larry

**Writing Production** (repeat per scene/song cycle)
4. Write Book Scene (Alice) — the spoken scene in libretto format
5. Dialogue to Song (Alice) — identify the trigger, voice, and dramatic function; produce Song Brief
6. Song Sheet (Larry) — per-song document with all craft specifications
7. Write Lyric (Larry) — complete lyric with form labels and emotional arc

**Polish**
8. Lyric Polish (Larry) — prosody, rhyme, character voice, arc check
9. Chapter Review (James) — continuity and dramatic logic across scenes

**Structure Check** (after both acts drafted)
10. Musical Structure (Alice) — revisit placement map; check act balance and structural flags

---

## Tips for Success

**Start with the right foundation document** — For prose and screenplays, that's the SRD. For musicals, it's the Musical Bible via Create Musical Brief. Don't skip it.

**For musicals: answer the essential question first** — *Why does this story need to be a musical?* If you can't answer that, the songs will feel like interruptions rather than inevitabilities. The Create Musical Brief workflow will help you find the answer.

**Use Song Sheets** — Keep one Song Sheet per number, separate from the Musical Bible. Progressive disclosure keeps context focused and Larry working on one song at a time.

**Follow the phases** — Planning → Writing → Review → Polish → Publishing. Skipping phases creates problems downstream.

**Iterate per chapter / scene** — Write → Enrich/Polish → Review → Revise. This cycle produces higher quality drafts.

**Ask for help** — Use `/tale-help` whenever you're stuck or unsure what's next.

**Leverage Party Mode** — Multiple agent perspectives solve problems faster than solo work. For musicals, Alice and Larry together are especially effective for the moment a scene tips into song.

**Match prose sophistication to genre** — YA readers expect different prose than literary fiction readers. Musical theatre has its own register — the book scenes should feel like the same world as the lyrics.

**Trust the process** — TALE's structure exists because it works. Resist the urge to skip steps.

**Commit to revision** — First drafts and first lyrics are never final. Plan for multiple passes.

---

## Community & Support

- **Discord** — Get help, share progress, collaborate with other TALE users
- **GitHub Issues** — Bug reports and feature requests
- **Discussions** — Community conversations and tips

## License

MIT License — see LICENSE for details.

---

**TALE Method** is built on the [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD) framework, adapting its proven agent orchestration, workflow engine, and collaborative intelligence system from software development to literary creation. Part of the BMad Code ecosystem.

Built for writers who want AI collaboration, not AI replacement.
