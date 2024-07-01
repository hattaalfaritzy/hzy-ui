import { cn } from "@/utils/cn";
import { type IconName, type ISvgProps, icons } from "./_icon";

export interface IIconProps extends ISvgProps {
  className?: string;
  name: IconName;
}

export const Icons = ({ className, name, ...props }: IIconProps) => {
  const Component = icons[name as IconName];

  if (!Component) return null;

  return (
    <Component
      className={cn(
        "fill-white",
        name === "activity" && "stroke-white",
        className
      )}
      {...props}
    />
  );
};

export { icons };
export default Icons;
