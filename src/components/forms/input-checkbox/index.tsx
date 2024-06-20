import { cn } from "@/utils/cn";
import type { InputHTMLAttributes } from "react";

export interface IInputCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameLabel?: string;
  label?: string;
  variant?: "default" | "reverse";
  important?: boolean;
  checked?: boolean;
  onChange?: () => void;
  defaultChecked?: boolean;
  error?: string;
  disabled?: boolean;
}

export const InputCheckbox = ({
  className,
  classNameLabel,
  label,
  variant = "default",
  important,
  checked,
  onChange,
  defaultChecked,
  error,
  disabled,
  ...props
}: IInputCheckboxProps) => {
  const styleByVariant = {
    default: "flex-row justify-center space-x-2",
    reverse: "flex-row flex-row-reverse justify-center",
  }[variant];

  return (
    <div className={cn("flex flex-col max-w-fit", className)}>
      <label
        className={cn(
          "flex",
          styleByVariant,
          disabled ? "opacity-80" : "cursor-pointer"
        )}
      >
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          {...props}
        />
        {label && (
          <div
            className={cn(
              classNameLabel || "block text-sm text-dark",
              important && "after:content-['*'] text-error",
              variant === "reverse" && "pr-2"
            )}
          >
            {label}
          </div>
        )}
      </label>
    </div>
  );
};

export default InputCheckbox;
