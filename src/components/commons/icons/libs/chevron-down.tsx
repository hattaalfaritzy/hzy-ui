import { convertWidth } from "@/utils/convert-width";
import type { ISvgIconProps } from "../_icon";

export default function ChevronDown({ width = 20, ...props }: ISvgIconProps) {
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
      <path d="M6.99999 5.17198L11.95 0.221985L13.364 1.63598L6.99999 7.99998L0.635986 1.63598L2.04999 0.221985L6.99999 5.17198Z" />
    </svg>
  );
}
