// Fetches lists of story IDs from the HackerNews API

import { fetchJSON } from './client.js';

// Returns up to 500 IDs of the newest stories
export function getNewStories() {
  return fetchJSON('/newstories');
}

// Returns up to 500 IDs of the top stories
export function getTopStories() {
  return fetchJSON('/topstories');
}

// Returns up to 500 IDs of the best stories
export function getBestStories() {
  return fetchJSON('/beststories');
}
