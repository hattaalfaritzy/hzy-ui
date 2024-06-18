import { cn } from "./cn";

export const getClassNames = (
  baseClassNames: string,
  classNames: (string | undefined)[]
) => {
  return cn(baseClassNames, ...classNames.filter(Boolean));
};
