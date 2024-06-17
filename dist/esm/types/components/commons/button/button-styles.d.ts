export type TypeVariant = "primary" | "light" | "error" | "transparent";
export type TypeAligns = "start" | "center" | "end";
export type TypeSizes = "sm" | "md";
export declare const buttonStyles: {
    getSizeStyle: (size: TypeSizes) => string;
    getVariantStyle: (variant: TypeVariant, outline?: boolean) => string;
    getAlignStyle: (align: TypeAligns) => string;
    getDisabledClass: (disabled: boolean, outline?: boolean) => "bg-opacity-30 border-opacity-30 cursor-default" | "bg-opacity-70 border-opacity-0 cursor-default" | "";
};
