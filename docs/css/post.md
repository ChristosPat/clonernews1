# post.css — Structure Overview

Styles individual post cards displayed in the feed.

## What it does

Gives each post card a clean white card appearance with a border that highlights in orange on hover. Lays out the title, type badge, and meta information.

## Elements styled

| Selector | Description |
|----------|-------------|
| `.post-card` | The card container — white background, rounded border |
| `.post-card__header` | Title and type badge row |
| `.post-card__type` | Small badge showing `story`, `job` or `poll` |
| `.post-card__meta` | Row with author, score, time and comment count |
| `.post-card__score` | Score value highlighted in orange |

## States

| State | Appearance |
|-------|------------|
| Default | White card, light grey border |
| Hover | Border turns orange (`--color-primary`) |
| Title link hover | Text turns orange |
