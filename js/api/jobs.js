// Fetches the list of job listing IDs from the HackerNews API

import { fetchJSON } from './client.js';

// Returns up to 200 IDs of the latest job listings
export function getJobStories() {
  return fetchJSON('/jobstories');
}
