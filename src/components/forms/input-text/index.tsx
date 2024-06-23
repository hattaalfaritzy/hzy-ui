import { cn } from "@/utils/cn";
import { Message } from "../../commons";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameLabel?: string;
  classNameWrapper?: string;
  label?: string;
  error?: string;
  rounded?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  important?: boolean;
  disabled?: boolean;
}

export const InputText = ({
  className,
  classNameLabel,
  classNameWrapper,
  label,
  error,
  rounded = false,
  iconLeft,
  iconRight,
  important = false,
  disabled,
  ...props
}: IInputTextProps) => {
  return (
    <div className={cn("flex flex-col w-full", classNameWrapper)}>
      {label && (
        <div
          className={cn(
            classNameLabel || "block font-semibold text-sm text-dark pb-1.5",
            important && "after:content-['*'] text-error"
          )}
        >
          {label}
        </div>
      )}
      <div
        className={cn(
          "relative flex justify-between items-center w-full text-dark text-sm border border-[#D9DDE2] focus:border-2 focus:border-dark read-only:focus:ring-0 read-only:focus:border-light",
          !disabled ? "bg-white" : "bg-black/10",
          rounded && "rounded-full",
          error && "border-error focus:border-error focus:ring-0",
          className
        )}
      >
        {iconLeft && (
          <div className={cn("absolute", rounded ? "left-4" : "left-3")}>
            {iconLeft}
          </div>
        )}
        <input
          disabled={disabled}
          className={cn(
            "w-full h-full bg-transparent p-2.5 px-3",
            rounded && "rounded-full px-4",
            !disabled && "cursor-pointer"
          )}
          {...props}
        />
        {iconRight && (
          <div className={cn("absolute", rounded ? "right-4" : "right-3")}>
            {iconRight}
          </div>
        )}
      </div>
      {error && <Message className="mt-2" label={error} />}
    </div>
  );
};

export default InputText;
