import type { ComponentType, MouseEventHandler, SVGAttributes } from "react";

declare global {
  type TypeVariant =
    | "dark"
    | "light"
    | "informative"
    | "success"
    | "warning"
    | "error";

  type TypeAligns = "start" | "center" | "end";

  type TypeSizes = "sm" | "md" | "lg";

  type ArrowStyles = {
    container?: string;
    arrow?: string;
  };
}
