# comments.css — Structure Overview

Styles the comments section beneath a post, including nested replies.

## What it does

Separates the comments area from the post with a top border, and gives each comment a left border that visually signals its nesting level.

## Elements styled

| Selector | Description |
|----------|-------------|
| `.comments` | The whole comments area — separated from post by a top border |
| `.comments__loading` | "Loading comments..." message |
| `.comments__empty` | "No comments yet." message |
| `.comments__list` | Flex column container for top-level comments |
| `.comment` | Individual comment — white card with left border |
| `.comment__meta` | Author name and timestamp row |
| `.comment__author` | Bold author name |
| `.comment__time` | Muted timestamp |
| `.comment__text` | Comment body — allows HTML links from the API |
| `.comment__replies` | Container for nested replies |

## Nesting

The left indentation of nested comments is set **inline by `Comment.js`** (`margin-left: depth * 20px`). The CSS only styles the visual appearance of each comment, not its position.
