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
        container: "bg-dark/30 text-light/50",
        iconColor: "[&_path]:fill-light/50",
      },
      light: {
        container: "bg-light/30 text-light",
        iconColor: "[&_path]:fill-light",
      },
      success: {
        container: "bg-success/30 text-success",
        iconColor: "[&_path]:fill-success",
      },
      informative: {
        container: "bg-informative/30 text-informative",
        iconColor: "[&_path]:fill-informative",
      },
      warning: {
        container: "bg-warning/30 text-warning",
        iconColor: "[&_path]:fill-warning",
      },
      error: {
        container: "bg-error/30 text-error",
        iconColor: "[&_path]:fill-error",
      },
    }[variant];
  },
};
