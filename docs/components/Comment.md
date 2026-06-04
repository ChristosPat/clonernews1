# Comment.js — Structure Overview

Renders a single comment as an HTML element, including any nested replies.

## What it does

Takes a comment object and builds a `<li>` element. If the comment has replies (`kids`), it renders them recursively at increasing indentation levels.

## Exports

### `Comment(comment, depth)`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `comment` | object | — | A comment object from the HackerNews API |
| `depth` | number | `0` | The nesting level — controls visual indentation |

**Returns:** a `<li>` DOM element, or `null` if the comment is deleted or dead.

## What it displays

| Field | Source | Notes |
|-------|--------|-------|
| Author | `comment.by` | Falls back to `[deleted]` if missing |
| Time | `comment.time` | Converted to "3 hours ago" via `timeAgo()` |
| Text | `comment.text` | Raw HTML from the API |
| Replies | `comment.kids` | Rendered recursively |

## How nesting works

Each level of depth adds 20px of left margin:

```
Comment A  (depth 0 → margin-left: 0px)
    └── Comment B  (depth 1 → margin-left: 20px)
            └── Comment C  (depth 2 → margin-left: 40px)
```

## Dependencies

- [`../utils/time.js`](../utils/time.md) — for the relative timestamp
