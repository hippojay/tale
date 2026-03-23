---
step: 6
name: "Musical Bible Creation"
objective: "Compile all discovered material into a complete, coherent Musical Bible and confirm readiness to begin writing"
output_file: "{project-root}/{output_folder}/musical-theatre/musical-bible.md"
next_step: null
---

# Step 6: Musical Bible Creation

**Objective**: Compile everything discovered across Steps 1-5 into a complete, coherent Musical Bible. Review for gaps, inconsistencies, or unresolved questions. Confirm the creator is ready to move to writing.

This is the final step of the Musical Brief process. At the end of this step, the Musical Bible is the single source of truth for all musical theatre development. Every book scene, song brief, lyric, and structural decision will be checked against it.

---

## 1. Musical Bible Review

Review the Musical Bible document as built across the previous steps. Check each section:

**Project Overview** (from Step 1 & 2):
- [ ] Title confirmed
- [ ] Musical style confirmed
- [ ] Setting confirmed
- [ ] Target running time estimated
- [ ] Approximate song count set
- [ ] Tone described

**The Musical Reason** (from Step 1):
- [ ] Clearly articulated — the one or two sentences that explain why this story must be a musical
- [ ] The creator could recite this from memory

**Thematic Core** (from Step 3):
- [ ] Central dramatic question is answerable by the finale
- [ ] Want/need articulated and genuinely in tension
- [ ] The show's argument (what the finale proves) is clear

**Musical Style & Voice** (from Step 2):
- [ ] Reference shows listed with specific reasons
- [ ] Score description present (even if partial)
- [ ] Tone established
- [ ] Influences to avoid noted

**Characters** (from Step 3):
- [ ] Protagonist with want, need, flaw, and arc
- [ ] Key supporting characters
- [ ] Antagonistic force identified

**The Song World** (from Step 4):
- [ ] Song Voice tendency (Internal/External/Mixed)
- [ ] Primary Song Triggers listed
- [ ] Song type inventory completed
- [ ] Emotional range established

**Act Structure with Song Placement** (from Step 5):
- [ ] Both acts have clear shape
- [ ] At least 8 songs placed
- [ ] Act 1 Finale and 11 o'clock number identified
- [ ] I Want song placed early in Act 1

---

## 2. Gap Analysis

For each gap or incomplete section identified in the review:
- Note it explicitly in the Musical Bible under **Open Questions**
- Determine whether it is: *blocking* (must be resolved before writing begins) or *non-blocking* (can be resolved during writing)

Common non-blocking gaps (fine to leave open):
- Full character profiles (will be built in Character Developer workflow)
- Detailed song lyrics (will be built with Larry)
- Specific staging ideas
- Composer/orchestration details

Common blocking gaps (should be resolved before writing):
- Unclear want/need (the show has no engine)
- Unplaced Act 1 Finale or 11 o'clock number
- No I Want song identified
- Musical style undecided (affects tone and form of all writing)

---

## 3. Confirm the Song Placement Map in Master Table

Compile the complete initial Song Placement Map as a single master table — this becomes the show's song list:

```markdown
## Song List (Master)

| # | Act | Working Title / Description | Song Type | Trigger | Voice | Character(s) | Status |
|---|---|---|---|---|---|---|---|
| 1 | 1 | [opening number] | opening_number | Communal Expression | External | Company | Planned |
| 2 | 1 | [I Want song] | i_want_song | Declaration of Want | Internal | Protagonist | Planned |
...
```

Status options: Planned / Brief Complete / First Draft / Polished / Final

---

## 4. Set the Next Steps

Based on the completed Musical Bible, recommend the creator's next workflow actions:

**Immediate next step — Musical Structure** (`tale-smm-musical-structure`):
The full Musical Structure workflow (Alice) expands the sketch from Step 5 into a complete beat sheet with detailed song placement — ready for book writing and lyric briefing.

**Parallel work available:**
- Character profiles (Character Developer — `tale-smm-create-profiles`)
- World building if the setting needs depth (`tale-smm-create-world`)

**When ready to write:**
- First book scene: `tale-smm-write-book-scene` (Alice)
- First song identification: `tale-smm-dialogue-to-song` (Alice) → produces Song Brief for Larry
- First song sheet: `tale-smm-song-sheet` (Larry)
- First lyric: `tale-smm-write-lyric` (Larry)

---

## 5. Final Musical Bible Compilation

Ensure the Musical Bible document is complete and well-organised. Add the following closing sections if not already present:

```markdown
## Development Notes

### Open Questions
[List any unresolved questions with blocking/non-blocking status]

### Next Steps
- [ ] Run Musical Structure workflow (tale-smm-musical-structure)
- [ ] [Any other immediate actions]

---
*This Musical Bible is the single source of truth for [PROJECT TITLE]. All book scenes, song briefs, lyric drafts, and structural decisions reference this document. Update it as the show develops.*
```

Update `stepsCompleted` in frontmatter to include `"06-musical-bible-creation"`.

---

## 6. Final Validation

Before closing the workflow:
- [ ] Musical Bible document is complete and readable as a standalone document
- [ ] The creator understands their next steps
- [ ] All blocking gaps are identified and have a plan
- [ ] The creator is genuinely excited about this show

---

## Completion

The Musical Brief workflow is complete. The Musical Bible is now the foundation for all subsequent work.

Present a brief summary to the creator:

> **Your Musical Bible is complete.**
>
> Here is what we've established:
> - **[Title]** — a [musical style] about [one sentence premise]
> - **The musical reason**: [their answer from Step 1]
> - **Central question**: [central dramatic question]
> - **[N] songs sketched** across two acts
> - **Next step**: [recommended first action]
>
> Everything you write from here — every scene Alice writes, every lyric Larry crafts — will be in service of this foundation.

---

**This workflow is complete. No next step to load.**
