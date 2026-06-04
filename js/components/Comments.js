// Fetches and renders all comments for a given post
// Comments are displayed newest to oldest
// Each comment may have nested replies (handled by Comment.js)

import { getItems } from '../api/items.js';
import { Comment } from './Comment.js';

// Fetches the comments for a post and renders them into the given container element
// post — the full post object (must have a kids array)
// container — the DOM element where the comments will be rendered
export async function renderComments(post, container) {
  container.innerHTML = '<p class="comments__loading">Loading comments...</p>';

  if (!post.kids || post.kids.length === 0) {
    container.innerHTML = '<p class="comments__empty">No comments yet.</p>';
    return;
  }

  // Fetch all top-level comments at once
  const topLevel = await getItems(post.kids);

  // Sort newest to oldest by time
  topLevel.sort((a, b) => b.time - a.time);

  const ul = document.createElement('ul');
  ul.className = 'comments__list';

  topLevel.forEach(comment => {
    const el = Comment(comment, 0);
    if (el) ul.appendChild(el);
  });

  container.innerHTML = '';
  container.appendChild(ul);
}
