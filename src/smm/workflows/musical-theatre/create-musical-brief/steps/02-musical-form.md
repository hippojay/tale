---
step: 2
name: "Musical Form & Style"
objective: "Establish the musical style, reference touchstones, tonal world, and score description"
output_file: "{project-root}/{output_folder}/musical-theatre/musical-bible.md"
next_step: "03-characters-and-want.md"
---

# Step 2: Musical Form & Style

**Objective**: Determine what kind of musical this will be and establish the tonal, stylistic, and musical language that will govern all creative decisions.

The form of a musical is not just a container — it is a creative commitment. A concept musical has different structural rules to a book musical. A sung-through show carries its story differently to one with spoken scenes. Establishing form early prevents wasted work.

---

## 1. Musical Style

Present the style options and discuss which fits the story concept from Step 1:

| Style | What it means | When it's right |
|---|---|---|
| **Book Musical** | Story-driven; spoken scenes alternate with integrated songs | Story has a clear narrative drive and characters who need both speech and song (Hamilton, Les Misérables, Fun Home) |
| **Concept Musical** | Organised around a theme or idea rather than linear narrative; looser structure | Story is more about a world or condition than a plot (Company, A Chorus Line, Cabaret) |
| **Jukebox Musical** | Built around pre-existing songs; story serves the music | The songs are the draw; narrative must be crafted around them (Mamma Mia!, Jersey Boys) |
| **Revue** | Loosely connected numbers without sustained narrative | Celebration of a theme, performer, or genre |
| **Chamber Musical** | Intimate scale, small cast, minimal staging | Story is psychological, literary, and gains from restraint (The Band's Visit, tick, tick... BOOM!) |
| **Rock Musical** | Rock/pop score drives dramatic storytelling; genre voice is fundamental | Story has urgency, rebellion, or cultural specificity that demands the energy of rock (Spring Awakening, Rent, Hadestown) |
| **Sung-Through** | Minimal or no spoken dialogue; all story told in song | Epic scale, or a story where the artifice of pure song is the point (Les Misérables in its original conception, Hamilton) |

Ask the creator:
- "Does your story feel like it wants spoken scenes with songs growing out of them? Or does it feel like it wants to live entirely in music?"
- "How big is this story — epic and communal, or intimate and psychological?"
- "Is the score something you already hear — a genre, an era, a sound?"

---

## 2. Reference Shows

Reference shows are touchstones — not models to copy, but benchmarks of quality and approach. Ask the creator:

**"Are there musicals you love that feel like the world of your show? Not necessarily the same story, but the same emotional register, the same scale, the same kind of storytelling?"**

Then add Alice's suggestions based on the style and concept established in Step 1:

**Tony Award touchstones by style and approach:**
- *Structural craft*: My Fair Lady, West Side Story, Carousel, Oklahoma!
- *Concept musical*: Company, A Chorus Line, Chicago, Cabaret
- *Epic/sung-through*: Les Misérables, Hamilton
- *Intimate/chamber*: Fun Home, The Band's Visit, tick tick... BOOM!
- *Rock/contemporary*: Spring Awakening, Rent, Dear Evan Hansen, Hadestown
- *Sondheim (complexity, irony)*: Sweeney Todd, Into the Woods, Sunday in the Park with George
- *Classic craft*: Guys and Dolls, Gypsy, Follies

For each reference show identified, note: **what specifically it informs** — structure, tone, lyric style, scale, emotional approach, not just "I like it."

---

## 3. Tone

Establish the tonal range:
- **Primary tone**: Drama / Comedy / Dramedy / Dark comedy / Satire / Tragedy / Celebration
- **Tonal complexity**: Is there irony? Is comedy used to carry grief? Is tragedy leavened with wit?
- **Emotional range**: What is the highest emotional moment? What is the lowest? What is the show's resting register?

Ask: *"If an audience member had to describe how they felt walking out of your show, what would you want them to say?"*

---

## 4. Score Description

The creator may not know the music yet — that is fine. What Alice needs is a description of the *musical world*:

- **Genre influences**: jazz, rock, folk, classical, pop, hip-hop, period-specific, hybrid?
- **Orchestration texture**: large ensemble / chamber / solo piano / band / period instruments?
- **Lyric register**: heightened naturalism (Hammerstein) / poetic/dense (Sondheim) / rhythmically propulsive (Miranda) / accessible/anthemic (Schwartz)?
- **Song form tendency**: Verse-A-A-B-A (Broadway standard) / verse-chorus (pop/rock) / through-composed / mixed?

It is fine if the creator says "I don't know yet" — note it as to-be-determined and move on.

---

## 5. What This Musical Is Not

This is often as useful as knowing what it is. Ask:

**"Are there musicals that superficially resemble yours but represent the wrong direction — shows that would mislead a collaborator about what you're trying to do?"**

Document any shows or styles to consciously avoid.

---

## 6. Update Musical Bible

Append to the Musical Bible document:

```markdown
## Musical Style & Voice

### Musical Style
[Selected style with brief rationale]

### Score Description
[Genre influences, orchestration texture, lyric register, song form tendency — or "to be determined" where not yet known]

### Tone
- **Primary tone**: [Drama / Comedy / etc.]
- **Emotional range**: [brief description of high and low points]
- **Audience feeling on exit**: [what the creator wants the audience to feel]

### Reference Shows (Touchstones)
| Show | Relevance |
|---|---|
| [Show] | [What it informs specifically] |

### Influences to Avoid
[Shows or styles that would mislead a collaborator]
```

Update `stepsCompleted` in frontmatter to include `"02-musical-form"`.

---

## 7. Validation & Continuation

Before proceeding, confirm:
- [ ] Musical style is clearly identified and the creator understands its structural implications
- [ ] At least 2 reference shows identified with specific reasons
- [ ] Tone established
- [ ] Score world sketched (even if incomplete)

## Menu Options

**[C] Continue** — Proceed to Step 3: Characters & Want/Need
**[R] Revise** — Explore style or reference shows further before proceeding
**[P] Pause** — Save progress and resume later

---

**Next Step**: When user selects Continue, load:
`{project-root}/_tale/smm/workflows/musical-theatre/create-musical-brief/steps/03-characters-and-want.md`
