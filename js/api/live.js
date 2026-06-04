// Fetches live data endpoints used for detecting new and updated content

import { fetchJSON } from './client.js';

// Returns the ID of the most recently created item on HackerNews
// Used to detect when new content has been posted since our last check
export function getMaxItem() {
  return fetchJSON('/maxitem');
}

// Returns an object with two arrays: recently changed items and profiles
// Shape: { items: [id, ...], profiles: [username, ...] }
export function getUpdates() {
  return fetchJSON('/updates');
}
