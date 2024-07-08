import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function BusMarker({ width = 20, ...props }: ISvgProps) {
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
      <path d="M12 2c-4.42 0-8 .5-8 4v10a3 3 0 0 0 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h6a8 8 0 0 1-1-3.5a5.55 5.55 0 0 1 2.38-4.5H6V6h12v4a4 4 0 0 1 .5 0a5.3 5.3 0 0 1 1.5.22V6c0-3.5-3.58-4-8-4M7.5 14A1.5 1.5 0 1 1 6 15.5A1.5 1.5 0 0 1 7.5 14m11-2a3.54 3.54 0 0 0-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5a3.54 3.54 0 0 0-3.5-3.5m0 4.8a1.2 1.2 0 1 1 0-2.4a1.29 1.29 0 0 1 1.2 1.2a1.15 1.15 0 0 1-1.2 1.2" />
    </svg>
  );
}