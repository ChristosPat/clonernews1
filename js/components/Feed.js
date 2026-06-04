// Renders the post feed and handles lazy loading
// Fetches 20 posts at a time — more are loaded when the user scrolls to the bottom or clicks "Load More"

import { getNewStories } from '../api/stories.js';
import { getItems } from '../api/items.js';
import { PostCard } from './PostCard.js';
import { debounce } from '../utils/debounce.js';

const BATCH_SIZE = 20;

let allIds = [];    // full list of IDs from the API (up to 500)
let offset = 0;     // how many posts have been loaded so far
let loading = false; // prevents multiple simultaneous loads

const list = document.getElementById('feed-list');
const loadMoreBtn = document.getElementById('load-more');

// Loads the next batch of posts and appends them to the feed
async function loadMore() {
  if (loading || offset >= allIds.length) return;
  loading = true;

  const batch = allIds.slice(offset, offset + BATCH_SIZE);
  const posts = await getItems(batch);

  posts.forEach(post => {
    if (post && !post.deleted && !post.dead) {
      list.appendChild(PostCard(post));
    }
  });

  offset += BATCH_SIZE;
  loading = false;

  // Hide the "Load More" button if there are no more posts
  if (offset >= allIds.length) {
    loadMoreBtn.style.display = 'none';
  }
}

// Initialises the feed — fetches all IDs and loads the first batch
export async function initFeed() {
  allIds = await getNewStories();
  await loadMore();

  // Load more when the user clicks the button
  loadMoreBtn.addEventListener('click', loadMore);

  // Load more when the user scrolls near the bottom of the page
  window.addEventListener('scroll', debounce(() => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
    if (nearBottom) loadMore();
  }, 200));
}
