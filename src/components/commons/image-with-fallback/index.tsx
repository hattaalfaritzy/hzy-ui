import { forwardRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import Icons from "../icons";

export interface IImageWithFallbackProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
  iconFallback?: ReactNode;
}

export const ImageWithFallback = forwardRef<
  HTMLImageElement,
  IImageWithFallbackProps
>(({ className, src, alt, iconFallback, ...props }, ref) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(!src || src.trim() === "");
  }, [src]);

  if (isError) {
    return (
      <div
        className={cn("flex justify-center bg-light p-6 rounded-md", className)}
      >
        {iconFallback || (
          <Icons name="broken-image" className="fill-black text-3xl m-auto" />
        )}
      </div>
    );
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setIsError(true)}
      {...props}
    />
  );
});

export default ImageWithFallback;
