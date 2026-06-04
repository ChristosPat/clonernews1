# Comments.js — Structure Overview

Fetches and renders all comments for a given post, ordered newest to oldest.

## What it does

Given a post and a container element, fetches all top-level comments from the API, sorts them by time, and renders them into the container. Nested replies are handled by `Comment.js`.

## Exports

### `renderComments(post, container)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `post` | object | The full post object (must include a `kids` array) |
| `container` | HTMLElement | The DOM element where comments will be rendered |

**Returns:** a Promise that resolves when all comments are rendered.

## States

| State | What the user sees |
|-------|--------------------|
| Loading | "Loading comments..." |
| No comments | "No comments yet." |
| Loaded | Sorted list of comments |

## How it works

1. Shows a loading message immediately
2. Fetches all top-level comment IDs from `post.kids` using `getItems()`
3. Sorts them newest to oldest (`b.time - a.time`)
4. Renders each one using `Comment()` and appends to a `<ul>`

## Dependencies

- [`../api/items.js`](../api/items.md) — fetches comment data by ID
- [`./Comment.js`](Comment.md) — renders each individual comment
