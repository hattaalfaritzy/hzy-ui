import type { IconName } from "../icons/_icon";

export const messageStyles = {
  getIconType: (type: TypeVariant): IconName => {
    return {
      dark: "info",
      light: "info",
      informative: "info",
      success: "check-circle",
      warning: "error",
      error: "error",
    }[type] as IconName;
  },

  getStylesType: (variant: TypeVariant) => {
    return {
      dark: {
        container: "bg-dark text-dark",
        iconColor: "fill-dark",
      },
      light: {
        container: "bg-light text-light",
        iconColor: "fill-light",
      },
      success: {
        container: "bg-success text-success",
        iconColor: "fill-success",
      },
      informative: {
        container: "bg-informative text-informative",
        iconColor: "fill-informative",
      },
      warning: {
        container: "bg-warning text-warning",
        iconColor: "fill-warning",
      },
      error: {
        container: "bg-error text-error",
        iconColor: "fill-error",
      },
    }[variant];
  },
};
