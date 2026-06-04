// Renders a single post card (story, job or poll) as an HTML element
// Receives a post object from the API and returns a <li> DOM element

import { timeAgo } from '../utils/time.js';

// Creates and returns a <li> element representing one post
export function PostCard(post) {
  const li = document.createElement('li');
  li.className = 'post-card';
  li.dataset.id = post.id;

  // Title — linked if the post has a URL, plain text otherwise
  const titleHTML = post.url
    ? `<a href="${post.url}" target="_blank" rel="noopener">${post.title}</a>`
    : `<span>${post.title}</span>`;

  // Number of comments — polls and jobs may not have descendants
  const comments = post.descendants ?? 0;

  li.innerHTML = `
    <div class="post-card__header">
      ${titleHTML}
      <span class="post-card__type">${post.type}</span>
    </div>
    <div class="post-card__meta">
      <span class="post-card__author">by ${post.by}</span>
      <span class="post-card__score">▲ ${post.score ?? 0}</span>
      <span class="post-card__time">${timeAgo(post.time)}</span>
      <span class="post-card__comments">${comments} comments</span>
    </div>
  `;

  return li;
}
