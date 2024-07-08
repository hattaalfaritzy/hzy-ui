import { cn } from "@/utils/cn";
import type { TextareaHTMLAttributes } from "react";
import { Message } from "@/components/commons";

export interface IInputTextarea
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  classNameWrapper?: string;
  classNameLabel?: string;
  label?: string;
  errorMessage?: string;
  maxLength?: number;
  rounded?: boolean;
  important?: boolean;
  disabled?: boolean;
}

export const InputTextarea = ({
  className,
  classNameWrapper,
  classNameLabel,
  label,
  errorMessage,
  maxLength = 200,
  rounded = false,
  important,
  disabled,
  ...props
}: IInputTextarea) => {
  return (
    <div className={cn("flex flex-col w-full", classNameWrapper)}>
      {label && (
        <div
          className={
            (cn("block font-semibold text-sm text-dark pb-1.5"), classNameLabel)
          }
        >
          {label}
          {label && important && (
            <span className={cn("after:content-['*'] text-error")} />
          )}
        </div>
      )}
      <div
        className={cn(
          "relative flex justify-between items-center w-full text-dark text-sm border border-[#D9DDE2]",
          !disabled ? "bg-white" : "bg-black/10",
          rounded ? "rounded-full" : "rounded-lg",
          errorMessage && "border-error focus:border-error focus:ring-0",
          className
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
      {errorMessage && <Message className="mt-2" label={errorMessage} />}
    </div>
  );
};

export default InputTextarea;
