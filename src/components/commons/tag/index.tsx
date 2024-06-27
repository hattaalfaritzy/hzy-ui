import { cn } from "@/utils/cn";
import type { HTMLAttributes } from "react";

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameLabel?: string;
  label?: string;
  variant?: TypeVariant;
  onClick?: () => void;
}

export const Tag = ({
  className,
  classNameLabel,
  label,
  variant = "error",
  onClick,
  ...props
}: ITagProps) => {
  if (!label) return null;

  const style = {
    dark: "bg-dark",
    light: "bg-light text-dark",
    success: "bg-success",
    informative: "bg-informative",
    warning: "bg-warning",
    error: "bg-error",
  }[variant];

  return (
    <div
      className={cn(
        "flex justify-center items-center rounded-lg px-3 py-1.5 bg-opacity-90 w-full space-x-2 max-w-fit",
        style,
        className
      )}
      onClick={onClick}
      {...props}
    >
      <div
        className={cn(
          "flex-1 text-xs",
          variant === "light" ? "text-dark" : "text-white",
          classNameLabel
        )}
      >
        {label}
      </div>
    </div>
  );
};

export default Tag;
