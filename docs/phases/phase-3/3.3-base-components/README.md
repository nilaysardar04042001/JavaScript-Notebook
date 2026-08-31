# 3.3 — Base Components

## Status

**Overall:** Not Started

## Objective

Create the reusable UI primitive components that form the building blocks for all higher-level application UI.

Base components are designed to be simple, focused, and reusable. They enforce the design system and provide consistent behavior and styling across the application.

---

## Scope

### Core Components

#### Input Components
- **Button** - Primary, secondary, danger, and ghost variants
- **Icon Button** - Button with icon, no text label
- **Input** - Text input with states (default, focus, error, disabled)
- **Select** - Dropdown selection from predefined options
- **Dropdown** - Dropdown menu for actions
- **Tooltip** - Contextual help text on hover

#### Container Components
- **Modal** - Dialog overlay for important interactions
- **Context Menu** - Right-click menu for actions
- **Toolbar** - Horizontal bar of grouped actions

#### Layout Components
- **Tabs** - Tabbed interface for organizing content
- **Scroll Area** - Scrollable content container with custom scrollbar styling

#### Advanced Components
- **Resizer** - Draggable resize handle between content areas
- **Splitter** - Panel divider with drag-to-resize capability

---

## Component Standards

### Each component must include:

1. **Accessibility**
   - ARIA attributes
   - Keyboard navigation support
   - Focus management
   - Screen reader compatibility

2. **States**
   - Default
   - Hover
   - Focus
   - Active
   - Disabled
   - Error/Warning
   - Loading (where applicable)

3. **Variants**
   - Size variations (small, medium, large)
   - Style variations (primary, secondary, ghost, etc.)
   - Theme support (light/dark)

4. **Props Interface**
   - TypeScript types
   - Clear, documented props
   - Sensible defaults

5. **Testing**
   - Unit tests for behavior
   - Accessibility tests
   - Visual regression tests

6. **Documentation**
   - Usage examples
   - Props documentation
   - Accessibility notes

---

## Acceptance Criteria

3.3 is complete when:

- All listed components are implemented
- Each component has TypeScript types
- Each component is themable using design tokens
- All components support keyboard navigation
- All components meet WCAG AA accessibility standards
- Each component has comprehensive unit tests
- Component stories/examples are documented
- All components follow consistent naming and API conventions
- Resizer and Splitter primitives are verified for reusability in Phase 4
- No Phase 4 workspace-engine functionality is prematurely included
- Documentation is complete
- Git checkpoint is created

---

## Architectural Boundary

**Phase 3 Focus:** Reusable UI primitives with isolated, focused functionality.

**Phase 4 Focus:** Workspace layout, panel management, and responsive behavior that uses these primitives.

This boundary prevents duplication and keeps concerns separated:
- Components don't know about the workspace layout
- Workspace layout composes components into the notebook UI

---

## Documentation Structure

Detailed stage definitions will be added as this sub-phase progresses.

```text
3.3-base-components/
│
├── README.md (this file)
│
├── components/ (implementation in source tree)
│   ├── Button/
│   ├── IconButton/
│   ├── Input/
│   ├── Select/
│   ├── Dropdown/
│   ├── Tooltip/
│   ├── Modal/
│   ├── ContextMenu/
│   ├── Toolbar/
│   ├── Tabs/
│   ├── ScrollArea/
│   ├── Resizer/
│   └── Splitter/
│
└── (Stage documentation files to be added)
    ├── 3.3.1-component-planning/
    │   └── README.md
    │
    ├── 3.3.2-component-implementation/
    │   └── README.md
    │
    └── 3.3.3-component-validation/
        └── README.md
```

---

## Dependency

3.3 — Base Components depends on:

- **3.1 — Design Tokens**
  - Uses token values for styling
  - Maintains consistent visual language

- **3.2 — Theme**
  - Consumes theme system
  - Supports theme switching

3.3 — Base Components provides foundation for:

- **3.4 — Interaction System**
  - Interaction patterns rely on component behavior
  
- **Phase 4 — Responsive & Resizable Workspace Engine**
  - Workspace layout uses these components
  - Resizer and Splitter are composed into workspace

---

## Next Steps

1. Define component specifications and APIs
2. Plan component implementation strategy
3. Create component hierarchy
4. Begin implementation with high-priority components
5. Establish component testing patterns
