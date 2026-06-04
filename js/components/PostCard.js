// Renders a single post card (story, job or poll) as an HTML element
// Receives a post object from the API and returns a <li> DOM element

import { timeAgo } from '../utils/time.js';
import { renderComments } from './Comments.js';

// Creates and returns a <li> element representing one post
export function PostCard(post) {
  const li = document.createElement('li');
  li.className = 'post-card';
  li.dataset.id = post.id;

  // Title — linked if the post has a URL, plain text otherwise
  const titleHTML = post.url
    ? `<a href="${post.url}" target="_blank" rel="noopener">${post.title}</a>`
    : `<span>${post.title}</span>`;

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
      <button class="post-card__comments">${comments} comments</button>
    </div>
    <div class="post-card__comments-section"></div>
  `;

  const commentsBtn = li.querySelector('.post-card__comments');
  const commentsSection = li.querySelector('.post-card__comments-section');
  let open = false;

  commentsBtn.addEventListener('click', () => {
    open = !open;
    if (open) {
      renderComments(post, commentsSection);
    } else {
      commentsSection.innerHTML = '';
    }
  });

  return li;
}
