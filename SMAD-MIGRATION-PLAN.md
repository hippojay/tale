# SMAD Migration Plan

## Overview
Transform BMAD-METHOD (software agile framework) into SMAD (Story More, Author Dreams) — a literary/fiction creation framework. Complete replacement of BMM module with SMM, rebrand core from BMAD to SMAD, retain core capabilities (party mode, brainstorming, elicitation).

**Branch:** `smad-literary-framework`
**Source POC:** `../crystal_wolves/_smad/`
**Deploy folder name:** `_smad`

---

## Phase 1: Remove BMM, Create SMM Structure
- [x] Create branch `smad-literary-framework`
- [ ] 1.1 Delete `src/bmm/` entirely
- [ ] 1.2 Create `src/smm/` directory structure
- [ ] 1.3 Copy and fix all 10 agent YAML files (fix `_blad/` → `_smad/` paths, fix metadata IDs)
- [ ] 1.4 Copy module.yaml from POC (already clean)
- [ ] 1.5 Copy all 6 templates
- [ ] 1.6 Copy all 41 populated workflow files
- [ ] 1.7 Copy SRD step file (01-story-concept.md)
- [ ] 1.8 Create SMM module installer (`src/smm/_module-installer/installer.js`)

## Phase 2: Fill Empty Workflows (11 files to create)
Create workflow.md for each empty directory, matching existing style/depth:

### Copy Editing (agent: copy-editor / Patricia)
- [ ] 2.1 `workflows/copy-editing/consistency-pass/workflow.md` — Check consistency across manuscript
- [ ] 2.2 `workflows/copy-editing/fact-check/workflow.md` — Verify facts and references
- [ ] 2.3 `workflows/copy-editing/final-proof/workflow.md` — Final proofread before publication

### Line Editing (agent: line-editor / Catherine)
- [ ] 2.4 `workflows/line-editing/dialogue-tightening/workflow.md` — Tighten and sharpen dialogue
- [ ] 2.5 `workflows/line-editing/description-refinement/workflow.md` — Refine descriptive passages
- [ ] 2.6 `workflows/line-editing/rhythm-analysis/workflow.md` — Analyze and improve prose rhythm

### Publishing (agent: publishing-strategist / Alexandra)
- [ ] 2.7 `workflows/publishing/launch-plan/workflow.md` — Create book launch strategy
- [ ] 2.8 `workflows/publishing/publishing-path/workflow.md` — Evaluate traditional vs. self-publishing

### World Building (agent: world-builder / Theodore)
- [ ] 2.9 `workflows/world-building/develop-culture/workflow.md` — Create detailed culture or society
- [ ] 2.10 `workflows/world-building/location-detail/workflow.md` — Develop specific location in depth
- [ ] 2.11 `workflows/world-building/world-consistency/workflow.md` — Check world consistency across manuscript

## Phase 3: Rebrand Core (BMAD → SMAD)
All files in `src/core/` and `src/utility/`:

### Core Agent
- [ ] 3.1 Rename `bmad-master.agent.yaml` → `smad-master.agent.yaml`
- [ ] 3.2 Rewrite agent persona/identity for literary orchestration
- [ ] 3.3 Update menu triggers and paths (`_bmad` → `_smad`)

### Core Module Config
- [ ] 3.4 Update `src/core/module.yaml` — rename, change output folder default to `_smad-output`

### Core Module Help CSV
- [ ] 3.5 Update `src/core/module-help.csv` — rename all `bmad-` commands to `smad-`, update paths

### Core Tasks (7 files)
- [ ] 3.6 `tasks/editorial-review-structure.xml` — update `_bmad` refs → `_smad`
- [ ] 3.7 `tasks/editorial-review-prose.xml` — update refs
- [ ] 3.8 `tasks/help.md` — rewrite for SMAD literary context
- [ ] 3.9 `tasks/review-adversarial-general.xml` — update refs
- [ ] 3.10 `tasks/shard-doc.xml` — update refs
- [ ] 3.11 `tasks/workflow.xml` — update refs
- [ ] 3.12 `tasks/index-docs.xml` — update refs

### Core Workflows (retain but rebrand)
- [ ] 3.13 `workflows/party-mode/workflow.md` — update bmad refs → smad
- [ ] 3.14 `workflows/party-mode/steps/step-01-agent-loading.md` — update refs
- [ ] 3.15 `workflows/party-mode/steps/step-02-discussion-orchestration.md` — update refs
- [ ] 3.16 `workflows/party-mode/steps/step-03-graceful-exit.md` — update refs
- [ ] 3.17 `workflows/brainstorming/workflow.md` — update refs
- [ ] 3.18 `workflows/brainstorming/steps/step-03-technique-execution.md` — update refs
- [ ] 3.19 `workflows/advanced-elicitation/workflow.xml` — update refs

### Utility Components
- [ ] 3.20 `utility/agent-components/activation-steps.txt` — update bmad refs
- [ ] 3.21 `utility/agent-components/handler-workflow.txt` — update refs
- [ ] 3.22 `utility/agent-components/handler-validate-workflow.txt` — update refs

## Phase 4: Create SMM Module Help CSV
- [ ] 4.1 Create `src/smm/module-help.csv` with all literary workflows mapped to phases

## Phase 5: Create Literary Teams
- [ ] 5.1 Create `src/smm/teams/default-party.csv` — literary agent party config
- [ ] 5.2 Create `src/smm/teams/team-editorial.yaml` — editorial team

## Phase 6: Verification
- [ ] 6.1 Verify no remaining `_bmad` or `bmad` references in src/ content files
- [ ] 6.2 Verify no remaining `_blad` references anywhere
- [ ] 6.3 Verify all agent menu workflow paths resolve to existing files
- [ ] 6.4 Verify all 11 new workflows have content
- [ ] 6.5 Commit all changes

---

## Agent Roster (from POC)

| # | Agent File | Name | Title | Icon | Category |
|---|-----------|------|-------|------|----------|
| 1 | story-architect.agent.yaml | Elena | Story Architect | 📚 | Story Development |
| 2 | character-developer.agent.yaml | Marcus | Character Developer | 🎭 | Story Development |
| 3 | world-builder.agent.yaml | Theodore | World Builder | 🌍 | Story Development |
| 4 | ghost-writer.agent.yaml | Marcus | Ghost Writer | ✍️ | Writing Production |
| 5 | narrative-enrichment.agent.yaml | Vivian | Narrative Enrichment | 🎨 | Writing Production |
| 6 | story-reviewer.agent.yaml | James | Story Reviewer | 🔍 | Review & QA |
| 7 | developmental-editor.agent.yaml | Sarah | Developmental Editor | ✏️ | Editorial |
| 8 | line-editor.agent.yaml | Catherine | Line Editor | ✂️ | Editorial |
| 9 | copy-editor.agent.yaml | Patricia | Copy Editor | 📝 | Editorial |
| 10 | publishing-strategist.agent.yaml | Alexandra | Publishing Strategist | 📈 | Publishing |

## Workflow Categories & Phases

| Phase | Category | Workflows | Agent |
|-------|----------|-----------|-------|
| 1-planning | story-planning | create-srd, create-story-bible, create-story-structure, chapter-planning, character-arcs, genre-compliance | story-architect |
| 1-planning | character | create-profiles, design-arcs, dialogue-voice, relationships, consistency-check | character-developer |
| 1-planning | world-building | create-world, develop-culture, magic-system, location-detail, world-consistency | world-builder |
| 1-planning | story-architecture | pacing-analysis, structure-analysis | story-architect |
| 2-writing | writing | write-chapter, write-scene, revise-chapter, voice-matching, expand-scene | ghost-writer |
| 2-writing | enrichment | enrich-chapter, worldbuild-scene, enhance-atmosphere, sensory-audit, character-presence | narrative-enrichment |
| 3-review | review | chapter-review, scene-review, dialogue-review, continuity-check, reader-experience, improvement-roadmap | story-reviewer |
| 3-review | editing | manuscript-evaluation, structure-analysis, pacing-review, opening-critique, revision-roadmap | developmental-editor |
| 4-polish | line-editing | chapter-edit, prose-polish, dialogue-tightening, description-refinement, rhythm-analysis | line-editor |
| 4-polish | copy-editing | chapter-edit, style-sheet, consistency-pass, fact-check, final-proof | copy-editor |
| 5-publish | publishing | market-analysis, query-letter, synopsis, publishing-path, launch-plan | publishing-strategist |

## Notes
- Core capabilities retained: party mode, brainstorming, advanced elicitation, editorial review tasks, shard doc, index docs
- All `{project-root}/_blad/` refs in POC agents must become `{project-root}/_smad/`
- Ghost Writer and Character Developer both named "Marcus" in POC — Ghost Writer stays Marcus, Character Developer stays Marcus (different roles, same name is fine per POC design)
- SRD = Story Requirements Document (literary equivalent of PRD)
