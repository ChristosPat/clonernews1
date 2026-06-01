# PRD — ClonerNews

## 1. Overview

**ClonerNews** is a web application that provides a modern, user-friendly interface for the [HackerNews API](https://github.com/HackerNews/API). The goal is to make tech news more accessible and enjoyable to consume, compared to the original Hacker News website.

---

## 2. Problem Statement

The original Hacker News website has a very basic, outdated UI. Users who want to stay up to date with tech news, jobs, and community discussions deserve a better reading experience — with real-time updates, lazy loading, and a clean interface.

---

## 3. Goals

- Display HackerNews content (stories, jobs, polls, comments) in a clean UI
- Keep users informed of new content in real time (live updates every 5 seconds)
- Load content on demand to avoid overloading the API and the browser
- Respect the API and avoid unnecessary requests

---

## 4. Features

### 4.1 Post Feed

Display a feed of posts from the HackerNews API, supporting the following types:

| Type | Description |
| ---- | ----------- |
| **Story** | A regular news or tech article with a link |
| **Job** | A job listing from a company |
| **Poll** | A community poll with multiple options |

- Posts are ordered **newest to oldest**
- Each post shows: title, author, score, time, and number of comments

### 4.2 Comments

- Each post can be expanded to show its comments
- Comments are linked to their **parent post**
- Comments are ordered **newest to oldest**
- **Optional:** nested/threaded comments (sub-comments) for a full discussion view

### 4.3 Lazy Loading

- The feed does **not** load all posts at once
- More posts are loaded only when the user requests them (scroll event or "Load More" button)
- This keeps the app fast and the API usage minimal

### 4.4 Live Data Section

- A dedicated section displays the **latest/newest content** from the API
- The section auto-refreshes **at least every 5 seconds**
- The user is notified whenever new data arrives

---

## 5. Non-Functional Requirements

| Requirement | Detail |
| ----------- | ------ |
| **Performance** | Minimize API calls — no redundant requests |
| **Throttling** | Use throttle or debounce to regulate request frequency |
| **Responsiveness** | The UI should work on both desktop and mobile |
| **No rate limiting** | The HackerNews API has no rate limit, but it must not be abused |

---

## 6. API Reference

Base URL: `https://hacker-news.firebaseio.com/v0`

| Endpoint | Used for |
| -------- | -------- |
| `/newstories.json` | Fetching the latest story IDs |
| `/topstories.json` | Fetching top story IDs |
| `/jobstories.json` | Fetching job listing IDs |
| `/item/{id}.json` | Fetching a single post or comment |
| `/maxitem.json` | Detecting new content for live updates |
| `/updates.json` | Detecting changed items and profiles |

---

## 7. Out of Scope

- User authentication (login, posting, voting)
- Saving or bookmarking posts
- Search functionality

---

## 8. Optional Enhancements

- Nested (threaded) comments for stories, jobs, and polls
- Filtering posts by type (Stories / Jobs / Polls)
- Dark mode
