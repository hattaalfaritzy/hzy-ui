import { cn } from "./cn";

export const getClassNames = (classNames: (string | undefined)[]) => {
    return cn(
        "text-white font-normal border-2",
        ...classNames.filter(Boolean)
    );  
}
