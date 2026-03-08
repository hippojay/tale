# Prose Quality Audit Workflow

## Objective
Validate prose quality through quantitative metrics and anti-slop detection to ensure authentic, engaging writing that avoids AI-generic patterns.

## Prerequisites
- Completed chapter or scene draft
- Narrative Voice Profile (if available)
- Story Requirements Document for genre/audience context

## Steps

### 1. Load Content & Context

**Load the prose to audit:**
- Chapter file or scene excerpt
- Minimum 500 words for meaningful metrics

**Load reference documents:**
- Narrative Voice Profile (target metrics)
- Previous chapter metrics (for consistency)
- Genre/audience from SRD

### 2. Calculate Quantitative Metrics

**Vocabulary Diversity — Type-Token Ratio (TTR):**
```
TTR = (Unique Words / Total Words)

Target Ranges by Prose Sophistication:
- Accessible: 0.150 - 0.175 (commercial, YA)
- Polished: 0.175 - 0.200 (mainstream literary)
- Literary: 0.200 - 0.225 (literary fiction)
- Experimental: 0.225+ (avant-garde)
```

**Calculate:**
- Count total words (excluding dialogue tags, articles)
- Count unique words (case-insensitive)
- Compute ratio
- Compare to target range

**Sentence Length Analysis:**
```
Target Ranges by Genre:
- Thriller/Action: 12-18 words average
- Commercial Fiction: 15-20 words average
- Literary Fiction: 20-25 words average
- Experimental: 25+ words average (or highly varied)
```

**Calculate:**
- Average sentence length
- Shortest sentence
- Longest sentence
- Standard deviation (variation)
- Percentage of sentences under 10 words
- Percentage of sentences over 30 words

**Sentence Complexity Ratio:**
```
Target: 70-80% complex/compound, 20-30% simple

Simple: Single independent clause
Compound: Multiple independent clauses (coordinating conjunction)
Complex: Independent + dependent clause(s)
```

**Calculate:**
- Count simple sentences
- Count compound sentences
- Count complex sentences
- Compute percentages

**Paragraph Analysis:**
```
Target Variation:
- Short (1-3 sentences): 20-30%
- Medium (4-6 sentences): 40-50%
- Long (7+ sentences): 20-30%
```

**Calculate:**
- Paragraph count
- Average sentences per paragraph
- Distribution across short/medium/long

**Dialogue Density:**
```
Target by Scene Type:
- Action scenes: 10-20% dialogue
- Character scenes: 40-60% dialogue
- Introspective: 5-15% dialogue
```

**Calculate:**
- Word count in dialogue
- Word count in narrative
- Dialogue percentage

### 3. AI-Generic Pattern Detection

**Scan for common AI-generated prose patterns across 6 categories:**

**Category 1: Overused Intensifiers (10 patterns)**
- "very [adjective]" (e.g., "very important", "very beautiful")
- "really [adjective/adverb]"
- "quite [adjective]"
- "rather [adjective]"
- "extremely [adjective]"
- "incredibly [adjective]"
- "absolutely [adjective]"
- "utterly [adjective]"
- "truly [adjective]"
- "remarkably [adjective]"

**Category 2: Cliché Phrases (15 patterns)**
- "a sense of [emotion]" (e.g., "a sense of dread")
- "a wave of [emotion]" (e.g., "a wave of relief")
- "a pang of [emotion]"
- "a flicker of [emotion]"
- "a surge of [emotion]"
- "heart pounding"
- "breath caught"
- "time seemed to"
- "world around [pronoun]"
- "couldn't help but"
- "found [pronoun]self"
- "seemed to [verb]"
- "began to [verb]"
- "started to [verb]"
- "tried to [verb]"

**Category 3: Telling vs. Showing (8 patterns)**
- "[Character] felt [emotion]"
- "[Character] was [emotion]"
- "[Character] thought that"
- "[Character] realized that"
- "[Character] knew that"
- "[Character] understood that"
- "[Character] decided to"
- "[Character] wanted to"

**Category 4: Weak Verbs (12 patterns)**
- "was/were [verb]ing" (progressive tense overuse)
- "had [past participle]" (past perfect overuse)
- "would [verb]" (conditional overuse)
- "could [verb]" (modal overuse)
- "seemed to be"
- "appeared to be"
- "looked like"
- "felt like"
- "sounded like"
- "there was/were"
- "it was"
- "is/are/was/were" (to be verb overuse)

**Category 5: Adverb Overuse (10 patterns)**
- "[verb] quickly"
- "[verb] slowly"
- "[verb] carefully"
- "[verb] suddenly"
- "[verb] quietly"
- "[verb] softly"
- "[verb] gently"
- "[verb] firmly"
- "[verb] nervously"
- "[verb] angrily"

**Category 6: Generic Descriptions (9 patterns)**
- "beautiful [noun]"
- "dark [noun]"
- "old [noun]"
- "small [noun]"
- "large [noun]"
- "good [noun]"
- "bad [noun]"
- "nice [noun]"
- "interesting [noun]"

**Detection Process:**
- Scan prose for each pattern
- Count occurrences per 1000 words
- Flag patterns exceeding thresholds:
  - 0-2 per 1000 words: ✅ Excellent
  - 3-5 per 1000 words: ⚠️ Acceptable
  - 6-10 per 1000 words: ⚠️ Needs attention
  - 11+ per 1000 words: ❌ Critical issue

### 4. Show vs. Tell Analysis

**Calculate showing percentage:**
```
Showing Indicators:
- Sensory details (sight, sound, smell, taste, touch)
- Action verbs (character doing, not being)
- Dialogue with subtext
- Physical reactions (body language, facial expressions)
- Concrete imagery

Telling Indicators:
- Emotion labels ("she was angry")
- Thought summaries ("he realized that")
- Abstract concepts without grounding
- Narrator explanation of feelings
```

**Target Ranges:**
- Action scenes: 80-90% showing
- Character scenes: 60-70% showing
- Introspective scenes: 40-60% showing

**Estimate showing percentage** based on:
- Sensory detail density
- Action verb ratio
- Dialogue presence
- Physical reaction descriptions

### 5. Voice Consistency Check

**If Narrative Voice Profile exists, compare:**

**Sentence Length:**
- Does average match target range?
- Is variation consistent with profile?

**Vocabulary Level:**
- Does TTR match sophistication level?
- Are word choices aligned with profile?

**Tone:**
- Does emotional register match profile?
- Are tonal shifts intentional or inconsistent?

**POV Depth:**
- Is interiority level consistent?
- Is narrative distance maintained?

**Rhythm:**
- Does pacing match profile expectations?
- Are paragraph patterns consistent?

### 6. Generate Audit Report

**Create comprehensive report:**

---

## Prose Quality Audit Report
**Chapter:** [Chapter Number/Title]  
**Word Count:** [X words]  
**Date:** [Date]

### Overall Quality Score: [X/100]

---

### Quantitative Metrics

**Vocabulary Diversity (TTR):**
- **Score:** [X.XXX]
- **Target:** [X.XXX - X.XXX] ([sophistication level])
- **Status:** [✅ Excellent | ⚠️ Acceptable | ❌ Needs Work]
- **Analysis:** [Brief interpretation]

**Sentence Length:**
- **Average:** [X words]
- **Target:** [X-X words] ([genre])
- **Range:** [shortest] - [longest] words
- **Variation (StdDev):** [X.X]
- **Status:** [✅ | ⚠️ | ❌]
- **Analysis:** [Brief interpretation]

**Sentence Complexity:**
- **Simple:** [X%]
- **Compound:** [X%]
- **Complex:** [X%]
- **Target:** 70-80% complex/compound
- **Status:** [✅ | ⚠️ | ❌]
- **Analysis:** [Brief interpretation]

**Paragraph Variation:**
- **Short (1-3):** [X%]
- **Medium (4-6):** [X%]
- **Long (7+):** [X%]
- **Status:** [✅ | ⚠️ | ❌]
- **Analysis:** [Brief interpretation]

**Dialogue Density:**
- **Dialogue:** [X%]
- **Narrative:** [X%]
- **Target:** [X-X%] ([scene type])
- **Status:** [✅ | ⚠️ | ❌]

---

### AI-Generic Pattern Detection

**Overall Pattern Score:** [X/64 patterns detected]

**Category 1: Overused Intensifiers**
- **Count:** [X occurrences] ([X per 1000 words])
- **Status:** [✅ | ⚠️ | ❌]
- **Examples:** [List specific instances with line numbers]

**Category 2: Cliché Phrases**
- **Count:** [X occurrences] ([X per 1000 words])
- **Status:** [✅ | ⚠️ | ❌]
- **Examples:** [List specific instances]

**Category 3: Telling vs. Showing**
- **Count:** [X occurrences] ([X per 1000 words])
- **Status:** [✅ | ⚠️ | ❌]
- **Examples:** [List specific instances]

**Category 4: Weak Verbs**
- **Count:** [X occurrences] ([X per 1000 words])
- **Status:** [✅ | ⚠️ | ❌]
- **Examples:** [List specific instances]

**Category 5: Adverb Overuse**
- **Count:** [X occurrences] ([X per 1000 words])
- **Status:** [✅ | ⚠️ | ❌]
- **Examples:** [List specific instances]

**Category 6: Generic Descriptions**
- **Count:** [X occurrences] ([X per 1000 words])
- **Status:** [✅ | ⚠️ | ❌]
- **Examples:** [List specific instances]

---

### Show vs. Tell Analysis

**Estimated Showing Percentage:** [X%]
- **Target:** [X-X%] ([scene type])
- **Status:** [✅ | ⚠️ | ❌]

**Showing Strengths:**
- [Specific examples of effective showing]

**Telling Weaknesses:**
- [Specific examples where showing would be stronger]

---

### Voice Consistency

**Comparison to Narrative Voice Profile:**

**Sentence Length:** [✅ Consistent | ⚠️ Minor drift | ❌ Inconsistent]
**Vocabulary Level:** [✅ | ⚠️ | ❌]
**Tone:** [✅ | ⚠️ | ❌]
**POV Depth:** [✅ | ⚠️ | ❌]
**Rhythm:** [✅ | ⚠️ | ❌]

**Consistency Notes:**
[Detailed analysis of any voice drift or inconsistencies]

---

### Recommendations

**Critical Issues (Must Fix):**
1. [Issue with specific examples and suggested fixes]
2. [Issue with specific examples and suggested fixes]

**Improvement Opportunities:**
1. [Suggestion with examples]
2. [Suggestion with examples]
3. [Suggestion with examples]

**Strengths to Maintain:**
1. [What's working well]
2. [What's working well]

---

### Revision Priorities

**High Priority:**
- [ ] [Specific revision task]
- [ ] [Specific revision task]

**Medium Priority:**
- [ ] [Specific revision task]
- [ ] [Specific revision task]

**Low Priority (Polish):**
- [ ] [Specific revision task]

---

**Next Steps:**
1. Address critical issues first
2. Run audit again after revisions
3. Compare metrics to previous chapters for consistency

---

*Audit completed: [Timestamp]*

### 7. Provide Actionable Feedback

**For each flagged issue, provide:**
- **Location:** Specific line/paragraph reference
- **Pattern:** What was detected
- **Why it's problematic:** Impact on prose quality
- **Suggested fix:** Concrete alternative

**Example:**
```
❌ Line 47: "She felt a wave of anxiety wash over her."

Pattern: Cliché phrase ("wave of [emotion]") + Telling ("felt")

Why problematic: Common AI-generated pattern, tells emotion instead of showing

Suggested fix: "Her hands trembled as she reached for the door handle. 
The hallway stretched endlessly ahead, each shadow a potential threat."
```

### 8. Track Metrics Over Time

**Create metrics log:**
- Chapter number
- Date
- TTR score
- Average sentence length
- Complexity ratio
- Slop pattern count
- Overall quality score

**Identify trends:**
- Is quality improving?
- Are metrics consistent across chapters?
- Are specific patterns recurring?

## Output

- **Prose Quality Audit Report** — Comprehensive analysis with scores and recommendations
- **Metrics Log Entry** — Data point for trend tracking
- **Revision Checklist** — Prioritized action items
- **Saved to:** `{output_folder}/quality-audits/chapter-[X]-audit.md`

## Usage Notes

**When to use this workflow:**
- After completing first draft of chapter
- Before submitting chapter for review
- When prose feels "off" but you can't identify why
- To validate revisions improved quality
- To maintain consistency across chapters

**Frequency:**
- Every chapter (recommended)
- Every 3-5 chapters (minimum)
- After major revisions
- Before final polish phase

**Integration with other workflows:**
- Run AFTER `/tale-smm-write-chapter`
- Run BEFORE `/tale-smm-chapter-review`
- Use results to inform `/tale-smm-revise-chapter`
- Compare to `/tale-smm-establish-narrative-voice` targets

**For experienced authors:**
- Focus on anti-slop detection
- Use metrics to validate instincts
- Track consistency across chapters

**For new authors:**
- Use as learning tool
- Understand what makes prose effective
- Build awareness of AI-generic patterns

**Automation potential:**
- Can be triggered automatically after chapter completion
- Can be part of automated audit chain
- Metrics can feed into project dashboard
