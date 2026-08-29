# Phase 2.2 — Development Toolchain

## Purpose

Phase 2.2 establishes the development toolchain for the JavaScript Notebook rebuild.

The toolchain must support the long-term project requirements while avoiding unnecessary dependencies and premature architectural commitments.

## Stage Structure

- 2.2.1 — Development Toolchain Planning
- 2.2.2 — Core Toolchain Installation
- 2.2.3 — TypeScript Configuration
- 2.2.4 — React + Vite Configuration
- 2.2.5 — ESLint + Prettier
- 2.2.6 — Testing Toolchain
- 2.2.7 — Development Scripts
- 2.2.8 — Toolchain Verification
- 2.2.9 — Documentation & Checkpoint

## Current Stage

**2.2.1 — Development Toolchain Planning**

Status: **Completed**

## Guiding Principles

1. Build the new implementation from scratch.
2. Do not copy the previous application's dependency configuration.
3. Select tools according to the new architecture and requirements.
4. Avoid unnecessary dependencies.
5. Separate UI, application, domain, runtime, analysis, persistence, export, and infrastructure concerns.
6. Verify tools after installation and configuration.
7. Document important technology decisions.

## Planned Foundation

| Area | Planned Technology | Status |
|---|---|---|
| Runtime | Node.js | Available |
| Package manager | npm | Available |
| Language | TypeScript | Selected |
| UI | React | Selected |
| Build tool | Vite | Selected |
| Styling | CSS / appropriate modular strategy | Planned |
| Code editor | Monaco Editor | Planned |
| Linting | ESLint | Planned |
| Formatting | Prettier | Planned |
| Unit/integration testing | Vitest | Planned |
| Component testing | React Testing Library | Planned |
| E2E testing | Playwright | Planned |
| AST tooling | To be selected | Deferred |
| Execution engine | To be designed | Deferred |
| Visualization | To be selected | Deferred |
| PDF export | To be selected | Deferred |

## Completion Criteria

Stage 2.2.1 is complete when:

- Core toolchain requirements are identified.
- Technology choices and deferred decisions are documented.
- The previous implementation is not used as the dependency blueprint.
- Toolchain constraints are documented.
- The next installation stage is clearly defined.
