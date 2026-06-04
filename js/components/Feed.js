// Renders the post feed and handles lazy loading
// Fetches 20 posts at a time — more are loaded when the user scrolls to the bottom or clicks "Load More"

import { getItems } from '../api/items.js';
import { PostCard } from './PostCard.js';
import { debounce } from '../utils/debounce.js';

const BATCH_SIZE = 20;

let allIds = [];
let offset = 0;
let loading = false;
let currentFilter = null;

const list = document.getElementById('feed-list');
const loadMoreBtn = document.getElementById('load-more');

async function loadMore() {
  if (loading || offset >= allIds.length) return;
  loading = true;

  const batch = allIds.slice(offset, offset + BATCH_SIZE);
  const posts = await getItems(batch);

  let added = 0;
  posts.forEach(post => {
    if (post && !post.deleted && !post.dead) {
      if (!currentFilter || post.type === currentFilter) {
        list.appendChild(PostCard(post));
        added++;
      }
    }
  });

  offset += BATCH_SIZE;
  loading = false;

  if (offset >= allIds.length) {
    loadMoreBtn.style.display = 'none';
  } else if (added === 0) {
    // No matching posts in this batch — keep loading
    await loadMore();
  }
}

// Wires up button and scroll once — they always use current state
loadMoreBtn.addEventListener('click', loadMore);
window.addEventListener('scroll', debounce(() => {
  const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
  if (nearBottom) loadMore();
}, 200));

// Resets the feed and loads posts from the given fetchIdsFn
// filterType: 'story' | 'job' | 'poll' | null (show all)
export async function initFeed(fetchIdsFn, filterType = null) {
  allIds = [];
  offset = 0;
  loading = false;
  currentFilter = filterType;
  list.innerHTML = '';
  loadMoreBtn.style.display = '';

  allIds = await fetchIdsFn();
  await loadMore();
}
