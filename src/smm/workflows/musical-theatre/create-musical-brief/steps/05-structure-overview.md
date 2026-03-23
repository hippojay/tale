---
step: 5
name: "Structure Overview"
objective: "Map the two-act structure and create the initial song placement sketch"
output_file: "{project-root}/{output_folder}/musical-theatre/musical-bible.md"
next_step: "06-musical-bible-creation.md"
---

# Step 5: Structure Overview

**Objective**: Map the major beats of both acts and place the known and probable songs into the structural arc. This is not the full Musical Structure workflow — it is the foundation sketch that will be expanded later. The goal is a clear picture of the show's shape before any writing begins.

---

## 1. Two-Act Shape

Establish the basic two-act proportion:

**ACT ONE** establishes the world, the want, and why the want is difficult or impossible.
- By the end of Act 1, the protagonist is more committed to their want than ever — and the audience knows it's going to cost them something.
- The Act 1 Finale escalates the central conflict to a point of no return. The stakes have doubled. The world has changed.

**ACT TWO** tests whether the want is the right thing to want.
- The protagonist pursues the want but at increasing cost.
- At some point the want is apparently gone — and what emerges is the need.
- The 11 o'clock number strips the protagonist to their emotional truth.
- The finale resolves the want/need tension — with or without a happy ending.

Ask the creator:
- "Do you know how your story ends? What is the final image?"
- "Does your protagonist get what they want? Get what they need? Both? Neither?"
- "What is the darkest moment — the moment when everything seems lost?"

---

## 2. Major Story Beats

Work with the creator to identify the key structural moments. These do not need to be fully fleshed out scenes — just beats:

**Act 1:**
1. **Opening image / world establishment** — what does the audience see first?
2. **Protagonist introduction** — who are they before the story disrupts them?
3. **I Want moment** — when and how does the protagonist's fundamental desire become visible?
4. **Inciting event** — what makes the want urgent and the conflict unavoidable?
5. **Rising complications** — 2-3 escalations (not detailed yet)
6. **Act 1 Finale** — what is the point of no return? What has changed?

**Act 2:**
1. **Act 2 re-entry** — how do we re-engage the audience after intermission?
2. **Continued pursuit** — protagonist pushes harder, costs mount
3. **Dark night / All Is Lost** — the want is apparently gone; what is revealed?
4. **11 O'Clock moment** — the protagonist at their most stripped and truthful
5. **Resolution** — how does the want/need tension resolve?
6. **Final image** — what does the audience see as the lights fade?

For each beat, ask: "Does this feel like a moment that wants to be a song? Or a spoken scene?"

---

## 3. Initial Song Placement Sketch

Using the beats from above and the song world established in Step 4, create an initial placement sketch.

This is not fixed — it will change. But placing songs structurally now reveals:
- Whether the distribution between acts feels balanced
- Whether there is enough variety between song types
- Whether the Act 1 Finale and 11 o'clock number have the right material to be what they need to be

Work through each major beat and assign a probable song type, trigger, and voice:

**Song Placement Template** (complete for each song identified):

| Position | Working Title / Description | Song Type | Primary Trigger | Voice | Character(s) |
|---|---|---|---|---|---|
| Act 1 Opening | [e.g., "World of the show"] | opening_number | Communal Expression | External/Ensemble | Company |
| Act 1, early | [e.g., "Protagonist's desire"] | i_want_song | Declaration of Want | Internal | Protagonist |
| ... | | | | | |
| Act 1 Finale | [e.g., "The confrontation / the point of no return"] | act_one_finale | Conflict Escalation | External/Ensemble | Multiple |
| Act 2, late | [e.g., "The 11 o'clock number"] | eleven_oclock_number | Decision/Revelation | Internal | Protagonist |
| Final | [e.g., "Resolution / reprise"] | reprised_theme | Thematic Crystallisation | External/Ensemble | Company |

Aim to place 8-12 songs at this stage. Gaps are fine — they will be filled in the full Musical Structure workflow.

---

## 4. Structural Flags

Check for common structural problems before finalising:

- [ ] **I Want song placed early** — is it in the first 15-20 minutes of Act 1?
- [ ] **Act 1 ends on escalation, not resolution** — does the Act 1 Finale raise stakes rather than resolve them?
- [ ] **Act 2 has a dark night** — is there a moment when the want is apparently lost?
- [ ] **11 o'clock number is earned** — does the show build to this level of emotional exposure?
- [ ] **Tonal variety** — is there a comedy number (if appropriate)? An intimate moment? An ensemble number?
- [ ] **No two consecutive songs of the same type or emotional register**
- [ ] **The finale has a thematic reason** — it doesn't just end, it proves the show's argument

Raise any flags with the creator and discuss. Not all problems need to be solved now — they just need to be seen.

---

## 5. Update Musical Bible

Append to the Musical Bible:

```markdown
## Act Structure with Song Placement

### ACT ONE

**Major Beats:**
1. Opening: [brief description]
2. Protagonist introduction: [brief description]
3. I Want moment: [brief description — when and how]
4. Inciting event: [brief description]
5. Rising complications: [brief description]
6. Act 1 Finale: [brief description — what is the point of no return?]

### ACT TWO

**Major Beats:**
1. Re-entry: [brief description]
2. Continued pursuit / cost escalation: [brief description]
3. Dark night / All Is Lost: [brief description]
4. 11 O'Clock moment: [brief description]
5. Resolution: [brief description — does the protagonist get what they want? What they need?]
6. Final image: [brief description]

### Initial Song Placement Sketch

| Position | Working Title / Description | Song Type | Trigger | Voice | Character(s) |
|---|---|---|---|---|---|
[complete from discussion above]

### Structural Flags
[Any structural concerns identified for attention in the full Musical Structure workflow]
```

Update `stepsCompleted` in frontmatter to include `"05-structure-overview"`.

---

## 6. Validation & Continuation

Before proceeding, confirm:
- [ ] Both acts have clear shape and logic
- [ ] At least 8 songs placed (even loosely)
- [ ] Act 1 Finale and 11 o'clock number identified
- [ ] I Want song is early in Act 1
- [ ] Any structural flags noted for future attention
- [ ] Creator has a clear sense of the show's overall shape

## Menu Options

**[C] Continue** — Proceed to Step 6: Musical Bible Creation (final compilation)
**[R] Revise** — Refine structure or song placement before proceeding
**[P] Pause** — Save progress and resume later

---

**Next Step**: When user selects Continue, load:
`{project-root}/_tale/smm/workflows/musical-theatre/create-musical-brief/steps/06-musical-bible-creation.md`
