# Feed.js — Structure Overview

Renders the main post feed and manages lazy loading — posts are loaded 20 at a time, not all at once.

## What it does

Fetches the full list of story IDs on startup, then loads and displays posts in batches of 20. More posts are loaded when the user scrolls near the bottom or clicks the "Load More" button.

## Exports

### `initFeed()`

Initialises the feed. Must be called once on page load.

- Fetches all story IDs from `getNewStories()`
- Loads the first 20 posts
- Sets up the "Load More" button listener
- Sets up the scroll listener (debounced)

**Returns:** a Promise that resolves when the first batch is rendered.

## How lazy loading works

```
allIds = [id1, id2, id3, ..., id500]   ← fetched once on init
offset = 0

First load:  allIds[0..19]   → 20 posts rendered,  offset = 20
Second load: allIds[20..39]  → 20 posts appended,  offset = 40
...and so on until offset >= allIds.length
```

## Required DOM elements

| ID | Description |
|----|-------------|
| `#feed-list` | The `<ul>` element where post cards are appended |
| `#load-more` | The button that triggers the next batch |

## Dependencies

- [`../api/stories.js`](../api/stories.md) — fetches story IDs
- [`../api/items.js`](../api/items.md) — fetches post data by ID
- [`./PostCard.js`](PostCard.md) — renders each post
- [`../utils/debounce.js`](../utils/debounce.md) — throttles the scroll event
