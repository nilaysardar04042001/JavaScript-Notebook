# 2.2.4 — Development Scripts & Project Commands

## Purpose

Stage 2.2.4 establishes the root-level development command interface for the JavaScript Notebook full-stack repository.

The objective is to provide a predictable command structure for developers while maintaining clear boundaries between:

* Frontend
* Backend
* Shared code
* Root-level orchestration

## Architecture

```text
JavaScript Notebook
│
├── frontend/
│   └── React + Vite application
│
├── backend/
│   └── Server-side application
│
├── shared/
│   └── Shared code and contracts
│
└── package.json
    └── Root development commands
```

The root `package.json` acts as the project command/orchestration layer.

It does not replace the responsibilities of the frontend, backend, or shared directories.

---

## Stage Structure

### 2.2.4.1 — Development Script & Command Strategy

Define:

* Command categories
* Naming conventions
* Root command responsibilities
* Frontend command responsibilities
* Backend command responsibilities
* Shared validation responsibilities
* Current versus future commands
* Command dependency relationships

### 2.2.4.2 — Root Development Commands

Implement the commands that are valid for the current repository state.

### 2.2.4.3 — Frontend Commands

Establish frontend-specific commands after the React + Vite configuration is available.

### 2.2.4.4 — Backend Commands

Establish backend-specific commands after backend runtime configuration is available.

### 2.2.4.5 — Typecheck / Validation Commands

Establish coordinated type-checking and validation commands.

### 2.2.4.6 — Full-Stack Development Commands

Establish coordinated frontend/backend development execution.

### 2.2.4.7 — Command Verification

Verify every implemented command.

### 2.2.4.8 — Documentation & Checkpoint

Document the final command interface and create the Git checkpoint.

---

## Current Status

| Stage                                | Status      |
| ------------------------------------ | ----------- |
| 2.2.4.1 — Command Strategy           | ✅ Completed |
| 2.2.4.2 — Root Development Commands  | ✅ Completed |
| 2.2.4.3 — Frontend Commands          | ✅ Completed |
| 2.2.4.4 — Backend Commands           | ✅ Completed |
| 2.2.4.5 — Typecheck / Validation     | ✅ Completed |
| 2.2.4.6 — Full-Stack Commands        | ✅ Completed |
| 2.2.4.7 — Verification               | ✅ Completed |
| 2.2.4.8 — Documentation & Checkpoint | ✅ Completed |

---

## Important Rule

A command must not be added merely because it is planned.

A command may be implemented only when the underlying capability required by that command exists and has been verified.

For example, a testing command should not be added before the testing toolchain exists.

Similarly, frontend development commands that depend on a Vite application should be established after the React + Vite configuration stage.

---

## Next Stage

**2.2.4.1 — Development Script & Command Strategy**
