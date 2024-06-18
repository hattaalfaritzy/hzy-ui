import { convertWidth } from "@/utils/convert-width";
import type { ISvgIconProps } from "../_icon";

export default function ChevronUp({ width = 20, ...props }: ISvgIconProps) {
  const numericWidth = convertWidth(width);
  return (
    <svg
      width={numericWidth}
      height={numericWidth}
      {...props}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.99977 2.82795L2.04977 7.77795L0.635769 6.36395L6.99977 -4.63327e-05L13.3638 6.36395L11.9498 7.77795L6.99977 2.82795Z" />
    </svg>
  );
}
