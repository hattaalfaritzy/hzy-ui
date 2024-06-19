import { cn } from "@/utils/cn";
import type {
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react";
import { useRef, useState } from "react";
import Icon from "../icons";

export interface IAccordionProps extends HTMLAttributes<HTMLDivElement> {
  classNameWrapper?: string;
  className?: string;
  classNameTitle?: string;
  classNameContent?: string;
  withIcon?: React.ReactNode;
  title?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
}

export const Accordion = ({
  classNameWrapper,
  className,
  classNameTitle,
  classNameContent,
  withIcon,
  title,
  children,
  defaultOpen = false,
  disabled,
  onClick,
  ...props
}: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const rootRef = useRef<HTMLDivElement>(null);

  const handleToggle = (e: MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
    onClick?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      rootRef.current?.click();
    }
  };

  return (
    <div
      ref={rootRef}
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
          className
        )}
      >
        <div
          className={cn(
            "flex flex-row justify-start items-center w-full",
            withIcon && "space-x-4"
          )}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        >
          {withIcon && withIcon}
          <span className={cn(classNameTitle || "text-xs lg:text-base")}>
            {title}
          </span>
        </div>
        <Icon
          name="chevron-down"
          width={16}
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
};

export default Accordion;
