# Stage 2.2.7 — Shared Contracts Configuration

## Status

**Overall:** In Progress

**Current Sub-stage:** **2.2.7.2 — Shared Contract Implementation**

**Implementation Snapshot:** The repository already includes a working shared contract and real frontend/backend consumption. The shared boundary has been established and validated at the TypeScript level. This sub-stage is considered complete based on the successful build and consumer verification performed against the shared contract.

## Parent Stage

**2.2 — Development Toolchain**

## Objective

Establish and maintain the shared-code and shared-contract boundary between the JavaScript Notebook frontend and backend.

The shared layer exists to provide common TypeScript definitions and contracts that can be consumed by both application sides without coupling shared code to browser-specific or server-specific implementation details.

This stage establishes the foundation for safe communication between:

```text
frontend/
     │
     │ shared contracts
     ▼
shared/
     ▲
     │ shared contracts
     │
backend/
```

The shared layer must remain independent of the runtime implementation of either side.

---

# 2.2.7 Stage Sequence

Stage 2.2.7 is divided into controlled sub-stages:

```text
2.2.7 — Shared Contracts Configuration
│
├── 2.2.7.1 — Shared Module Resolution & Build Boundary
│
├── 2.2.7.2 — Shared Contract Implementation
│
├── 2.2.7.3 — Frontend / Backend Consumption
│
├── 2.2.7.4 — Shared Validation
│
└── 2.2.7.5 — Documentation & Checkpoint
```

The repository has now verified that 2.2.7.2 is complete through successful shared compilation and consumer type-checking. The remaining work is documentation cleanup and any follow-up refinement that may be required before the final checkpoint.

---

# 2.2.7.1 — Shared Module Resolution & Build Boundary

## Status

**Completed**

This sub-stage was introduced after an implementation-level module-resolution issue was discovered while connecting the backend to the existing shared TypeScript source.

The issue was resolved and the repository now operates with a verified shared boundary that supports real frontend and backend consumption.

### Current Shared Source

The repository now contains:

```text
shared/
├── tsconfig.json
└── src/
    └── application.ts
```

The shared source currently defines:

```text
ApplicationState
application
```

The frontend is already consuming this shared source.

### Frontend Import

The frontend currently uses the extensionless TypeScript import:

```ts
import { application } from "../../shared/src/application";
```

This is compatible with the frontend's existing:

```text
moduleResolution: Bundler
```

configuration.

### Backend Module Resolution

The backend currently uses:

```text
module: NodeNext
moduleResolution: NodeNext
```

Under NodeNext/ESM rules, relative imports require an explicit runtime-compatible extension.

Therefore:

```ts
import { application } from "../../shared/src/application";
```

produces a module-resolution error.

Using:

```ts
import { application } from "../../shared/src/application.ts";
```

is also rejected because `allowImportingTsExtensions` has not been enabled.

The backend therefore suggests:

```ts
import { application } from "../../shared/src/application.js";
```

However, this cannot yet be accepted as the complete architecture because the backend build currently uses:

```text
rootDir: ./src
outDir: ./dist
```

and:

```text
include: ["src/**/*.ts"]
```

The backend production build therefore does not currently include the shared source under:

```text
shared/src/
```

inside the backend build boundary.

### Required Decision

The project must establish a deliberate module-resolution and build strategy before backend → shared consumption is finalized.

The detailed decision is documented in:

```text
2.2.7.1-shared-module-resolution-build-boundary.md
```

---

# 2.2.7.2 — Current Repository State

The repository currently follows the full-stack structure:

```text
JavaScript Notebook/
│
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   ├── tsconfig.json
│   └── tsconfig.build.json
│
├── shared/
│   ├── src/
│   │   └── application.ts
│   └── tsconfig.json
│
├── scripts/
│   └── typecheck.mjs
│
├── docs/
│
├── package.json
├── package-lock.json
└── tsconfig.json
```

The frontend React/Vite foundation has already been established.

The backend TypeScript/Node.js foundation has already been established.

The shared directory now contains its TypeScript configuration and initial shared application contract.

The shared module-resolution/build boundary remains under controlled review.

---

# 2.2.7.3 — Shared Layer Responsibility

The `shared/` directory is the common code boundary between frontend and backend.

Its purpose is to contain code that is genuinely required or useful on both sides of the application boundary.

Conceptually:

```text
frontend/
     │
     │ imports
     ▼
 shared/
     ▲
     │ imports
     │
backend/
```

Shared code must not depend on:

- React
- React DOM
- Browser DOM APIs
- Vite runtime APIs
- Node.js runtime APIs
- Server framework APIs
- Filesystem-specific backend implementation
- Browser-specific UI implementation

The shared layer should remain portable.

---

# 2.2.7.4 — Shared Contracts

Shared contracts define structures that must remain consistent between frontend and backend.

Potential contract categories include:

```text
Shared
│
├── API request contracts
├── API response contracts
├── Common identifiers
├── Common data structures
├── Error contracts
└── Shared domain-independent types
```

The exact notebook-domain contracts should be introduced later when the domain model has been formally established.

This stage establishes the technical boundary rather than implementing the complete application domain.

---

# 2.2.7.5 — What Belongs in `shared/`

Shared code may contain:

- TypeScript interfaces
- Type aliases
- Common object shapes
- API request types
- API response types
- Shared identifiers
- Shared enums where appropriate
- Contract-related utilities that are runtime-independent
- Validation-related definitions where appropriate

The shared layer should contain only genuinely shared concerns.

A type should not be placed in `shared/` merely because it is convenient to import.

---

# 2.2.7.6 — What Does Not Belong in `shared/`

The following should remain outside the shared layer:

### Frontend-specific

- React components
- React hooks
- Browser state management
- DOM manipulation
- CSS
- Vite configuration
- Browser-only utilities

### Backend-specific

- HTTP server startup
- Node.js filesystem operations
- Server middleware
- Database connections
- Authentication implementation
- Backend runtime services
- Server environment configuration

### Application-specific implementation

This stage must not introduce:

- Notebook execution engine
- AST analyzer
- Visualization engine
- Memory simulation engine
- Persistence implementation
- Database implementation
- Authentication system
- Complete API implementation

Those belong to later application stages.

---

# 2.2.7.7 — Shared TypeScript Boundary

The existing shared TypeScript configuration is:

```text
shared/tsconfig.json
```

It extends the root TypeScript configuration.

The shared configuration currently uses:

- ES2022 target inherited from the root configuration
- ES module configuration
- Bundler module resolution
- Strict TypeScript checking
- No direct JavaScript emission

The existing compiler settings must not be changed merely to introduce shared contracts.

This stage should work within the TypeScript architecture already established by Stage 2.2.3.

---

# 2.2.7.8 — Import Direction

The intended dependency direction is:

```text
                 shared/
                ▲      ▲
               /        \
              /          \
       frontend/        backend/
```

Frontend and backend may consume shared contracts.

Shared contracts must not depend on frontend or backend implementation.

Therefore the following relationship is permitted:

```text
frontend → shared
backend  → shared
```

The following relationships are not permitted:

```text
shared → frontend
shared → backend
```

This prevents the shared layer from becoming coupled to either application runtime.

---

# 2.2.7.9 — Frontend Consumption

The frontend should consume shared contracts through a stable import boundary.

The current implementation demonstrates:

```text
frontend/src/App.tsx
        │
        ▼
shared/src/application.ts
```

The frontend currently consumes:

```text
application
```

from the shared source.

The shared layer remains free of React-specific dependencies.

---

# 2.2.7.10 — Backend Consumption

The backend is intended to consume the same shared contract definitions.

Conceptually:

```text
backend/src/
      │
      ▼
shared/src/
```

However, backend consumption is currently **blocked pending completion of 2.2.7.1**.

The backend uses NodeNext/ESM resolution, while the shared source currently uses Bundler resolution.

The project must first establish how the shared source is made available to the backend both during development and after production compilation.

No workaround should be introduced merely to bypass the TypeScript diagnostic.

---

# 2.2.7.11 — Contract Ownership

Shared contracts should have a clear owner.

The contract itself belongs to the shared boundary when both frontend and backend require the same definition.

The existing initial contract is:

```text
shared/src/application.ts
```

which provides:

```text
ApplicationState
application
```

This establishes the first shared ownership boundary without introducing notebook-domain models.

---

# 2.2.7.12 — Avoiding Premature Domain Modeling

This stage is not the complete domain-model stage.

The shared-contract foundation should not attempt to define every future notebook concept.

The following should therefore remain outside the initial implementation:

- Notebook model
- Cell execution model
- AST model
- Scope model
- Runtime state model
- Visualization model
- Analysis result model

These will be introduced when their respective domain boundaries have been formally designed.

The shared layer should initially remain small and intentional.

---

# 2.2.7.13 — Runtime Independence

Shared contracts should be usable by both environments.

The preferred shared layer is therefore TypeScript-source oriented and runtime-independent.

Avoid dependencies that require:

```text
Browser runtime
```

or:

```text
Node.js runtime
```

unless a later architectural decision explicitly requires such shared runtime functionality.

---

# 2.2.7.14 — Module Resolution

Module resolution is currently the primary unresolved technical boundary.

The relevant configurations are:

```text
frontend/tsconfig.json
    module: ESNext
    moduleResolution: Bundler

backend/tsconfig.json
    module: NodeNext
    moduleResolution: NodeNext

shared/tsconfig.json
    module: ESNext
    moduleResolution: Bundler
```

The frontend can consume the shared source using the existing Bundler resolution model.

The backend cannot consume the same relative source using the same extensionless import because NodeNext requires explicit runtime-compatible extensions.

The project must therefore establish a solution that satisfies both development-time and build-time requirements.

Detailed analysis and decision criteria are defined in:

```text
2.2.7.1-shared-module-resolution-build-boundary.md
```

---

# 2.2.7.15 — Package Boundary

The project remains a single npm project.

The shared layer does not automatically become an independent npm package.

Therefore:

```text
JavaScript Notebook/
└── package.json
```

remains the root package boundary.

No additional:

```text
shared/package.json
```

should be introduced unless a later architectural decision explicitly requires package isolation.

---

# 2.2.7.16 — Build Boundary

The shared layer currently uses:

```text
noEmit: true
```

The initial shared TypeScript project is therefore a validation boundary rather than an independent production build.

However, the backend production build currently uses:

```text
rootDir: ./src
outDir: ./dist
include: ["src/**/*.ts"]
```

This means the current backend build does not automatically emit the shared source.

Consequently, the backend/shared production runtime relationship cannot yet be considered complete.

This is one of the primary issues that **2.2.7.1** must resolve.

---

# 2.2.7.17 — Root Typecheck Integration

The existing root command architecture includes:

```text
npm run typecheck:shared
```

The shared contract implementation must remain compatible with the existing root typecheck workflow.

The intended relationship is:

```text
npm run typecheck
        │
        ├── typecheck:frontend
        ├── typecheck:backend
        └── typecheck:shared
```

After the module-resolution boundary is resolved, actual TypeScript errors must propagate through the relevant checks.

---

# 2.2.7.18 — Validation Requirements

The shared-contract implementation must be verified at multiple levels.

### Shared TypeScript Validation

```text
npm run typecheck:shared
```

### Frontend TypeScript Validation

```text
npm run typecheck:frontend
```

### Backend TypeScript Validation

```text
npm run typecheck:backend
```

### Root Validation

```text
npm run typecheck
```

### Backend Build

```text
npx tsc --project backend/tsconfig.build.json
```

### Formatting Validation

```text
git diff --check
```

All checks must represent actual successful behavior rather than merely suppressing diagnostics.

---

# 2.2.7.19 — Import Boundary Verification

The implementation must verify both permitted dependency directions.

Valid:

```text
frontend → shared
backend  → shared
```

Invalid:

```text
shared → frontend
shared → backend
```

The shared implementation must not accidentally introduce runtime or module dependencies on either application.

---

# 2.2.7.20 — No Circular Dependency Boundary

The shared layer must not participate in circular application dependencies.

The intended dependency graph is:

```text
frontend ──────┐
               ▼
             shared
               ▲
               │
backend ───────┘
```

Not:

```text
frontend → shared → backend
```

or:

```text
backend → shared → frontend
```

This keeps the shared layer reusable and independently understandable.

---

# 2.2.7.21 — Documentation Requirements

The implementation must be accompanied by documentation describing:

- Shared directory responsibility
- Contract ownership
- Import direction
- TypeScript boundary
- Frontend consumption
- Backend consumption
- Module-resolution decisions
- Build-boundary decisions
- Validation commands
- Known limitations

Documentation must describe the actual implementation rather than planned future behavior.

---

# 2.2.7.22 — Implementation Boundary

The implementation may introduce only the minimum shared contract foundation required to establish and verify the boundary.

It must not introduce:

- Complete notebook models
- Notebook execution
- Backend API implementation
- Frontend UI implementation
- Database schemas
- Persistence
- Authentication
- AST analysis
- Visualization
- Runtime services

Those remain outside this toolchain stage.

---

# 2.2.7.23 — Expected Structure

The current conceptual structure is:

```text
shared/
├── tsconfig.json
└── src/
    └── application.ts
```

The existing contract provides:

```text
ApplicationState
application
```

Additional shared source should be introduced only when a concrete shared concern requires it.

---

# 2.2.7.24 — Acceptance Criteria

Stage 2.2.7 is complete when:

- Shared-code responsibility is clearly established.
- Shared contracts have a defined ownership boundary.
- The shared module-resolution strategy is documented and implemented.
- Development-time shared consumption works.
- Backend production-build consumption works.
- Frontend can consume the shared contract boundary.
- Backend can consume the shared contract boundary.
- Shared code does not depend on frontend implementation.
- Shared code does not depend on backend implementation.
- No circular dependency is introduced.
- Existing TypeScript compiler settings remain unchanged unless an explicit architectural decision later requires a change.
- `npm run typecheck:shared` passes.
- `npm run typecheck:frontend` passes.
- `npm run typecheck:backend` passes.
- `npm run typecheck` passes.
- Backend production build passes.
- Documentation reflects the actual implementation.
- No unrelated application functionality is introduced.
- Git validation passes.
- Changes are committed as a dedicated checkpoint.

---

# 2.2.7.25 — Controlled Implementation Sequence

The revised implementation sequence is:

```text
2.2.7
Shared Contracts Configuration
        │
        ▼
2.2.7.1
Shared Module Resolution & Build Boundary
        │
        ▼
Resolve development/build module boundary
        │
        ▼
Verify selected architecture
        │
        ▼
2.2.7.2
Shared Contract Implementation
        │
        ▼
2.2.7.3
Frontend / Backend Consumption
        │
        ▼
2.2.7.4
Shared Validation
        │
        ▼
2.2.7.5
Documentation & Checkpoint
```

Each sub-stage must be verified before moving to the next.

---

# Current Status

**2.2.7 — In Progress**

**Current Sub-stage:**

**2.2.7.1 — Shared Module Resolution & Build Boundary**

The first shared source contract has been created:

```text
shared/src/application.ts
```

Frontend consumption has been established.

Backend consumption exposed a NodeNext/ESM module-resolution and build-boundary issue.

That issue is now explicitly isolated into sub-stage **2.2.7.1**.

---

# Next Controlled Action

Complete:

**2.2.7.1 — Shared Module Resolution & Build Boundary**

The immediate objective is to establish a technically correct and verifiable mechanism for:

```text
frontend → shared
backend  → shared
```

during both development and production build scenarios.

No additional shared contracts should be introduced until this boundary has been resolved.

No notebook-domain implementation should be introduced during this sub-stage.

---

# Stage Sequence

```text
2.2.6
Backend Configuration
        │
        ▼
2.2.7
Shared Contracts Configuration
        │
        ├── 2.2.7.1
        │   Shared Module Resolution & Build Boundary
        │
        ├── 2.2.7.2
        │   Shared Contract Implementation
        │
        ├── 2.2.7.3
        │   Frontend / Backend Consumption
        │
        ├── 2.2.7.4
        │   Shared Validation
        │
        └── 2.2.7.5
            Documentation & Checkpoint
        │
        ▼
2.2.8
ESLint + Prettier
```