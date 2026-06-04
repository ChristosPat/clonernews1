# CSS — Structure Overview

The app uses six CSS files, each responsible for one part of the UI. All files share the CSS variables defined in `main.css`.

## Load order (in index.html)

```
reset.css     ← must be first — clears browser defaults
main.css      ← variables and layout — must come before the rest
feed.css
post.css
comments.css
live.css
```

## Files

| File | Responsibility |
|------|---------------|
| [reset.css](reset.md) | Removes inconsistent default styles across browsers |
| [main.css](main.md) | Global layout, colour variables, typography, responsive grid |
| [feed.css](feed.md) | Post feed list and "Load More" button |
| [post.css](post.md) | Individual post card appearance |
| [comments.css](comments.md) | Comments list and nested reply indentation |
| [live.css](live.md) | Live updates sidebar with pulsing indicator |

## CSS Variables (defined in main.css)

All files use these shared variables instead of hard-coded values:

| Variable | Value | Used for |
|----------|-------|----------|
| `--color-bg` | `#f6f6ef` | Page background (HN beige) |
| `--color-surface` | `#ffffff` | Cards and panels |
| `--color-primary` | `#ff6600` | HackerNews orange — accents, hover, score |
| `--color-text` | `#1a1a1a` | Main text |
| `--color-text-muted` | `#828282` | Secondary text, timestamps |
| `--color-border` | `#e0e0e0` | Borders and dividers |
| `--max-width` | `860px` | Maximum content width |
| `--radius` | `6px` | Border radius on cards |
