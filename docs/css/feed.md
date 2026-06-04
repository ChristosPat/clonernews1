# feed.css — Structure Overview

Styles the main post feed list and the "Load More" button.

## What it does

Lays out the feed as a vertical list of cards with consistent spacing, and styles the button that triggers loading the next batch of posts.

## Elements styled

| Selector | Description |
|----------|-------------|
| `#feed-list` | Flex column container for all post cards |
| `#load-more` | Full-width button at the bottom of the feed |

## Load More button states

| State | Appearance |
|-------|------------|
| Default | Light border, muted text |
| Hover | Slightly darker background, darker text |
| Hidden (JS) | `display: none` set by `Feed.js` when no more posts |
