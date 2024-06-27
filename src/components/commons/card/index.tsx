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

export const Card = forwardRef<HTMLDivElement, ICardProps>(function Card(
  {
    className,
    withShadow,
    rounded = true,
    children,
    onClick,
    ...props
  }: ICardProps,
  ref
) {
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
});

export default Card;
