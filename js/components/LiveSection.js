// Renders the live updates section
// Polls the API every 5 seconds and notifies the user when new content is available

import { getMaxItem } from '../api/live.js';
import { getItems } from '../api/items.js';
import { timeAgo } from '../utils/time.js';
import { throttle } from '../utils/throttle.js';

const POLL_INTERVAL = 5000;

let knownMaxItem = 0;      // the last maxitem we saw
let lastUpdated = null;    // timestamp of the last successful update

const section = document.getElementById('live-section');
const list = document.getElementById('live-list');
const statusEl = document.getElementById('live-status');

// Checks for new items and updates the live section if any are found
async function checkForUpdates() {
  const currentMax = await getMaxItem();

  if (knownMaxItem === 0) {
    // First run — just store the current max, don't show anything yet
    knownMaxItem = currentMax;
    return;
  }

  if (currentMax > knownMaxItem) {
    // New items have been posted — fetch them
    const newIds = [];
    for (let id = knownMaxItem + 1; id <= currentMax; id++) {
      newIds.push(id);
    }

    // Limit to the 10 most recent to avoid large requests
    const limited = newIds.slice(-10);
    const newItems = await getItems(limited);

    newItems
      .filter(item => item && !item.deleted && !item.dead && item.title)
      .forEach(item => {
        const li = document.createElement('li');
        li.className = 'live-item';
        li.innerHTML = `
          <span class="live-item__title">${item.title ?? item.type}</span>
          <span class="live-item__time">${timeAgo(item.time)}</span>
        `;
        list.prepend(li);
      });

    knownMaxItem = currentMax;
    lastUpdated = Date.now();
  }

  updateStatus();
}

// Updates the "last updated X seconds ago" status line
function updateStatus() {
  if (!lastUpdated) return;
  const seconds = Math.floor((Date.now() - lastUpdated) / 1000);
  statusEl.textContent = seconds < 5
    ? 'Updated just now'
    : `Updated ${seconds} seconds ago`;
}

// Starts the live section — begins polling immediately and every 5 seconds after
export function initLiveSection() {
  const throttledCheck = throttle(checkForUpdates, POLL_INTERVAL);
  throttledCheck();
  setInterval(throttledCheck, POLL_INTERVAL);
  setInterval(updateStatus, 1000);
}
