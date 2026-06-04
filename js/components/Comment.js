// Renders a single comment as an HTML element
// Supports nested comments (sub-comments) by recursively rendering children with increased indent

import { timeAgo } from '../utils/time.js';

// Creates and returns a <li> element for one comment
// depth controls the visual indentation level for nested replies
export function Comment(comment, depth = 0) {
  if (!comment || comment.deleted || comment.dead) return null;

  const li = document.createElement('li');
  li.className = 'comment';
  li.style.marginLeft = `${depth * 20}px`;

  li.innerHTML = `
    <div class="comment__meta">
      <span class="comment__author">${comment.by ?? '[deleted]'}</span>
      <span class="comment__time">${timeAgo(comment.time)}</span>
    </div>
    <div class="comment__text">${comment.text ?? ''}</div>
    <ul class="comment__replies"></ul>
  `;

  // If this comment has replies, render them recursively at the next depth level
  if (comment.kids && comment.kids.length > 0) {
    const repliesList = li.querySelector('.comment__replies');
    comment.kids.forEach(child => {
      const childEl = Comment(child, depth + 1);
      if (childEl) repliesList.appendChild(childEl);
    });
  }

  return li;
}
