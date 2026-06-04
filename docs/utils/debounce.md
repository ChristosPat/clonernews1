# debounce.js — Structure Overview

Delays a function call until the user has stopped triggering it for a set amount of time.

## What it does

Wraps a function so that it only runs after a period of inactivity. Every new trigger resets the timer.

## Exports

### `debounce(fn, delay)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `fn` | function | The function to debounce |
| `delay` | number | Time in milliseconds to wait after the last trigger |

**Returns:** a new function that behaves like `fn` but waits for inactivity before running.

## Example

```js
import { debounce } from './debounce.js';

const handleScroll = debounce(() => loadMorePosts(), 200);

// handleScroll is called on every scroll event,
// but loadMorePosts() only runs 200ms after the user stops scrolling
window.addEventListener('scroll', handleScroll);
```

## Analogy

Like a Google search suggestion — it waits until you stop typing before it searches. If you type a new letter, the timer resets.

## Difference from throttle

| | Debounce | Throttle |
|---|---|---|
| Runs | only after activity stops | immediately, then waits |
| Best for | scroll and input events | live API polling |
