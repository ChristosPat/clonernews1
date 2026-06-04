// Base URL for all HackerNews API requests
const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

// Fetches a JSON response from the given API endpoint
// Example: fetchJSON('/item/123') → returns the item object
export async function fetchJSON(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
  }
  return response.json();
}
