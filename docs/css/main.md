# main.css — Structure Overview

Defines the global CSS variables, page layout, typography, and responsive breakpoints used across the whole app.

## What it does

Sets up the design system (colours, spacing, radius) as CSS variables, and defines the two-column page layout that places the feed on the left and the live section on the right.

## Page layout

```
┌─────────────────────────────┬──────────────┐
│                             │              │
│   Post Feed (1fr)           │  Live (280px)│
│                             │              │
└─────────────────────────────┴──────────────┘

On mobile (< 700px): single column, live section moves below feed
```

## CSS Variables

All colours, spacing and sizing are defined here as `:root` variables so that every other CSS file can use them consistently. See [overview.md](overview.md) for the full variable reference.

## Responsive design

At `max-width: 700px`, the grid switches from two columns to one. The live section stacks below the feed on smaller screens.
