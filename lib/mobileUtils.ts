'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect whether the current viewport width is below a given breakpoint (default 1024px for lg).
 * Safely defaults to false on SSR to prevent hydration mismatch.
 */
export function useIsMobile(breakpoint = 1024): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}

/**
 * Smoothly positions an accordion item within a comfortable visible area on mobile.
 *
 * Rules:
 * 1. If already comfortably visible, avoids unnecessary scrolling.
 * 2. If above the viewport or behind the sticky header, scrolls up to position below header.
 * 3. If below the viewport, scrolls down just enough to bring the item into view.
 * 4. Waits for any preceding collapsing items to collapse so the item does not shoot upward off-screen.
 */
export function scrollAccordionIntoComfortableArea(
  element: HTMLElement | null,
  options: {
    delayMs?: number;
    headerPadding?: number;
  } = {}
) {
  if (!element || typeof window === 'undefined') return;

  const { delayMs = 180, headerPadding = 16 } = options;

  const performPositioning = () => {
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 70;
    const safeTop = headerHeight + headerPadding;
    const viewportHeight = window.innerHeight;
    const safeBottom = viewportHeight - 120;

    const rect = element.getBoundingClientRect();

    // If item is above safe area or behind header, scroll up to safeTop
    if (rect.top < safeTop) {
      const scrollDiff = rect.top - safeTop;
      window.scrollBy({
        top: scrollDiff,
        behavior: 'smooth',
      });
    }
    // If item is below comfortable threshold, scroll down to place it comfortably below header
    else if (rect.top > safeBottom) {
      const scrollDiff = rect.top - safeTop;
      window.scrollBy({
        top: scrollDiff,
        behavior: 'smooth',
      });
    }
    // Otherwise, item is already comfortably visible; do not force unnecessary scroll
  };

  if (delayMs > 0) {
    setTimeout(performPositioning, delayMs);
  } else {
    requestAnimationFrame(performPositioning);
  }
}
