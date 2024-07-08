import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function LRT({ width = 20, ...props }: ISvgProps) {
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
      <g
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="M4 11v-1c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v1c0 3.771 0 5.657-1.172 6.828S15.771 19 12 19s-5.657 0-6.828-1.172S4 14.771 4 11" />
        <path d="M4 12s3.733 1 8 1s8-1 8-1M7 19l-2 3m12-3l2 3M4.5 16h2m11 0h2M5 5h14" />
      </g>
    </svg>
  );
}
