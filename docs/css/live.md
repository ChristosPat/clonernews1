# live.css — Structure Overview

Styles the live updates sidebar, including the pulsing indicator and the list of new items.

## What it does

Positions the live section as a sticky sidebar that stays visible while the user scrolls. Adds a pulsing orange dot to indicate the section is active and updating in real time.

## Elements styled

| Selector | Description |
|----------|-------------|
| `#live-section` | Sticky sidebar container |
| `.live-section__header` | Title row with the pulsing dot |
| `.live-section__dot` | Pulsing orange circle — animated with `@keyframes pulse` |
| `#live-status` | "Updated X seconds ago" status line |
| `#live-list` | Flex column list of recent live items |
| `.live-item` | A single live item row with a bottom border |
| `.live-item__title` | Title — truncated with `...` if too long |
| `.live-item__time` | Muted timestamp below the title |

## Sticky behaviour

`position: sticky; top: var(--spacing-md)` keeps the live section anchored near the top of the viewport as the user scrolls through the feed, so it is always visible.

## Pulse animation

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}
```

The dot fades in and out every 1.5 seconds to signal that the section is live.
