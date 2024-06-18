import { cn } from "@/utils/cn";
import type { HTMLAttributes, ReactNode } from "react";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  withShadow?: boolean;
  rounded?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const Card = ({
  className,
  withShadow,
  rounded = true,
  children,
  onClick,
  ...props
}: ICardProps) => {
  return (
    <div
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
};

export default Card;
