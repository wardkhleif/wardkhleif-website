import { animate } from 'motion';

/* Cursor-driven flourishes layered on top of the scroll-reveal system in
   BaseLayout. Both gate on the same conditions: no reduced-motion, and a
   pointer precise enough for hover to mean something. */
const canAnimate = () =>
  !matchMedia('(prefers-reduced-motion: reduce)').matches &&
  matchMedia('(hover: hover) and (pointer: fine)').matches;

const SPRING = { type: 'spring', stiffness: 300, damping: 20, mass: 0.4 } as const;
const SPRING_BACK = { type: 'spring', stiffness: 260, damping: 18 } as const;
const TILT_SPRING = { type: 'spring', stiffness: 220, damping: 24, mass: 0.5 } as const;

/** Pulls an element a fraction of the way toward the cursor, spring-back on leave. */
function bindMagnetic(el: HTMLElement) {
  if (el.dataset.magneticBound) return;
  el.dataset.magneticBound = '1';

  const strength = Number(el.dataset.magneticStrength) || 0.25;
  let rect = el.getBoundingClientRect();

  el.addEventListener('pointerenter', () => {
    rect = el.getBoundingClientRect();
  });

  el.addEventListener('pointermove', (e) => {
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    animate(el, { x: relX * strength, y: relY * strength }, SPRING);
  });

  el.addEventListener('pointerleave', () => {
    animate(el, { x: 0, y: 0 }, SPRING_BACK);
  });
}

/** Tracks the pointer inside a panel and drives a CSS radial-glow via custom properties. */
function bindSpotlight(el: HTMLElement) {
  if (el.dataset.spotlightBound) return;
  el.dataset.spotlightBound = '1';

  el.addEventListener('pointermove', (e) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--spot-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  });

  el.addEventListener('pointerenter', () => el.classList.add('is-active'));
  el.addEventListener('pointerleave', () => el.classList.remove('is-active'));
}

/** Tilts a panel in 3D toward the cursor via CSS vars, spring-settles flat on leave. */
function bindTilt(el: HTMLElement) {
  if (el.dataset.tiltBound) return;
  el.dataset.tiltBound = '1';

  const max = Number(el.dataset.tiltStrength) || 7;
  let rect = el.getBoundingClientRect();

  el.addEventListener('pointerenter', () => {
    rect = el.getBoundingClientRect();
  });

  el.addEventListener('pointermove', (e) => {
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    animate(
      el,
      {
        '--tilt-rx': `${((0.5 - py) * max * 2).toFixed(2)}deg`,
        '--tilt-ry': `${((px - 0.5) * max * 2).toFixed(2)}deg`,
      } as Record<string, string>,
      TILT_SPRING
    );
  });

  el.addEventListener('pointerleave', () => {
    animate(el, { '--tilt-rx': '0deg', '--tilt-ry': '0deg' } as Record<string, string>, SPRING_BACK);
  });
}

export function initInteractions() {
  if (!canAnimate()) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(bindMagnetic);
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach(bindSpotlight);
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(bindTilt);
}
