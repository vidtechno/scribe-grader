import { describe, expect, it } from 'vitest';
import { deviceKind, installOfferDue, snoozeInstallOffer } from './pwa';

const ANDROID = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36';
const ANDROID_WEBVIEW = 'Mozilla/5.0 (Linux; Android 14; Pixel 8; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0 Mobile Safari/537.36';
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
const IPHONE_APP = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148';
const MAC = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15';
const WINDOWS = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';

describe('deviceKind', () => {
  it('offers phones and tablets only', () => {
    expect(deviceKind(ANDROID, 'Linux armv8l', 5)).toBe('android');
    expect(deviceKind(IPHONE, 'iPhone', 5)).toBe('ios');
    expect(deviceKind(MAC, 'MacIntel', 5)).toBe('ios'); // iPad that reports itself as a Mac
    expect(deviceKind(MAC, 'MacIntel', 0)).toBeNull();
    expect(deviceKind(WINDOWS, 'Win32', 0)).toBeNull();
  });
  it('stays quiet inside in-app browsers that cannot add to the home screen', () => {
    expect(deviceKind(ANDROID_WEBVIEW, 'Linux armv8l', 5)).toBeNull();
    expect(deviceKind(IPHONE_APP, 'iPhone', 5)).toBeNull();
  });
});

describe('install offer snooze', () => {
  it('asks again after a "later" and stops after the third one', () => {
    localStorage.clear();
    expect(installOfferDue('u1')).toBe(true);
    snoozeInstallOffer('u1');
    expect(installOfferDue('u1')).toBe(false);
    localStorage.setItem('scorify-install-offer:u1', JSON.stringify({ until: Date.now() - 1, count: 1 }));
    expect(installOfferDue('u1')).toBe(true);
    snoozeInstallOffer('u1'); snoozeInstallOffer('u1'); // counts 2 and 3
    expect(installOfferDue('u1')).toBe(false);
  });
});
