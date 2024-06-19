import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { buttonStyles } from "./button-styles";

export type ButtonSizes = "sm" | "md";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  classNameLabel?: string;
  label?: string;
  loading?: boolean;
  outline?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  variant?: TypeVariant;
  align?: TypeAligns;
  size?: ButtonSizes;
  onClick?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Button = ({
  className,
  classNameLabel,
  label,
  loading,
  outline,
  rounded,
  disabled = false,
  variant = "informative",
  align = "center",
  size = "md",
  onClick = () => {},
  iconLeft,
  iconRight,
  ...props
}: IButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (loading) return;
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      className={cn(
        "text-white font-normal border-2",
        buttonStyles.getDisabledClass(disabled, outline),
        buttonStyles.getVariantStyle(variant, outline),
        buttonStyles.getSizeStyle(size),
        rounded ? "rounded-full" : "",
        className
      )}
      disabled={loading || disabled}
      onClick={handleClick}
      {...props}
    >
      {loading ? (
        <div className={cn("flex", buttonStyles.getAlignStyle(align))}>
          Loading
        </div>
      ) : (
        <div className={cn("flex", buttonStyles.getAlignStyle(align))}>
          {iconLeft && iconLeft}
          {label && (
            <span
              className={cn(
                classNameLabel,
                iconLeft && "pl-2",
                iconRight && "pr-2"
              )}
            >
              {label}
            </span>
          )}
          {iconRight && iconRight}
        </div>
      )}
    </button>
  );
};

export default Button;
