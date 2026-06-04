// Debounce delays a function call until the user stops triggering it
// The timer resets every time the function is called again
// Example: debounce(onScroll, 200) → runs onScroll only after scrolling stops for 200ms

export function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
