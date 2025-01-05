export const buttonStyles = {
  getSizeStyle: (size: TypeSizes) => {
    return {
      sm: "text-[.625rem] py-1 px-3",
      md: "text-xs py-1.5 px-4",
      lg: "text-sm py-3 px-5",
    }[size];
  },

  getVariantStyle: (variant: TypeVariant, outline?: boolean) => {
    return {
      dark: outline
        ? "border-dark focus:outline-none focus:ring-1 focus:ring-dark focus:ring-opacity-30 bg-transparent text-dark"
        : "border-dark focus:outline-none focus:ring-1 focus:ring-dark focus:ring-opacity-30 bg-dark text-light",
      light: outline
        ? "border-light focus:outline-none focus:ring-1 focus:ring-light focus:ring-opacity-30 bg-transparent text-light"
        : "border-light focus:outline-none focus:ring-1 focus:ring-light focus:ring-opacity-30 bg-light text-dark",
      informative: outline
        ? "border-informative focus:outline-none focus:ring-1 focus:ring-informative focus:ring-opacity-30 bg-transparent text-informative"
        : "border-informative focus:outline-none focus:ring-1 focus:ring-informative focus:ring-opacity-30 bg-informative text-white",
      success: outline
        ? "border-success focus:outline-none focus:ring-1 focus:ring-success focus:ring-opacity-30 bg-transparent text-success"
        : "border-success focus:outline-none focus:ring-1 focus:ring-success focus:ring-opacity-30 bg-success text-white",
      warning: outline
        ? "border-warning focus:outline-none focus:ring-1 focus:ring-warning focus:ring-opacity-30 bg-transparent text-warning"
        : "border-warning focus:outline-none focus:ring-1 focus:ring-warning focus:ring-opacity-30 bg-warning text-white",
      error: outline
        ? "border-error focus:outline-none focus:ring-1 focus:ring-error focus:ring-opacity-30 bg-transparent text-error"
        : "border-error focus:outline-none focus:ring-1 focus:ring-error focus:ring-opacity-30 bg-error text-white",
    }[variant];
  },

  getLoadingColor: (variant: TypeVariant, outline?: boolean) => {
    return {
      dark: outline ? "fill-dark" : "fill-light",
      light: outline ? "fill-light" : "fill-dark",
      informative: outline ? "fill-informative" : "fill-light",
      success: outline ? "fill-success" : "fill-light",
      warning: outline ? "fill-warning" : "fill-light",
      error: outline ? "fill-error" : "fill-light",
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
        : "bg-opacity-90 border-opacity-0 cursor-default";
    }
    return "";
  },
};
