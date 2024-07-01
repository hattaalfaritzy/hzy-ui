import type { ISvgProps } from "../_icon";
import { convertSizes } from "@/utils/convert-sizes";

export default function Home({ width = 20, ...props }: ISvgProps) {
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
      <path d="m12 3l8 6v12h-5v-7H9v7H4V9z" />
    </svg>
  );
}
