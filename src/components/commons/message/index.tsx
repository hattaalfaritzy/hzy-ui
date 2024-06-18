import { cn } from "@/utils/cn";
import type { HTMLAttributes } from "react";
import Icons, { type IconName } from "../icons";
import { messageStyles } from "./message-styles";

export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameLabel?: string;
  label?: string;
  variant?: TypeVariant;
  onClick?: () => void;
}

export const Message = ({
  className,
  classNameLabel,
  label,
  variant = "error",
  onClick,
  ...props
}: IMessageProps) => {
  if (!label) return null;

  const iconName: IconName = messageStyles.getIconType(variant);
  const style = messageStyles.getStylesType(variant);

  return (
    <div
      className={cn(
        "flex justify-center items-center rounded-lg px-3 py-1.5 bg-opacity-30 w-full space-x-2",
        style.container,
        className
      )}
      onClick={onClick}
      {...props}
    >
      <Icons name={iconName} className={style.iconColor} />
      <div className={cn("flex-1 text-xs", classNameLabel)}>{label}</div>
    </div>
  );
};

export default Message;
