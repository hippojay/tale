---
step: 1
name: "Story Concept Discovery"
objective: "Discover and refine the core story concept, premise, and logline"
output_file: "{project-root}/{output_folder}/story-requirements-document.md"
next_step: "02-genre-audience.md"
---

# Step 1: Story Concept Discovery

**Objective**: Work with the author to discover and refine their core story concept into a compelling premise and logline.

## 1. Initial Story Exploration

Ask the author these discovery questions:

1. **What's the story idea that's been burning in your mind?**
   - Let them share their initial concept freely
   - Listen for the emotional core that excites them

2. **What made you want to tell this particular story?**
   - Understand their personal connection
   - Identify the passion that will sustain them through writing

3. **If you had to describe this story in one sentence to a friend, what would you say?**
   - This helps identify the natural logline
   - Note their instinctive framing

## 2. Concept Refinement

Based on their responses, help them refine the concept by exploring:

### Core Elements
- **Protagonist**: Who is the main character?
- **Conflict**: What's the central problem or challenge?
- **Stakes**: What happens if they fail?
- **Setting**: Where and when does this take place?

### Story Questions
- What's the central question the story will answer?
- What change will the protagonist undergo?
- What's unique about this particular telling?

## 3. Logline Development

Work together to craft a compelling logline using this structure:
**"When [inciting incident], [protagonist] must [objective] or else [stakes]."**

### Logline Criteria
- ✅ Introduces the protagonist
- ✅ Establishes the central conflict
- ✅ Reveals the stakes
- ✅ Hints at the genre
- ✅ Creates intrigue

## 4. Premise Expansion

Expand the logline into a 2-3 paragraph premise that includes:
- **Setup**: The world and protagonist before the story begins
- **Inciting Incident**: What kicks off the main story
- **Journey**: The challenges and obstacles ahead
- **Stakes**: What's at risk and why it matters

## 5. Document Creation

Create the SRD document with the following structure:

```markdown
# Story Requirements Document (SRD)

---
project: "[Project Name]"
genre: "[To be determined in next step]"
target_audience: "[To be determined in next step]"
word_count_target: "[To be determined]"
completion_deadline: "[To be determined]"
stepsCompleted: ["01-story-concept"]
---

## Story Overview

### Logline
[Insert refined logline here]

### Premise
[Insert 2-3 paragraph premise here]

[Rest of template will be filled in subsequent steps]
```

## 6. Validation & Continuation

Before proceeding, ensure:
- [ ] Logline is compelling and clear
- [ ] Premise expands naturally from logline
- [ ] Author is excited about the refined concept
- [ ] Core story elements are identified

## 7. Step Completion

Update the `stepsCompleted` array in the SRD frontmatter to include `"01-story-concept"`.

## Menu Options

**[C] Continue** - Proceed to Step 2: Genre & Audience Definition
**[R] Revise** - Refine the concept further before proceeding
**[P] Pause** - Save progress and resume later

---

**Next Step**: When user selects Continue, load:
`{project-root}/_smad/smm/workflows/story-planning/create-srd/steps/02-genre-audience.md`
