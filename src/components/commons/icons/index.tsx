import { cn } from "@/utils/cn";
import { type IconName, icons, ISvgProps } from "./_icon";

export interface IIconProps extends ISvgProps {
  className?: string;
  name: IconName;
}

export const Icons = ({ className, name, ...props }: IIconProps) => {
  const Component = icons[name as IconName];

  if (!Component) return null;

  return <Component className={cn(className || "fill-[#A0A8B6]")} {...props} />;
};

export { icons };
export default Icons;
