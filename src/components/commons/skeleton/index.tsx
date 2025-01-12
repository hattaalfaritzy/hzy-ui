import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  width?: number;
  height?: number;
  rounded?: boolean;
}

export const Skeleton = forwardRef<HTMLDivElement, ISkeletonProps>(
  ({ className, width, height, rounded = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
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
  }
);

export default Skeleton;
