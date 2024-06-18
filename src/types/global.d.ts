declare global {
  type TypeVariant = "informative" | "success" | "warning" | "error";

  type TypeAligns = "start" | "center" | "end";

  type TypeSizes = "sm" | "md";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AnyObject = Record<any, any>;
}

export {};
