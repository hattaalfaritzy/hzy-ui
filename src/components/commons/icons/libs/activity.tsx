import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function Activity({ width = 20, ...props }: ISvgProps) {
  const sizes = convertSizes(width);
  return (
    <svg
      width={sizes}
      height={sizes}
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12h4.5L9 6l4 12l2-9l1.5 3H21"
      />
    </svg>
  );
}
