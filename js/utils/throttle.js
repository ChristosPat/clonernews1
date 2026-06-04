// Throttle limits how often a function can be called
// No matter how many times it's triggered, it runs at most once per interval
// Example: throttle(fetchUpdates, 5000) → runs fetchUpdates at most every 5 seconds

export function throttle(fn, interval) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn(...args);
    }
  };
}
