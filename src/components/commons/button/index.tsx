import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type TypeVariant = "primary" | "light" | "error" | "transparent";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  classNameLabel?: string;
  outline?: boolean;
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: TypeVariant;
  align?: string;
  size?: string;
  rounded?: boolean;
}

export default function Button({
  onClick = () => {},
  disabled,
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
}: IButtonProps) {
  const styleBySize = {
    sm: "btn-sm",
    md: "btn-md",
    none: "btn-remove-size",
  }[size];

  const styleByVariant = {
    primary: outline
      ? "btn-outline-primary"
      : "btn-primary border-primary bg-primary",
    light: outline ? "btn-outline-light" : "btn-light",
    error: outline ? "btn-outline-error" : "btn-error",
    transparent: "btn-transparent",
  }[variant];

  const styleByAlign = {
    start: "justify-start items-center",
    center: "justify-center items-center",
    end: "justify-end items-center",
  }[align];
  return (
    <button
      className={clsx(
        "btn",
        styleBySize,
        styleByVariant,
        className,
        disabled && !outline && "bg-opacity-70 border-opacity-0 cursor-default",
        disabled && outline && "bg-opacity-30 border-opacity-30 cursor-default",
        rounded ? "rounded-full" : ""
      )}
      disabled={loading || disabled}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      {...props}
    >
      {loading ? (
        <div className={clsx("flex", styleByAlign)}>loading</div>
      ) : (
        <div className={clsx("flex", styleByAlign)}>
          {iconLeft && iconLeft}
          {label && (
            <span
              className={clsx(
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
}
