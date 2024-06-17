import { cn } from "@/utils/cn";

export type TypeVariant = "primary" | "light" | "error" | "transparent";

export const buttonStyles = {
    getClassNames: (classNames: (string | undefined)[]) => {
        return cn(
          "text-white font-normal border-2",
          ...classNames.filter(Boolean)
        );
      },

      
    getSizeStyle: (size: string) => {
      return {
        sm: "text-xxs py-2 px-3",
        md: "text-sm py-3 px-4",
      }[size];
    },
  
    getVariantStyle: (variant: TypeVariant, outline?: boolean) => {
      return {
        primary: outline
          ? "border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-30 text-primary bg-transparent"
          : "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-30",
        light: outline ? "border-[#F9FAFF] focus:outline-none focus:ring-2 focus:ring-[#F9FAFF] focus:ring-opacity-30 text-[#F9FAFF] bg-transparent text-[#051F61]" : "border-[#F9FAFF] focus:outline-none focus:ring-2 focus:ring-[#F9FAFF] focus:ring-opacity-30 bg-[#F9FAFF] text-[#051F61]",
        error: outline ? "border-error focus:outline-none focus:ring-2 focus:ring-error focus:ring-opacity-30 text-error bg-transparent" : "border-error focus:outline-none focus:ring-2 focus:ring-error focus:ring-opacity-30 bg-error",
        transparent: "border-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-opacity-30 text-primary bg-transparent",
      }[variant];
    },
  
    getAlignStyle: (align: string) => {
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
  