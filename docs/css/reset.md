# reset.css — Structure Overview

Removes inconsistent default styles applied by different browsers, so the app looks the same everywhere.

## What it does

Sets a predictable baseline: zero margins, zero padding, consistent box model, and sensible defaults for common elements.

## Key rules

| Rule | Why |
|------|-----|
| `box-sizing: border-box` | Padding and border are included in element width — easier to lay out |
| `margin: 0; padding: 0` | Removes browser defaults that vary between Chrome, Firefox and Safari |
| `list-style: none` | Removes bullet points from `<ul>` and `<ol>` |
| `font: inherit` on inputs | Form elements inherit the page font instead of using the browser default |
| `scroll-behavior: smooth` | Smooth scrolling when navigating to anchors |

## Load order

Must be the **first** CSS file loaded so that subsequent files build on a clean base.
