import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

type SkeletonVariantType = "circular" | "rectangular" | "rounded" | "text";

export interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: SkeletonVariantType;
  width?: number;
  height?: number;
  rounded?: boolean;
}

export const Skeletons = ({
  className,
  variant = "text",
  width,
  height,
  rounded = false,
  ...props
}: ISkeletonProps) => {
  return (
    <div
      className={cn(
        "relative flex h-10 w-full overflow-hidden bg-[#2B2B2B] rounded",
        rounded && "rounded-full",
        className
      )}
      style={{ width: width, height: height }}
      {...props}
    >
      <div
        className={cn(
          "absolute flex w-full h-full bg-gradient-to-r from-[#2B2B2B] via-[#505050] to-[#2B2B2B] animate-skeletons"
        )}
      />
    </div>
  );
};

export default Skeletons;
