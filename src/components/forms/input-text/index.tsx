import { cn } from "@/utils/cn";
import { Message } from "@/components/commons";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameLabel?: string;
  classNameWrapper?: string;
  label?: string;
  errorMessage?: string;
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
  errorMessage,
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
            "block font-semibold text-sm text-dark pb-1.5",
            classNameLabel
          )}
        >
          {label}
          {label && important && (
            <span className={cn("after:content-['*'] text-error")} />
          )}
        </div>
      )}
      <div
        className={cn(
          "relative flex justify-between items-center w-full text-dark text-sm border border-[#D9DDE2] focus:border-2 focus:border-dark read-only:focus:ring-0 read-only:focus:border-light",
          !disabled ? "bg-white" : "bg-black/10",
          rounded ? "rounded-full" : "rounded-lg",
          errorMessage && "border-error focus:border-error focus:ring-0",
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
            "w-full h-full bg-transparent p-2.5 px-3 outline-none rounded-l",
            rounded ? "rounded-full px-4" : "rounded-lg",
            iconRight ? (rounded ? "pr-12" : "pr-10") : "",
            iconLeft ? (rounded ? "pl-12" : "pl-10") : "",
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
      {errorMessage && <Message className="mt-2" label={errorMessage} />}
    </div>
  );
};

export default InputText;
