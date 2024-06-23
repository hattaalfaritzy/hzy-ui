import { cn } from "@/utils/cn";
import { useState, useRef, useEffect } from "react";
import type { MouseEventHandler, CSSProperties, HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { popoverStyles, type PlacementPopover } from "./popover-styles";
import Card from "../card";

export interface IPopoverProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameWrapper?: string;
  classNameBackdrop?: string;
  isOpen: boolean;
  backDrop?: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
  placement?: PlacementPopover;
  triggerBehavior?: "click" | "hover";
  withArrow?: boolean;
}

export const Popover = ({
  className,
  classNameWrapper,
  classNameBackdrop,
  isOpen,
  backDrop = true,
  trigger,
  children,
  placement = "top",
  triggerBehavior = "click",
  withArrow = true,
  ...props
}: IPopoverProps) => {
  const [openPopover, setOpenPopover] = useState(isOpen);
  const [positionStyles, setPositionStyles] = useState<CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const rootPopover = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBackdropClick = () => {
    setOpenPopover(false);
  };

  const handleClickRootPopover: MouseEventHandler<HTMLDivElement> = (e) => {
    if (rootPopover.current && e.target === rootPopover.current) {
      handleBackdropClick();
    }
  };

  const handleTriggerClick = () => {
    if (triggerBehavior === "click") {
      setOpenPopover((prevState) => !prevState);
    }
  };

  const handleTriggerHover = () => {
    if (triggerBehavior === "hover") {
      setOpenPopover(true);
    }
  };

  useEffect(() => {
    if (openPopover && triggerRef.current && popoverRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const styles = popoverStyles.calculatePositionStyles(
        triggerRect,
        popoverRect,
        placement
      );
      setPositionStyles(styles);
    }
  }, [openPopover, placement]);

  return (
    <div className={cn("relative", classNameWrapper)}>
      <div
        ref={triggerRef}
        className="inline-block bg-red-200"
        onClick={handleTriggerClick}
        onMouseEnter={handleTriggerHover}
        {...props}
      >
        {trigger}
      </div>
      {openPopover &&
        createPortal(
          <div className="fixed z-[1300] w-full h-full top-0 left-0">
            {backDrop && (
              <div
                className={cn(
                  "-z-[1] fixed w-full h-full bg-black/30 animate-fade-in",
                  classNameBackdrop
                )}
                onClick={handleBackdropClick}
              />
            )}
            <div
              ref={rootPopover}
              className="fixed flex justify-center items-center w-full h-full top-0 left-0"
              onClick={handleClickRootPopover}
            >
              <div
                ref={popoverRef}
                className={cn(
                  "absolute z-10 flex animate-fade-in max-w-[350px]",
                  popoverStyles.calculateArrowStyles(placement).container
                )}
                style={positionStyles}
              >
                <Card className={cn(className)}>{children}</Card>
                {withArrow && (
                  <div
                    className={cn(
                      "w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-white border-r-[10px] border-r-transparent",
                      popoverStyles.calculateArrowStyles(placement).arrow
                    )}
                  />
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Popover;
