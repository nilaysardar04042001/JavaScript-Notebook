# JavaScript Notebook

## Project Status

**Project:** JavaScript Notebook
**Rebuild:** From Scratch
**Current Phase:** Phase 2 — Project Foundation
**Current Sub-phase:** 2.1 — Repository Initialization
**Current Stage:** 2.1.4 — Initial Documentation

## Project Purpose

JavaScript Notebook is a computer- and tablet-oriented interactive JavaScript notebook designed for learning, writing, executing, understanding, analyzing, and visualizing JavaScript programs.

The system is intended to combine notebook-style authoring with deeper program execution and analysis capabilities.

## Core Capabilities

The planned system includes:

- Notes cells containing text and images
- Markdown cells
- JavaScript coding cells
- JavaScript execution
- AST-based program analysis
- Variable and scope analysis
- Function analysis
- Loop analysis
- API and network analysis
- Program execution visualization
- Data-flow visualization
- Educational memory-allocation visualization
- Data visualization
- Resizable workspace panels
- Responsive computer and tablet layouts
- Persistent notebook state
- Recovery and autosave
- Structured PDF export
- Automated testing
- Detailed project documentation

## Rebuild Principle

The previous JavaScript Notebook implementation is not being reused as the implementation foundation.

The previous project is used only as a reference for:

- Lessons learned
- Existing architectural observations
- Previously identified problems
- Functional requirements
- UI/UX observations
- Analysis requirements
- Design decisions that remain valid

The new implementation is being constructed from scratch.

## Primary Design Constraint

The notebook is intentionally oriented toward:

1. Desktop computers
2. Laptops
3. Tablets

Mobile-phone optimization is not a primary target.

## Architecture Principles

The project will maintain clear separation between:

- Presentation
- Application
- Domain
- Runtime
- Analysis
- Persistence
- Export
- Infrastructure

Domain and application logic should not become dependent on individual UI components.

## Development Method

Development follows the hierarchy:

Phase
→ Sub-phase
→ Stage
→ Sub-stage
→ Implementation
→ Verification
→ Documentation

No stage should be considered complete until its implementation and verification criteria have been satisfied.

## Current Progress

### Phase 0 — Planning / Requirements

Status: Completed

### Phase 1 — Technical Architecture & System Design

Status: Completed

### Phase 2 — Project Foundation

Status: In Progress

#### 2.1 Repository Initialization

- 2.1.1 Repository Creation — Completed
- 2.1.2 Project Metadata — Completed
- 2.1.3 Git / Environment Configuration — Completed
- 2.1.4 Initial Documentation — In Progress

#### 2.2 Development Toolchain

Status: Not Started

## Git Policy

Git checkpoints are created at meaningful completed milestones.

Before committing:

1. Inspect changed files.
2. Verify generated files.
3. Run applicable validation.
4. Review git status.
5. Commit with a descriptive message.

## Important Repository Rule

The project must remain a single repository.

The application should not be recreated as an unrelated nested repository or accidentally initialized with another .git directory.

## Current Repository

Repository root:

C:\Users\miste\Desktop\JavaScript Notepad

Current branch:

master

## Documentation Rule

Documentation must reflect the actual project state.

Planned features must not be described as implemented.

Completed stages must have corresponding documentation.

Architecture changes must be documented before or together with implementation changes where practical.

## Next Stage

After completion of Stage 2.1.4:

**Phase 2 → Sub-phase 2.2 — Development Toolchain**

The toolchain will be established deliberately rather than copied from the previous implementation.
