---
step: 3
name: "Characters & Want/Need"
objective: "Establish the protagonist's want vs. need, the central dramatic question, and the key characters"
output_file: "{project-root}/{output_folder}/musical-theatre/musical-bible.md"
next_step: "04-the-song-world.md"
---

# Step 3: Characters & Want/Need

**Objective**: Establish the emotional engine of the musical. In musical theatre, the want/need dynamic is not just character psychology — it is the structural spine. Every act, every song, every scene is ultimately in service of this question: *can the protagonist get what they want? And will they discover whether it's what they need?*

---

## 1. The Protagonist's Want vs. Need

This is the single most important structural concept in musical theatre. Almost every great musical is built on this tension.

Ask the creator:

**"What does your protagonist want? Make it concrete — a specific, external, achievable goal."**
*(e.g., "To become a great man" / "To escape her town" / "To be loved by this specific person" / "To prove she's right")*

**"And what do they need? This is often the opposite, or the thing they're afraid of."**
*(e.g., "To accept their own ordinariness" / "To make peace with where they come from" / "To be capable of love" / "To admit they were wrong")*

The tension between want and need is what the show resolves in the finale. If the want and need are the same thing — the protagonist doesn't need to change. That's not a musical.

Help the creator articulate both. Common patterns:
- Want: success / Need: connection
- Want: love from a specific person / Need: self-worth
- Want: freedom / Need: belonging
- Want: revenge / Need: peace
- Want: to be seen / Need: to truly see others
- Want: to hold on / Need: to let go

---

## 2. The Central Dramatic Question

Derive the show's central dramatic question from the want/need:

**"Will [protagonist] get what they want — and will it be enough?"**

Or more precisely: **"Will [protagonist] discover what they need before it's too late — and will they be willing to change to get it?"**

This question must be answerable by the finale. It is what the audience is watching the show to find out.

Ask the creator: "If someone asks 'what is your show about?' what is the one-sentence answer that captures the emotional question — not the plot?"

---

## 3. The Protagonist

Build the protagonist profile — focused on musical theatre specifics:

- **Name & brief identity**: who are they?
- **Want** (external, concrete): [from above]
- **Need** (internal, often unconscious): [from above]
- **Fatal flaw or blind spot**: what prevents them from getting what they need?
- **Transformation arc**: who are they at the start vs. who are they (or who must they become) at the end?
- **Their musical voice**: how do they sing? Not technically — emotionally. Do they sing out of joy, or out of desperation? Do their songs confess or perform? Are they Internal (singing to themselves) or External (singing to others)? *(Note: this begins to suggest where their key songs will live)*

---

## 4. Key Supporting Characters

For each major supporting character, establish:
- **Name & relationship to protagonist**
- **Their function in the story** (antagonist / ally / love interest / foil / mirror)
- **Their own want** — supporting characters in musicals are not furniture; they have their own desires
- **How they challenge the protagonist**: do they obstruct the want, or force the protagonist toward the need?
- **Do they sing?** — and if so, what does their singing reveal that their speech cannot?

In musical theatre, the supporting characters who get songs are the ones who have something that can only be expressed musically. Ask: "Which of these characters has something they cannot say in speech?"

---

## 5. The Antagonist

The antagonist in musical theatre need not be a villain. They may be:
- A person who genuinely wants what the protagonist wants and is in competition
- A system, institution, or social force (Chicago, Hamilton, Cabaret)
- An aspect of the protagonist themselves (many concept musicals)
- Someone who loves the protagonist but in a way that prevents their growth

Ask: "What is the force that makes the want impossible? Is it a person, a world, or something inside the protagonist?"

---

## 6. Character Vocal Register (Optional at this stage)

If the creator has a sense of casting or vocal type, note it. If not, leave blank for now. This will be revisited in the Musical Bible once songs are placed.

---

## 7. Update Musical Bible

Append to the Musical Bible:

```markdown
## Thematic Core

### Central Dramatic Question
[The one question the musical must answer by the finale]

### The Show's Argument
[The thematic statement the finale will prove or disprove — e.g., "You can only truly love another person when you stop needing them to complete you."]

### Protagonist

| Field | Detail |
|---|---|
| **Name** | [Name] |
| **Want** | [External, concrete goal] |
| **Need** | [Internal truth — often opposite to the want] |
| **Fatal Flaw** | [What prevents them getting what they need] |
| **Transformation Arc** | [Who they are at start → who they must become] |
| **Musical Voice** | [How they relate to song: Internal / External / the emotional mode of their key numbers] |

### Key Supporting Characters

| Character | Role | Their Want | How They Challenge the Protagonist |
|---|---|---|---|
| [Name] | [Function] | [Want] | [Challenge] |

### The Antagonist
[Who or what opposes the protagonist — person, world, or internal force]
```

Update `stepsCompleted` in frontmatter to include `"03-characters-and-want"`.

---

## 8. Validation & Continuation

Before proceeding, confirm:
- [ ] Protagonist's want is concrete and external
- [ ] Protagonist's need is internal and distinct from the want (ideally in tension with it)
- [ ] Central dramatic question is clearly statable
- [ ] At least 2-3 supporting characters identified with their own wants
- [ ] Antagonistic force identified
- [ ] The creator can feel how want/need tension could drive two acts of a musical

## Menu Options

**[C] Continue** — Proceed to Step 4: The Song World
**[R] Revise** — Refine want/need or characters before proceeding
**[P] Pause** — Save progress and resume later

---

**Next Step**: When user selects Continue, load:
`{project-root}/_tale/smm/workflows/musical-theatre/create-musical-brief/steps/04-the-song-world.md`
