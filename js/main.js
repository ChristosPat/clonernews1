// Entry point — initialises the feed and live section
import { initFeed } from './components/Feed.js';
import { initLiveSection } from './components/LiveSection.js';
import { getNewStories } from './api/stories.js';
import { getJobStories } from './api/jobs.js';
import { getPollStories } from './api/polls.js';

const tabs = document.querySelectorAll('.feed-tabs__btn');

const tabConfig = {
  stories: { fetchFn: getNewStories, filter: 'story' },
  jobs:    { fetchFn: getJobStories,  filter: 'job'   },
  polls:   { fetchFn: getPollStories, filter: 'poll'  },
};

function activateTab(tabName) {
  tabs.forEach(btn => btn.classList.toggle('feed-tabs__btn--active', btn.dataset.tab === tabName));
  const { fetchFn, filter } = tabConfig[tabName];
  initFeed(fetchFn, filter);
}

tabs.forEach(btn => {
  btn.addEventListener('click', () => activateTab(btn.dataset.tab));
});

// Start with Stories
activateTab('stories');
initLiveSection();
