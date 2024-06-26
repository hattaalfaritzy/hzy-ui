import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import type { ImgHTMLAttributes, ReactNode } from "react";
import Icons from "../icons";

export interface IImageWithFallbackProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
  iconFallback?: ReactNode;
}

export const ImageWithFallback = ({
  className,
  src,
  alt,
  iconFallback,
  ...props
}: IImageWithFallbackProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!src || src.trim() === "") {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [src]);

  if (isError || !src || src.trim() === "") {
    return (
      <div
        className={cn("flex justify-center bg-light p-6 rounded-md", className)}
      >
        {iconFallback || (
          <Icons
            name="broken-image"
            className={cn("fill-black text-3xl m-auto")}
          />
        )}
      </div>
    );
  }

  return (
    <img
      id={src}
      src={src || ""}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setIsError(true)}
      {...props}
    />
  );
};

export default ImageWithFallback;
