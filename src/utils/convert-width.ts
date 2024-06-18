export function convertWidth(
  width: number | string | undefined,
  defaultValue: number = 20
): number {
  if (width === undefined) {
    return defaultValue;
  }
  return typeof width === "string" ? parseFloat(width) : width;
}
