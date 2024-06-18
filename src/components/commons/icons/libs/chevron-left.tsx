import { convertWidth } from "@/utils/convert-width";
import type { ISvgIconProps } from "../_icon";

export default function ChevronLeft({ width = 20, ...props }: ISvgIconProps) {
  const numericWidth = convertWidth(width);
  return (
    <svg
      width={numericWidth}
      height={numericWidth * 2}
      {...props}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.82795 6.99999L7.77795 11.95L6.36395 13.364L-4.60545e-05 6.99999L6.36395 0.635986L7.77795 2.04999L2.82795 6.99999Z" />
    </svg>
  );
}
