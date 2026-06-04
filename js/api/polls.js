// Fetches poll IDs and poll option details from the HackerNews API

import { fetchJSON } from './client.js';

// Returns the IDs of poll items — polls appear in the top stories list
// They are identified by type "poll" when fetched via getItem()
export function getPollStories() {
  return fetchJSON('/topstories');
}

// Returns a single poll option (pollopt) by its ID
// Poll options contain the answer text and vote count
export function getPollOption(id) {
  return fetchJSON(`/item/${id}`);
}
