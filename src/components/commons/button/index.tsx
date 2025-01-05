import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { buttonStyles } from "./button-styles";
import Icons from "../icons";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  classNameLabel?: string;
  label?: string;
  loading?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: TypeVariant;
  outline?: boolean;
  size?: TypeSizes;
  align?: TypeAligns;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  function Button(
    {
      className,
      classNameLabel,
      label,
      loading = false,
      outline,
      rounded,
      disabled = false,
      fullWidth = false,
      variant = "informative",
      size = "md",
      align = "center",
      iconLeft,
      iconRight,
      children,
      onClick = () => {},
      ...props
    },
    ref
  ) {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (loading) return;
      e.stopPropagation();
      onClick();
    };

    return (
      <button
        ref={ref}
        className={cn(
          "font-normal border text-xs",
          buttonStyles.getDisabledClass(!!(disabled || loading), outline),
          buttonStyles.getVariantStyle(variant, outline),
          buttonStyles.getSizeStyle(size),
          rounded ? "rounded-full" : "rounded-lg",
          fullWidth && "w-full",
          className
        )}
        disabled={loading || disabled}
        onClick={handleClick}
        {...props}
      >
        {loading ? (
          <div className={cn("flex", buttonStyles.getAlignStyle(align))}>
            <Icons
              name="loading"
              className={cn(buttonStyles.getLoadingColor(variant, outline))}
            />
          </div>
        ) : (
          <div className={cn("flex", buttonStyles.getAlignStyle(align))}>
            {iconLeft && iconLeft}
            {children ||
              (label && (
                <span
                  className={cn(
                    classNameLabel,
                    iconLeft && "pl-2",
                    iconRight && "pr-2"
                  )}
                >
                  {label}
                </span>
              ))}
            {iconRight && iconRight}
          </div>
        )}
      </button>
    );
  }
);

export default Button;
