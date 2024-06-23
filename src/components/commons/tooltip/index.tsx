import { cn } from "@/utils/cn";
import { useState, useRef, useEffect } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { tooltipStyles, type PlacementTooltip } from "./tooltip-styles";
import Card from "../card";

export interface ITooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  className?: string;
  classNameWrapper?: string;
  isOpen: boolean;
  content: string;
  children: React.ReactNode;
  placement?: PlacementTooltip;
  trigger?: "click" | "hover";
  withArrow?: boolean;
}

export const Tooltip = ({
  className,
  classNameWrapper,
  isOpen,
  content,
  children,
  placement = "top",
  trigger = "hover",
  withArrow = true,
  ...props
}: ITooltipProps) => {
  const [openTooltip, setOpenTooltip] = useState(isOpen);
  const [positionStyles, setPositionStyles] = useState<CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleTriggerClick = () => {
    if (trigger === "click") {
      setOpenTooltip((prevState) => !prevState);
    }
  };

  const handleTriggerHover = (hover: boolean) => {
    if (trigger === "hover") {
      setOpenTooltip(hover);
    }
  };

  useEffect(() => {
    if (openTooltip && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const styles = tooltipStyles.calculatePositionStyles(
        triggerRect,
        tooltipRect,
        placement
      );
      setPositionStyles(styles);
    }
  }, [openTooltip, placement]);

  return (
    <div className={cn("relative", classNameWrapper)}>
      <div
        ref={triggerRef}
        className="inline-block"
        onClick={handleTriggerClick}
        onMouseEnter={() => handleTriggerHover(true)}
        onMouseLeave={() => handleTriggerHover(false)}
        {...props}
      >
        {children}
      </div>
      {openTooltip &&
        createPortal(
          <div
            ref={tooltipRef}
            className={cn(
              "absolute z-10 flex animate-fade-in max-w-[350px]",
              tooltipStyles.calculateArrowStyles(placement).container
            )}
            style={positionStyles}
          >
            <Card
              className={cn(
                "bg-dark text-white text-xs px-3 py-1.5",
                className
              )}
            >
              {content}
            </Card>
            {withArrow && (
              <div
                className={cn(
                  "w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-dark border-r-[10px] border-r-transparent",
                  tooltipStyles.calculateArrowStyles(placement).arrow
                )}
              />
            )}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;
