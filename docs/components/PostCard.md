# PostCard.js — Structure Overview

Renders a single post (story, job or poll) as an HTML list element.

## What it does

Takes a post object from the API and builds a `<li>` element with all the relevant information displayed.

## Exports

### `PostCard(post)`

| Parameter | Type | Description |
|-----------|------|-------------|
| `post` | object | A full post object returned by the HackerNews API |

**Returns:** a `<li>` DOM element ready to be inserted into the feed list.

## What it displays

| Field | Source | Notes |
|-------|--------|-------|
| Title | `post.title` | Linked if `post.url` exists, plain text otherwise |
| Type | `post.type` | `story`, `job` or `poll` |
| Author | `post.by` | Displayed as "by username" |
| Score | `post.score` | Defaults to 0 if missing |
| Time | `post.time` | Converted to "3 hours ago" via `timeAgo()` |
| Comments | `post.descendants` | Defaults to 0 if missing (jobs have no comments) |

## Example

```js
import { PostCard } from './PostCard.js';

const li = PostCard(post);
document.getElementById('feed-list').appendChild(li);
```

## Dependencies

- [`../utils/time.js`](../utils/time.md) — for the relative timestamp
