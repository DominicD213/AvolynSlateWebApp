import test from 'node:test';
import assert from 'node:assert/strict';
import { createCarouselClock, CAROUSEL_INTERVAL_MS } from '../src/carouselClock.js';

function harness() {
  let now = 0;
  let nextId = 0;
  let slide = 0;
  const pending = new Map();
  const changes = [];
  const clock = createCarouselClock(() => {
    slide = (slide + 1) % 4;
    changes.push({ slide, at: now });
  }, {
    setTimer(callback, delay) {
      const id = ++nextId;
      pending.set(id, { callback, due: now + delay });
      return id;
    },
    clearTimer(id) { pending.delete(id); },
  });
  return { clock, pending, changes,
    advanceBy(ms) {
      const end = now + ms;
      while (pending.size) {
        const [id, task] = [...pending].sort((a, b) => a[1].due - b[1].due)[0];
        if (task.due > end) break;
        now = task.due;
        pending.delete(id);
        task.callback();
      }
      now = end;
    },
    stallBy(ms) {
      now += ms;
      // Deliver overdue callbacks once, as after a busy foreground task.
      for (const [id, task] of [...pending]) {
        if (task.due <= now) { pending.delete(id); task.callback(); }
      }
    },
  };
}

test('all four slides appear in order every two seconds through three loops', () => {
  const h = harness();
  assert.equal(CAROUSEL_INTERVAL_MS, 2000);
  h.clock.start();
  h.advanceBy(24000);
  assert.deepEqual(h.changes.map(x => x.slide), [1,2,3,0,1,2,3,0,1,2,3,0]);
  assert.deepEqual(h.changes.map(x => x.at), Array.from({length:12}, (_, i) => (i + 1) * 2000));
  assert.equal(h.pending.size, 1);
});

test('duplicate starts and a stale queued callback cannot create double advances', () => {
  const h = harness();
  h.clock.start(); h.clock.start();
  const stale = [...h.pending.values()][0].callback;
  h.advanceBy(1900);
  h.clock.restart();
  stale();
  assert.equal(h.changes.length, 0);
  assert.equal(h.pending.size, 1);
  h.advanceBy(1999);
  assert.equal(h.changes.length, 0);
  h.advanceBy(1);
  assert.deepEqual(h.changes, [{slide:1,at:3900}]);
});

test('hidden-tab/pause stop and resume gives the next slide a full interval', () => {
  const h = harness();
  h.clock.start(); h.advanceBy(1900);
  const stale = [...h.pending.values()][0].callback;
  h.clock.stop(); h.clock.restart(); stale(); h.advanceBy(10000);
  assert.equal(h.changes.length, 0);
  assert.equal(h.pending.size, 0);
  h.clock.start(); h.advanceBy(1999);
  assert.equal(h.changes.length, 0);
  h.advanceBy(1);
  assert.equal(h.changes.length, 1);
});

test('a delayed browser task advances once and never races through missed slides', () => {
  const h = harness();
  h.clock.start(); h.stallBy(11000);
  assert.deepEqual(h.changes, [{slide:1,at:11000}]);
  h.advanceBy(1999);
  assert.equal(h.changes.length, 1);
  h.advanceBy(1);
  assert.deepEqual(h.changes[1], {slide:2,at:13000});
});
