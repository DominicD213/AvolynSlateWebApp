export const CAROUSEL_INTERVAL_MS = 2000;

// One pending callback, with no catch-up jumps after a delayed browser task.
export function createCarouselClock(advance, {
  setTimer = (callback, delay) => window.setTimeout(callback, delay),
  clearTimer = timer => window.clearTimeout(timer),
} = {}) {
  let running = false;
  let timer = null;
  let generation = 0;

  function cancel() {
    generation += 1;
    if (timer !== null) clearTimer(timer);
    timer = null;
  }
  function schedule() {
    const scheduledGeneration = generation;
    timer = setTimer(() => {
      if (!running || scheduledGeneration !== generation) return;
      timer = null;
      advance();
      if (running && scheduledGeneration === generation) schedule();
    }, CAROUSEL_INTERVAL_MS);
  }
  return {
    start() {
      if (running) return;
      running = true;
      schedule();
    },
    stop() {
      running = false;
      cancel();
    },
    restart() {
      if (!running) return;
      cancel();
      schedule();
    },
  };
}
