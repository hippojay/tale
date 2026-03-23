---
step: 4
name: "The Song World"
objective: "Establish where music lives in this show, what types of numbers are needed, and the emotional range of the score"
output_file: "{project-root}/{output_folder}/musical-theatre/musical-bible.md"
next_step: "05-structure-overview.md"
---

# Step 4: The Song World

**Objective**: Discover where music lives in this particular show. Every musical has a different relationship with song — in some, songs are the primary storytelling vehicle; in others, they are emotional detonations in an otherwise spoken world. This step establishes the song world before placing any individual numbers.

---

## 1. Where Does Music Live?

Ask the creator to describe the moments they've already imagined as songs — instinctively, before any structural analysis:

**"Are there moments in your story that you already hear as music? Places where you've thought 'this should be a song'? Tell me about them."**

Listen carefully. These instinctive musical moments reveal:
- The emotional register of the show (what feelings are big enough to need song)
- Whether the songs are mostly Internal (characters singing to themselves) or External (characters singing to each other)
- Whether the score will be primarily solo or ensemble-driven

If they haven't imagined any songs yet, ask:
**"When you imagine the story at its most intense moment — what does that feel like? Does it feel like something that wants to be sung?"**

---

## 2. Apply the Song Trigger Framework

Walk through the 10 Song Triggers and ask the creator which ones feel present in their story. For each, ask for a specific moment:

| # | Trigger | Present in this show? | Possible moment |
|---|---|---|---|
| 1 | **Declaration of Want** | Does the protagonist need to voice their deepest desire? | |
| 2 | **Emotional Overflow** | Are there moments of love, grief, or joy too large for speech? | |
| 3 | **Conflict Escalation** | Are there arguments that will reach beyond what words can do? | |
| 4 | **Decision/Revelation** | Are there turning points where a character must process internally? | |
| 5 | **Communal Expression** | Is there a group with a shared experience that must speak as one? | |
| 6 | **Comic Exaggeration** | Are there absurd or comic situations that deserve musical treatment? | |
| 7 | **Seduction/Persuasion** | Does any character need to win someone over through sustained charm or argument? | |
| 8 | **Narrative Compression** | Is there a story span (years, journeys) that needs compressing? | |
| 9 | **Thematic Crystallisation** | Is there a moment the show's central idea must land with full force? | |
| 10 | **Reprise/Echo** | Are there emotional moments that will recur with changed meaning? | |

Note which triggers feel most central to this show — these will be the dominant song types.

---

## 3. Internal vs. External — The Show's Song Voice

Based on the story and character analysis from Step 3, establish the show's overall tendency:

- **Primarily Internal**: This is a show of inner life — characters sing to themselves, to the audience, or to absent people. Songs reveal what cannot be admitted in the room. Creates dramatic irony and emotional intimacy. *(Fun Home, Hadestown, Sunday in the Park with George)*
- **Primarily External**: This is a show of confrontation and shared experience — characters sing to each other; the songs are events in the relationship. Creates escalation and spectacle. *(West Side Story, Hamilton, Guys and Dolls)*
- **Mixed**: Both modes present — internal songs for individual psychology, external for relationship climaxes. *(Most book musicals)*

Ask: "When your characters sing, are they mostly confessing to themselves — or are they mostly declaring to others?"

---

## 4. Song Type Inventory

Based on the story, characters, and triggers identified, sketch the probable song type inventory. Not every type needs to be present — this is about what feels right for this show:

| Song Type | Likely present? | Notes |
|---|---|---|
| **Opening Number** | Almost always | Establishes world and tone |
| **I Want Song** | Almost always | Protagonist's fundamental desire, early in Act 1 |
| **Love Song** | If relevant | Can be Internal (about someone) or External (to someone) |
| **Charm Song** | If needed | Character winning over another — persuasion through delight |
| **Comedy Number** | If appropriate | Tonal variety; comic exaggeration |
| **Duet** | If two characters need a musical event together | |
| **Ensemble Number** | If there's a community | Communal expression |
| **Narrative Exposition** | If backstory needs compressing | Journey or history song |
| **Act 1 Finale / Showstopper** | Yes | Stakes escalate to point of no return |
| **11 O'Clock Number** | Yes | Protagonist's deepest truth, penultimate song |
| **Reprised Theme** | Usually | A song that returns with new meaning |

Note any types that feel especially central or that the creator responds to with particular energy.

---

## 5. The Show's Emotional Range

Establish the emotional extremes of the score:

- **The highest moment**: what is the biggest, most expansive feeling in the show? (Often the Act 1 Finale or an ensemble number)
- **The most intimate moment**: what is the quietest, most personal song? (Often an Internal/Soliloquy number)
- **The funniest moment** (if applicable): what is the comic peak?
- **The most heartbreaking moment**: this is often near the 11 o'clock position

A musical with no tonal variety is exhausting. A musical with no emotional peak is forgettable. Confirm both ends of the range exist.

---

## 6. Approximate Song Count

Establish a target:
- **Standard book musical**: 15-20 numbers across two acts
- **Chamber musical**: 10-14 numbers
- **Sung-through**: 20-30+ (including recitative and reprises)
- **Concept musical**: varies widely

Ask the creator: "How much of the story do you want to carry in song vs. in spoken scenes?"

This is not a firm number — it will change. But having a target prevents both underwriting (a musical that's mostly a play with a few songs) and overwriting (a musical with no room to breathe between numbers).

---

## 7. Update Musical Bible

Append to the Musical Bible:

```markdown
## The Song World

### Song Voice Tendency
[Primarily Internal / External / Mixed — and what this means for this show]

### Primary Song Triggers (Top 3-5 for this show)
- [Trigger name]: [how it manifests in this story]
- [Trigger name]: [how it manifests]

### Song Type Inventory
| Song Type | Expected | Notes |
|---|---|---|
[complete from discussion above]

### Emotional Range
- **Highest moment**: [brief description]
- **Most intimate moment**: [brief description]
- **Most heartbreaking moment**: [brief description]

### Target Song Count
[Approximate number] across two acts ([Act 1]: [~N], [Act 2]: [~N])

### Instinctive Song Moments (from creator)
[List any specific moments the creator identified as songs in the discussion]
```

Update `stepsCompleted` in frontmatter to include `"04-the-song-world"`.

---

## 8. Validation & Continuation

Before proceeding, confirm:
- [ ] Creator can identify at least 5-6 moments that feel like songs
- [ ] At least 4-5 Song Triggers feel relevant to this story
- [ ] Internal/External tendency established
- [ ] Both ends of the emotional range identified (high and intimate)
- [ ] Target song count agreed

## Menu Options

**[C] Continue** — Proceed to Step 5: Structure Overview
**[R] Revise** — Explore the song world further before proceeding
**[P] Pause** — Save progress and resume later

---

**Next Step**: When user selects Continue, load:
`{project-root}/_tale/smm/workflows/musical-theatre/create-musical-brief/steps/05-structure-overview.md`
