# stories.js — Structure Overview

Fetches lists of story IDs from the HackerNews API. These IDs are then passed to `items.js` to load the actual post data.

## What it does

Provides three functions to retrieve different ranked lists of story IDs.

## Exports

### `getNewStories()`

**Returns:** a Promise that resolves to an array of up to 500 IDs, ordered by newest first.

### `getTopStories()`

**Returns:** a Promise that resolves to an array of up to 500 IDs, ordered by current rank (score + recency).

### `getBestStories()`

**Returns:** a Promise that resolves to an array of up to 500 IDs, ordered by all-time score.

## Example

```js
import { getNewStories } from './stories.js';
import { getItems } from './items.js';

const ids = await getNewStories();
// → [9129911, 9129199, 9127761, ...]  (up to 500 IDs)

const first20 = await getItems(ids.slice(0, 20));
// → the 20 newest stories as full objects
```

## Important

These functions return **only IDs**, not the full post data. The lazy loading logic in `Feed.js` slices this list and calls `getItems()` to load 20 posts at a time.
