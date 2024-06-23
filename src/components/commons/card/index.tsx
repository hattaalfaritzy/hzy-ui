import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  withShadow?: boolean;
  rounded?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, ICardProps>(
  (
    { className, withShadow, rounded = true, children, onClick, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "flex bg-white p-3",
          withShadow && "shadow",
          rounded && "rounded-lg",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
