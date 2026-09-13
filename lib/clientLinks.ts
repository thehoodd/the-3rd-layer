'use client';

/**
 * Dynamically resolves store URL for Alburaq:
 * - Android: Google Play Store
 * - iOS / desktop / browser: Apple App Store
 */
export function getAlburaqLink(): string {
  if (typeof window === 'undefined') {
    return 'https://apps.apple.com/us/app/al-buraq/';
  }

  const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';

  if (/android/i.test(ua)) {
    return 'https://play.google.com/store/apps/details?id=io.alburaq.app';
  }

  return 'https://apps.apple.com/us/app/al-buraq/';
}
