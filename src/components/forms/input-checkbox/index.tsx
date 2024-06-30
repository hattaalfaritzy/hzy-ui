import { cn } from "@/utils/cn";
import type { InputHTMLAttributes } from "react";

export interface IInputCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameWrapper?: string;
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
  classNameWrapper,
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
    <div className={cn("flex flex-col max-w-fit", classNameWrapper)}>
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
          className={cn(className, "accent-dark")}
          {...props}
        />
        {label && (
          <div
            className={cn(
              classNameLabel || "block text-sm text-dark",
              variant === "reverse" && "pr-2"
            )}
          >
            {label}
            {label && important && (
              <span className={cn("after:content-['*'] text-error")} />
            )}
          </div>
        )}
      </label>
    </div>
  );
};

export default InputCheckbox;
