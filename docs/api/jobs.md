# jobs.js — Structure Overview

Fetches the list of job listing IDs from the HackerNews API.

## What it does

Provides one function to retrieve the latest job listing IDs.

## Exports

### `getJobStories()`

**Returns:** a Promise that resolves to an array of up to 200 IDs of the latest job listings.

## Example

```js
import { getJobStories } from './jobs.js';
import { getItems } from './items.js';

const ids = await getJobStories();
// → [192327, 192328, ...]

const first20 = await getItems(ids.slice(0, 20));
// → the 20 latest job listings as full objects
```

## Important

Job listings have `type: "job"` and typically have no `kids` (comments). They may have a `url` or just a `text` body.
