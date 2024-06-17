import { cn } from "@/utils/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { TypeAligns, TypeSizes, TypeVariant } from "./button-styles";
import { buttonStyles } from "./button-styles";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  classNameLabel?: string;
  outline?: boolean;
  label?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: TypeVariant;
  align?: TypeAligns;
  size?: TypeSizes;
  rounded?: boolean;
}

export const Button = ({
  onClick = () => {},
  disabled = false,
  loading,
  size = "md",
  label,
  variant = "primary",
  align = "center",
  outline,
  iconLeft,
  iconRight,
  className,
  classNameLabel,
  rounded,
  ...props
}: IButtonProps) => {  
  return (
    <button
      className={buttonStyles.getClassNames([
        buttonStyles.getSizeStyle(size),
        buttonStyles.getVariantStyle(variant, outline),
        className,
        buttonStyles.getDisabledClass(disabled, outline),
        rounded ? "rounded-full" : "",
      ])}
      disabled={loading || disabled}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      {...props}
    >
      {loading ? (
        <div className={cn("flex", buttonStyles.getAlignStyle(align))}>Loading</div>
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
