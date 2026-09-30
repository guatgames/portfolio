/**
 * Shared helpers for gallery media so every surface (project reader, blog
 * reader, standalone post page) labels, counts and serialises media the
 * same way.
 */

export interface MediaItem {
  src: string;
  type?: 'image' | 'video';
  alt?: string;
  caption?: string;
  /** Still shown before a video decodes, so a frame never looks bare. */
  poster?: string;
}

const VIDEO_EXTENSIONS = /\.(mp4|webm|ogv|mov|m4v)(\?|#|$)/i;

/** Falls back to the file extension when the content file omits `type`. */
export function mediaKind(item: MediaItem): 'image' | 'video' {
  if (item.type) return item.type;
  return VIDEO_EXTENSIONS.test(item.src) ? 'video' : 'image';
}

export function isVideo(item: MediaItem): boolean {
  return mediaKind(item) === 'video';
}

/** Resolved list in the shape the lightbox expects, minus empty sources. */
export function normalizeMedia(items: MediaItem[] | undefined): MediaItem[] {
  return (items ?? []).filter((item) => Boolean(item?.src));
}

/**
 * Folds a piece's cover media into its gallery so a detail view shows one
 * media surface instead of two. The reel leads when there is one — it is the
 * strongest thing in the set — then the cover still, then the gallery in
 * order. A cover already present in the gallery is dropped rather than
 * repeated, which is the common case since authors list it first.
 */
export function withCoverMedia(
  gallery: MediaItem[] | undefined,
  cover: { image?: string; video?: string; alt?: string }
): MediaItem[] {
  const items = normalizeMedia(gallery);
  const seen = new Set(items.map((item) => item.src));
  const lead: MediaItem[] = [];

  if (cover.video) {
    lead.push({ src: cover.video, type: 'video', alt: cover.alt, poster: cover.image });
    // With a reel leading, a lone cover still adds nothing but a repeat.
    seen.add(cover.image ?? '');
  } else if (cover.image && !seen.has(cover.image)) {
    lead.push({ src: cover.image, type: 'image', alt: cover.alt });
    seen.add(cover.image);
  }

  return [...lead, ...items];
}

export interface MediaCounts {
  total: number;
  images: number;
  videos: number;
}

export function countMedia(items: MediaItem[]): MediaCounts {
  const normalized = normalizeMedia(items);
  const videos = normalized.filter(isVideo).length;
  return { total: normalized.length, images: normalized.length - videos, videos };
}

/**
 * Serialises items for the `data-lightbox-items` attribute. Alt text and
 * captions stay in the payload because the lightbox rebuilds its own figure
 * from cloned markup that may live in a hidden locale template.
 *
 * `context` names the set ("Spotinder") so the viewer can label itself
 * without having to re-resolve which gallery a frame belonged to.
 */
export function serializeMedia(items: MediaItem[], context?: string): string {
  return JSON.stringify({
    context: context ?? '',
    items: normalizeMedia(items).map((item) => ({
      src: item.src,
      type: mediaKind(item),
      alt: item.alt ?? '',
      caption: item.caption ?? '',
    })),
  });
}

/** "5 photos · 1 video" — localised through the passed-in labels. */
export function describeCounts(counts: MediaCounts, labels: { image: string; video: string }): string {
  const parts: string[] = [];
  if (counts.images > 0) parts.push(`${counts.images} ${labels.image}`);
  if (counts.videos > 0) parts.push(`${counts.videos} ${labels.video}`);
  return parts.join(' · ');
}
