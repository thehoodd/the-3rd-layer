'use client';

import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only run on devices with a fine pointer (mouse / precision trackpad)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateFinePointer = (matches: boolean) => {
      setIsFinePointer(matches);

      if (matches) {
        document.documentElement.classList.add('custom-cursor-active');
        document.body.classList.add('custom-cursor-active');
      } else {
        document.documentElement.classList.remove('custom-cursor-active');
        document.body.classList.remove('custom-cursor-active');
      }
    };

    updateFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      updateFinePointer(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    let hasInitialized = false;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!hasInitialized) {
        hasInitialized = true;
        ringPos.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);
      } else if (!isVisible) {
        setIsVisible(true);
      }

      // Zero-latency instant position update for the central dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest(
          'a, button, input, textarea, select, [role="button"], [role="link"], [role="tab"], .cursor-pointer, label, summary, [data-cursor-hover]'
        );
        setIsHovering(!!isClickable);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth physics follower loop for the outer ring
    const render = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      document.documentElement.classList.remove('custom-cursor-active');
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (!isFinePointer) return null;

  // Dot dimensions
  const dotSize = isMouseDown ? 5 : isHovering ? 10 : 7;

  // Ring dimensions & styling
  const ringSize = isMouseDown ? 28 : isHovering ? 54 : 36;
  const ringBorder = isMouseDown
    ? '2px solid #DE3D1C'
    : isHovering
    ? '2px solid #DE3D1C'
    : '1.5px solid rgba(222, 61, 28, 0.75)';
  const ringBg = isMouseDown
    ? 'rgba(222, 61, 28, 0.22)'
    : isHovering
    ? 'rgba(222, 61, 28, 0.1)'
    : 'transparent';

  return (
    <>
      {/* Central High-Precision Orange Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="custom-cursor-dot"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.15s ease, height 0.15s ease, opacity 0.2s ease',
        }}
      />

      {/* Fluid Outer Orange Follower Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="custom-cursor-ring"
        style={{
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          border: ringBorder,
          backgroundColor: ringBg,
          opacity: isVisible ? 1 : 0,
          transition:
            'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), border 0.2s ease, background-color 0.2s ease, opacity 0.2s ease',
        }}
      />
    </>
  );
}