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
        container: "bg-dark/30 text-dark",
        iconColor: "fill-dark",
      },
      light: {
        container: "bg-light/30 text-light",
        iconColor: "fill-light",
      },
      success: {
        container: "bg-success/30 text-success",
        iconColor: "fill-success",
      },
      informative: {
        container: "bg-informative/30 text-informative",
        iconColor: "fill-informative",
      },
      warning: {
        container: "bg-warning/30 text-warning",
        iconColor: "fill-warning",
      },
      error: {
        container: "bg-error/30 text-error",
        iconColor: "fill-error",
      },
    }[variant];
  },
};
