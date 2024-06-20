import { cn } from "@/utils/cn";
import type { TextareaHTMLAttributes } from "react";
import { Message } from "@/components/commons";

export interface IInputTextarea
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  classNameLabel?: string;
  label?: string;
  error?: string;
  maxLength?: number;
  rounded?: boolean;
  important?: boolean;
  disabled?: boolean;
}

export const InputTextarea = ({
  className,
  classNameLabel,
  label,
  error,
  maxLength = 200,
  rounded = false,
  important,
  disabled,
  ...props
}: IInputTextarea) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>
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
          "relative flex justify-between items-center w-full text-dark text-sm border border-[#D9DDE2] rounded",
          !disabled ? "bg-white" : "bg-black/10",
          rounded && "rounded-full",
          error && "border-error focus:border-error focus:ring-0"
        )}
      >
        <textarea
          rows={3}
          disabled={disabled}
          className={cn(
            "w-full bg-transparent p-2.5 px-3",
            rounded && "rounded-full px-4",
            !disabled && "cursor-pointer"
          )}
          maxLength={maxLength}
          {...props}
        />
      </div>
      {error && <Message className="mt-2" label={error} />}
    </div>
  );
};

export default InputTextarea;
