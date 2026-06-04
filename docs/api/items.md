# items.js — Structure Overview

Fetches individual items (posts, comments, poll options) from the HackerNews API by their ID.

## What it does

Provides two functions: one to fetch a single item, and one to fetch many items at once efficiently.

## Exports

### `getItem(id)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | number | The unique ID of the item to fetch |

**Returns:** a Promise that resolves to a single item object.

### `getItems(ids)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `ids` | number[] | An array of item IDs to fetch |

**Returns:** a Promise that resolves to an array of item objects, in the same order as the input IDs.

## Example

```js
import { getItem, getItems } from './items.js';

const story = await getItem(8863);
// → { id: 8863, type: 'story', title: '...', score: 111, ... }

const items = await getItems([8863, 8864, 8865]);
// → [{ ... }, { ... }, { ... }]
```

## Why `Promise.all`

`getItems()` uses `Promise.all` to fire all requests at the same time rather than one after another. Fetching 20 items in parallel is much faster than fetching them in sequence.
