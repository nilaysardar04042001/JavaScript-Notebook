# Toolchain Decisions

## Status

**Planning Baseline**

## Purpose

Record the rationale for foundational development-tool choices and distinguish selected technologies from decisions that require later architectural work.

## Selected

### Node.js

Used as the development/runtime environment.

### npm

Used as the repository package manager.

### TypeScript

Selected as the primary implementation language because the project contains substantial structured domain, runtime, analysis, persistence, and UI contracts.

### React

Selected for the presentation layer.

### Vite

Selected for local development and production bundling.

## Planned

### Monaco Editor

Planned for notebook coding cells.

### ESLint

Planned for static code-quality checks.

### Prettier

Planned for formatting consistency.

### Vitest

Planned for unit and integration tests.

### React Testing Library

Planned for UI behavior tests.

### Playwright

Planned for end-to-end browser testing.

## Deferred

### AST Parser

The parser must be selected after the analysis architecture defines the required JavaScript syntax coverage and AST representation.

### Execution Engine

The execution mechanism must be selected after runtime isolation, instrumentation, state, output, and security boundaries are defined.

### Visualization Library

The visualization solution must support the project's AST, runtime, data-flow, program-flow, and educational visualization requirements. Selection is therefore deferred.

### PDF Export Technology

The PDF solution must support structured notebook export, code, text, images, outputs, and visualization content. Selection is deferred until export architecture.

## General Rule

A technology decision should be made when its responsibility and architectural boundary are understood.

Avoid adding dependencies merely because they may become useful later.
