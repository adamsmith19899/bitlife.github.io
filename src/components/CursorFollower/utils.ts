export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}