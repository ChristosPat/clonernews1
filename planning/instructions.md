# ClonerNews — Project Instructions

## Objectives

Technology is a rapidly evolving sector. As a programmer, it is not always easy to keep up to date with every new advancement.

Tech news (like **Hacker News**) is a great way to stay informed about the exponential evolution of technology, tech jobs, and much more. However, some websites don't offer a very appealing experience for consuming their media.

**Your objective** is to create a UI for the [HackerNews API](https://github.com/HackerNews/API).

---

## Requirements

### Posts

You must handle at least the following post types:

| Type | Description |
|------|-------------|
| **Stories** | Regular news/tech articles |
| **Jobs** | Job listings from companies |
| **Polls** | Community polls with options |

### Comments

- Each comment must display its **proper parent post**
- Posts and comments must be ordered **newest to oldest**

### Lazy Loading

> You must **not** load all posts at once.

Only load more posts when the user needs to see them. This can be achieved using **scroll events** or a **"Load More" button**.

### Live Data

The goal of the project is to keep users **up to date in real time**.

- Create a section that shows the **newest information**
- Notify the user **at least every 5 seconds** whenever live data is updated

---

## API Usage — Best Practices

The HackerNews API currently has no rate limit, but that does **not** mean you should abuse it.

To avoid overloading the API:

- **Optimize your requests** — eliminate any unnecessary API calls
- **Use throttling or debouncing** — regulate how often requests are made

---

## Optional

Implement **nested comments** (sub-comments) for stories, jobs, and polls to create a threaded discussion experience.
