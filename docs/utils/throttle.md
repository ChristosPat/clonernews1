# throttle.js — Structure Overview

Limits how often a function can be called, no matter how many times it is triggered.

## What it does

Wraps a function so that it runs at most once per given time interval. Extra calls during the interval are silently ignored.

## Exports

### `throttle(fn, interval)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | function | The function to throttle |
| `interval` | number | Minimum time in milliseconds between calls |

**Returns:** a new function that behaves like `fn` but is rate-limited.

## Example

```js
import { throttle } from './throttle.js';

const throttledFetch = throttle(fetchLiveUpdates, 5000);

// Even if called 100 times per second, fetchLiveUpdates runs at most once every 5 seconds
setInterval(throttledFetch, 100);
```

## Analogy

Like an elevator button — pressing it 10 times still only calls the elevator once. The extra presses are ignored until the interval has passed.

## Difference from debounce

| | Throttle | Debounce |
|---|---|---|
| Runs | immediately, then waits | only after activity stops |
| Best for | live API polling | scroll and input events |
