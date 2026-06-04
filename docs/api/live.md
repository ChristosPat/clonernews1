# live.js — Structure Overview

Fetches live data endpoints used to detect new and updated content on HackerNews.

## What it does

Provides two functions used by the Live Section to check for new activity every 5 seconds.

## Exports

### `getMaxItem()`

**Returns:** a Promise that resolves to a single number — the ID of the most recently created item on HackerNews.

Used to detect new posts: if the current `maxitem` is greater than the last known value, new content has been posted.

### `getUpdates()`

**Returns:** a Promise that resolves to an object with two arrays:

```js
{
  items:    [8423305, 8420805, ...],  // IDs of recently changed items
  profiles: ['thefox', 'mdda', ...]   // usernames of recently updated profiles
}
```

## Example

```js
import { getMaxItem } from './live.js';

let lastMaxItem = await getMaxItem();

setInterval(async () => {
  const current = await getMaxItem();
  if (current > lastMaxItem) {
    // new items have been posted
    lastMaxItem = current;
  }
}, 5000);
```
