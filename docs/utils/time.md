# time.js — Structure Overview

Converts a Unix timestamp into a human-readable relative time string.

## What it does

Takes a number (seconds since 1 Jan 1970) and returns a string like `"3 hours ago"` or `"just now"`.

## Exports

### `timeAgo(timestamp)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `timestamp` | number | A Unix timestamp in seconds |

**Returns:** a string describing how long ago the timestamp was.

## Examples

```js
import { timeAgo } from './time.js';

timeAgo(1175714200)  // → "17 years ago"
timeAgo(1700000000)  // → "2 hours ago"   (relative to when called)
timeAgo(Date.now() / 1000 - 30)  // → "just now"
```

## How it works

Calculates the difference in seconds between now and the timestamp, then checks from largest to smallest unit (years → months → days → hours → minutes). Returns the first unit that fits. If less than 60 seconds have passed, returns `"just now"`.

## Note on Unix vs JavaScript time

- Unix timestamps are in **seconds**
- `Date.now()` is in **milliseconds**

That's why the code divides `Date.now()` by 1000 before comparing.
