# client.js — Structure Overview

The foundation of all API communication. Every other file in `js/api/` uses this file to talk to the HackerNews API.

## What it does

Provides a single function that handles all HTTP requests to the HackerNews API and returns parsed JSON.

## Exports

### `fetchJSON(endpoint)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `endpoint` | string | The API path to call, e.g. `/item/123` or `/newstories` |

**Returns:** a Promise that resolves to the parsed JSON response.

**Throws:** an Error if the HTTP response is not OK (e.g. 404, 500).

## Example

```js
import { fetchJSON } from './client.js';

const item = await fetchJSON('/item/8863');
// → { id: 8863, type: 'story', title: '...', ... }
```

## Why it exists

All API files share the same base URL and the same fetch logic. Centralising it here means that if the URL ever changes, only this file needs updating.
