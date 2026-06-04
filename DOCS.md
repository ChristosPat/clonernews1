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
