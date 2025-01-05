import { cn } from "@/utils/cn";
import { forwardRef, useState } from "react";
import type {
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react";
import Icon from "../icons";

export interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
  classNameWrapper?: string;
  className?: string;
  classNameTitle?: string;
  classNameContent?: string;
  title?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  withIcon?: React.ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, IAccordionProps>(
  (
    {
      classNameWrapper,
      className,
      classNameTitle,
      classNameContent,
      title,
      children,
      defaultOpen = false,
      disabled,
      withIcon,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

    const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
      onClick?.(e);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        (ref as React.RefObject<HTMLDivElement>)?.current?.click?.();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col w-full bg-white p-4 rounded shadow",
          classNameWrapper
        )}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        {...props}
      >
        <div
          className={cn(
            "flex flex-row justify-start items-center w-full",
            isOpen && "border-b border-light pb-4",
            className
          )}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          <div
            className={cn(
              "flex flex-row justify-start items-center w-full",
              withIcon && "space-x-4"
            )}
          >
            {withIcon && withIcon}
            <span className={cn(classNameTitle || "text-sm")}>{title}</span>
          </div>
          <Icon
            name="chevron-down"
            className={cn(
              "fill-black cursor-pointer",
              isOpen && "transform rotate-180"
            )}
          />
        </div>
        {isOpen && (
          <div className={cn(classNameContent || "pt-4")}>{children}</div>
        )}
      </div>
    );
  }
);

export default Accordion;
