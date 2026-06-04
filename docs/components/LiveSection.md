# LiveSection.js — Structure Overview

Polls the HackerNews API every 5 seconds and displays new content in the live updates section.

## What it does

Compares the current `maxitem` to the last known value. If new items have been posted, fetches them and prepends them to the live list. Updates a status line showing when the last check happened.

## Exports

### `initLiveSection()`

Starts the live section. Must be called once on page load.

- Immediately checks for new content
- Repeats every 5 seconds via `setInterval`
- Updates the status line every second

**Returns:** nothing.

## How new content is detected

```
First run:  store current maxitem (e.g. 42000)

5s later:   fetch maxitem again → 42003
            42003 > 42000 → 3 new items!
            fetch items [42001, 42002, 42003]
            prepend them to the live list
            update knownMaxItem = 42003
```

## Required DOM elements

| ID | Description |
|----|-------------|
| `#live-section` | The container element for the whole section |
| `#live-list` | The `<ul>` where new items are prepended |
| `#live-status` | The element showing "Updated X seconds ago" |

## Dependencies

- [`../api/live.js`](../api/live.md) — fetches `maxitem`
- [`../api/items.js`](../api/items.md) — fetches new item data
- [`../utils/time.js`](../utils/time.md) — formats timestamps
- [`../utils/throttle.js`](../utils/throttle.md) — prevents excessive API calls
