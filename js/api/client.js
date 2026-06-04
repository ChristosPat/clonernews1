const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchJSON(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
  }
  return response.json();
}
