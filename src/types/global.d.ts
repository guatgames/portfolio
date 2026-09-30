/// <reference types="astro/client" />

/**
 * Globals published by the site's inline scripts. Declared here so component
 * scripts can reach them without casts.
 */
declare global {
  interface Window {
    /**
     * Starts in-view playback for muted reels inside a subtree. The readers
     * call this after cloning a hero video out of a hidden template, since
     * anything created after page load misses the initial observer pass.
     */
    observeAutoplayMedia?: (root?: ParentNode) => void;
  }
}

export {};
