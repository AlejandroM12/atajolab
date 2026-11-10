/**
 * Geometry of the AtajoLab "A" mark, traced from the official artwork.
 * Two legs at 60°: the left leg runs over the top, the right leg is split by
 * the crossbar into a darker fold (tucked under the left leg) and a foot.
 * Colors come from CSS variables (see globals.css), so the mark follows the theme.
 */
export const MARK_VIEWBOX = "0 0 110 74";

export const markParts = [
  {
    id: "leg",
    d: "M40.21 3.81A7.5 7.5 0 0 1 46.73 0L64.03 0A8.5 8.5 0 0 1 71.43 4.31L82.72 24.25L59.66 24.25L33.66 70.19A7.5 7.5 0 0 1 27.13 74L7.34 74A4 4 0 0 1 3.86 68.03Z",
    gradient: { x1: 61, y1: 0.75, x2: 13.5, y2: 73.25 },
  },
  {
    id: "fold",
    d: "M73.66 8.25L93.13 42.67A1.25 1.25 0 0 1 92 43.75L63.6 43.75A4 4 0 0 1 60.1 42.75L54.22 33.35L62.21 19.75C65.71 13.25 67.16 7.25 73.66 8.25Z",
    gradient: { x1: 67.25, y1: 9.25, x2: 92.25, y2: 43.75 },
  },
  {
    id: "foot",
    d: "M63.28 49.37A1.25 1.25 0 0 1 64.37 47.5L91.79 47.5A7 7 0 0 1 97.88 51.05L105.8 65.03A4.5 4.5 0 0 1 101.88 71.75L79.74 71.75A6.5 6.5 0 0 1 74.08 68.45Z",
    gradient: { x1: 63.5, y1: 55.5, x2: 107.25, y2: 63 },
  },
] as const;

/** Three stops per part: --logo-{part}-1..3. */
export const MARK_STOPS = [0, 0.5, 1] as const;
