export const buttonStyles = {
  getSizeStyle: (size: TypeSizes) => {
    return {
      sm: "text-[.625rem] py-2 px-3",
      md: "text-sm py-3 px-4",
    }[size];
  },

  getVariantStyle: (variant: TypeVariant, outline?: boolean) => {
    return {
      informative: outline
        ? "border-informative focus:outline-none focus:ring-2 focus:ring-informative focus:ring-opacity-30 bg-transparent text-informative"
        : "border-informative focus:outline-none focus:ring-2 focus:ring-informative focus:ring-opacity-30 bg-informative",
      success: outline
        ? "border-success focus:outline-none focus:ring-2 focus:ring-success focus:ring-opacity-30 bg-transparent text-success"
        : "border-success focus:outline-none focus:ring-2 focus:ring-success focus:ring-opacity-30 bg-success",
      warning: outline
        ? "border-warning focus:outline-none focus:ring-2 focus:ring-warning focus:ring-opacity-30 bg-transparent text-warning"
        : "border-warning focus:outline-none focus:ring-2 focus:ring-warning focus:ring-opacity-30 bg-warning",
      error: outline
        ? "border-error focus:outline-none focus:ring-2 focus:ring-error focus:ring-opacity-30 bg-transparent text-error"
        : "border-error focus:outline-none focus:ring-2 focus:ring-error focus:ring-opacity-30 bg-error",
    }[variant];
  },

  getAlignStyle: (align: TypeAligns) => {
    return {
      start: "justify-start items-center",
      center: "justify-center items-center",
      end: "justify-end items-center",
    }[align];
  },

  getDisabledClass: (disabled: boolean, outline?: boolean) => {
    if (disabled) {
      return outline
        ? "bg-opacity-30 border-opacity-30 cursor-default"
        : "bg-opacity-70 border-opacity-0 cursor-default";
    }
    return "";
  },
};
