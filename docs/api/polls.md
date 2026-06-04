# polls.js — Structure Overview

Fetches poll IDs and individual poll option data from the HackerNews API.

## What it does

Provides two functions: one to get the list of IDs that may contain polls, and one to fetch a single poll option.

## Exports

### `getPollStories()`

**Returns:** a Promise that resolves to an array of up to 500 IDs from `/topstories`.

> **Note:** HackerNews has no dedicated polls endpoint. Polls appear inside the top stories list and are identified by `type: "poll"` when fetched via `getItem()`.

### `getPollOption(id)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | number | The ID of a poll option (`pollopt`) |

**Returns:** a Promise that resolves to a poll option object containing `text` (the answer) and `score` (votes).

## Example

```js
import { getPollStories, getPollOption } from './polls.js';
import { getItem } from './items.js';

const ids = await getPollStories();
const item = await getItem(ids[0]);

if (item.type === 'poll') {
  const options = await Promise.all(item.parts.map(getPollOption));
  // → [{ text: 'Yes', score: 335 }, { text: 'No', score: 120 }, ...]
}
```
