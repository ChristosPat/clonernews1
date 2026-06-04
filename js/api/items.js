// Fetches individual items (posts, comments) from the HackerNews API

import { fetchJSON } from './client.js';

// Fetches a single item by its ID
// Example: getItem(8863) → returns a story object
export function getItem(id) {
  return fetchJSON(`/item/${id}`);
}

// Fetches multiple items at once given an array of IDs
// Example: getItems([8863, 8864]) → returns an array of item objects
export function getItems(ids) {
  return Promise.all(ids.map(getItem));
}
