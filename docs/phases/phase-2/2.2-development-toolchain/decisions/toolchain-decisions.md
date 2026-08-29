# Toolchain Decisions

## Status

**Approved Planning Baseline — Full-Stack Architecture**

## Purpose

Record the rationale for foundational development-tool choices and distinguish selected technologies from planned technologies and decisions that require later architectural work.

The JavaScript Notebook is a full-stack application.

The repository contains three primary implementation boundaries:

```text
Frontend
Backend
Shared
```

These areas remain inside one Git repository.

---

# Selected

## Node.js

Used as the development and backend runtime environment.

The exact backend server architecture remains a later decision.

## npm

Used as the repository package manager.

The project uses root-level package management for the full-stack repository.

## TypeScript

Selected as the primary implementation language for:

* Frontend
* Backend
* Shared contracts
* Application infrastructure
* Domain models
* Runtime-related code
* Analysis-related code where appropriate

TypeScript provides a common language while preserving architectural separation.

## React

Selected for the frontend presentation layer.

## Vite

Selected for frontend local development and production bundling.

## ES Modules

The project uses ES modules as the module-system foundation.

---

# Planned

## Monaco Editor

Planned for JavaScript coding cells.

## ESLint

Planned for static code-quality checks.

## Prettier

Planned for formatting consistency.

## Vitest

Planned for unit and integration testing.

## React Testing Library

Planned for frontend component and behavior testing.

## Playwright

Planned for end-to-end browser testing.

---

# Architectural Responsibilities

## Frontend

The frontend is responsible for:

* Notebook UI
* Notes cells
* Markdown cells
* Coding cells
* Cell interaction
* Editor integration
* Resizable panels
* Responsive computer/tablet layouts
* Analysis interfaces
* Visualization interfaces
* User interaction

## Backend

The backend is responsible for server-side application capabilities such as:

* APIs
* JavaScript execution
* Execution state
* Instrumentation
* Analysis services
* Persistence
* Notebook storage
* Export services
* File handling

The precise implementation is intentionally deferred.

## Shared

The shared layer may contain:

* Domain types
* API contracts
* Schemas
* Validation contracts
* Notebook models
* Cell models
* Execution result contracts
* Analysis result contracts
* Common errors and enumerations

Shared code must remain independent of frontend-specific implementation details.

---

# Deferred

## AST Parser

The parser must be selected after defining:

* Required JavaScript syntax coverage
* AST representation
* Source locations
* Static-analysis requirements
* Transformation requirements
* Visualization requirements

No parser is selected yet.

## JavaScript Execution Engine

The execution mechanism must be selected after defining:

* Runtime isolation
* Security boundaries
* Instrumentation
* Execution state
* Output capture
* Error handling
* Resource controls
* Analysis integration

No execution engine is selected yet.

## Backend Framework

A backend framework/server framework is not selected yet.

The decision will follow backend architecture design.

## Frontend ↔ Backend Transport

HTTP, WebSocket, or another transport may eventually be used.

The final choice depends on:

* Execution requests
* Streaming output
* Analysis results
* Persistence
* Real-time state
* Application requirements

The transport is therefore deferred.

## Visualization Library

The visualization solution must support the project's requirements for:

* Data visualization
* AST visualization
* Program-flow visualization
* Data-flow visualization
* Execution visualization
* Variable/scope visualization
* Educational memory visualization

Selection is deferred until visualization architecture is defined.

## PDF Export Technology

The PDF solution must support structured notebook export containing appropriate:

* Text
* Images
* Markdown
* Code
* Outputs
* Analysis
* Visualizations

Selection is deferred until export architecture is defined.

---

# Responsive UI Decision

Computer and tablet support is a primary design requirement.

The frontend must support:

* Desktop computers
* Laptops
* Tablets
* Responsive layouts
* Resizable panels

Mobile-phone optimization is not a primary target.

The previous implementation's lack of adequate responsive and panel-resizing support must not be repeated.

---

# Repository Decision

The application remains a single Git repository.

Frontend, backend, and shared code are not independent Git repositories.

Nested `.git` directories are prohibited unless explicitly approved as a future architectural change.

---

# Dependency Decision Rule

A technology should be selected when:

1. Its responsibility is understood.
2. Its architectural boundary is understood.
3. Its requirements are known.
4. Its alternatives have been considered where appropriate.
5. Introducing the dependency is justified.

Avoid adding dependencies merely because they may become useful later.

---

# Rebuild Decision

The previous implementation is not the dependency or architecture blueprint.

It is reference material only.

The new implementation must be constructed from scratch using the new architecture and documented decisions.

---

# Current Decision State

| Area                    | Decision                        |
| ----------------------- | ------------------------------- |
| Repository              | Single Git repository           |
| Architecture            | Full-stack                      |
| Frontend                | React + TypeScript + Vite       |
| Backend language        | TypeScript                      |
| Backend runtime         | Node.js                         |
| Shared layer            | Planned                         |
| Package manager         | npm                             |
| Module system           | ES Modules                      |
| Editor                  | Monaco — Planned                |
| Linting                 | ESLint — Planned                |
| Formatting              | Prettier — Planned              |
| Unit/integration tests  | Vitest — Planned                |
| Component testing       | React Testing Library — Planned |
| E2E testing             | Playwright — Planned            |
| AST parser              | Deferred                        |
| Execution engine        | Deferred                        |
| Backend framework       | Deferred                        |
| Communication transport | Deferred                        |
| Visualization           | Deferred                        |
| PDF export              | Deferred                        |

## Governing Principle

**Architecture first, dependency second.**

The project should not install a technology simply because it is common or convenient. The technology must satisfy a defined architectural responsibility.

## Next Stage

**2.2.2 — Core Toolchain Installation**
