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

  type IconName =
    | "dashboard"
    | "employee"
    | "enrollment"
    | "search"
    | "bell"
    | "wallet"
    | "menu"
    | "caret-down"
    | "chevron-up"
    | "chevron-down"
    | "chevron-left"
    | "chevron-right"
    | "favorite"
    | "info-outline"
    | "clip"
    | "download"
    | "close"
    | "file"
    | "broken-image"
    | "check-circle"
    | "error"
    | "info"
    | "eye"
    | "eye-slash"
    | "gear"
    | "user"
    | "form";

  interface ISvgProps extends SVGAttributes<SVGElement> {
    width?: number | string;
    onClick?: MouseEventHandler;
  }

  type IconComponent = ComponentType<ISvgProps>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AnyObject = Record<any, any>;
}
