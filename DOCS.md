# ClonerNews — Documentation

A complete guide to the project structure, planning documents, and source code files.

---

## Planning

| Document | Description |
|----------|-------------|
| [Instructions](planning/instructions.md) | The original project brief and requirements |
| [PRD](planning/PRD.md) | Product Requirements — what the app must do and why |
| [Architecture](planning/ARCHITECTURE.md) | File structure, data flow, and design rules |
| [Features](planning/FEATURES.md) | Detailed breakdown of each feature |
| [Tasks](planning/TASKS.md) | Work split across the three team members |
| [Audit](planning/audit.md) | Checklist for final review before submission |
| [API Reference](planning/api.md) | Full HackerNews API documentation |

---

## Source Code

### `js/api/` — HackerNews API layer

All communication with the HackerNews API goes through these files.

| File | Description |
|------|-------------|
| [client.js](docs/api/client.md) | Base fetch function used by all other API files |
| [items.js](docs/api/items.md) | Fetch a single item or multiple items by ID |
| [stories.js](docs/api/stories.md) | Fetch lists of new, top and best story IDs |
| [jobs.js](docs/api/jobs.md) | Fetch the list of job listing IDs |
| [polls.js](docs/api/polls.md) | Fetch poll IDs and individual poll options |
| [live.js](docs/api/live.md) | Fetch maxitem and updates for live data detection |

### `js/utils/` — Utilities

General-purpose tools with no knowledge of HackerNews.

| File | Description |
|------|-------------|
| [time.js](docs/utils/time.md) | Convert a Unix timestamp to a relative string like "3 hours ago" |
| [throttle.js](docs/utils/throttle.md) | Limit how often a function can run (used for API polling) |
| [debounce.js](docs/utils/debounce.md) | Delay a function until activity stops (used for scroll events) |

### `js/components/` — UI Components

Each component receives data and returns a DOM element ready to display.

| File | Description |
|------|-------------|
| [PostCard.js](docs/components/PostCard.md) | Renders a single post card (story, job or poll) |
| [Feed.js](docs/components/Feed.md) | Renders the post feed with lazy loading (20 posts at a time) |
| [Comment.js](docs/components/Comment.md) | Renders a single comment with nested replies |
| [Comments.js](docs/components/Comments.md) | Fetches and renders all comments for a post, newest to oldest |
| [LiveSection.js](docs/components/LiveSection.md) | Polls for new content every 5 seconds and updates the live sidebar |

### `css/` — Stylesheets

See [css/overview.md](docs/css/overview.md) for the full variable reference and load order.

| File | Description |
|------|-------------|
| [reset.css](docs/css/reset.md) | Removes inconsistent default styles across browsers |
| [main.css](docs/css/main.md) | Global layout, colour variables, typography and responsive grid |
| [feed.css](docs/css/feed.md) | Post feed list and "Load More" button |
| [post.css](docs/css/post.md) | Individual post card appearance |
| [comments.css](docs/css/comments.md) | Comments list and nested reply styles |
| [live.css](docs/css/live.md) | Live updates sidebar with pulsing indicator |
