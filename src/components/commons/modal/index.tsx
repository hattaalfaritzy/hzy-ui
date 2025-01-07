import { cn } from "@/utils/cn";
import { useEffect, useRef, forwardRef } from "react";
import type {
  ForwardedRef,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";
import Card from "../card";

export interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  classNameWrapper?: string;
  classNameBackdrop?: string;
  isOpen: boolean;
  onClose?: () => void;
  backDrop?: boolean;
  size?: TypeSizes;
  children?: ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, IModalProps>(
  (
    {
      className,
      classNameWrapper,
      classNameBackdrop,
      isOpen,
      onClose,
      backDrop = true,
      size = "md",
      children,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const rootModal = useRef<HTMLDivElement>(null);

    useEffect(() => {
      document.body.style.overflow = isOpen ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);

    const handleBackdropClick = () => {
      if (onClose) {
        onClose();
      }
    };

    const handleClickRootModal: MouseEventHandler<HTMLDivElement> = (e) => {
      if (rootModal.current && e.target === rootModal.current) {
        handleBackdropClick();
      }
    };

    const sizeModal = {
      sm: "max-w-[250px]",
      md: "max-w-[560px]",
      lg: "max-w-[920px]",
    }[size];

    return createPortal(
      isOpen && (
        <div
          ref={ref}
          className={cn(
            "fixed z-[1300] w-full h-full top-0 left-0",
            "animate-fade-in",
            classNameWrapper
          )}
          {...props}
        >
          {isOpen && backDrop && (
            <div
              className={cn(
                "-z-[1] fixed flex justify-center items-center w-full h-full top-0 left-0 bg-black/30",
                classNameBackdrop
              )}
            />
          )}
          {isOpen && (
            <div className="inline-block align-middle overflow-y-auto w-full h-full">
              <div
                ref={rootModal}
                className={cn("flex justify-center items-center w-full h-full")}
                onClick={handleClickRootModal}
              >
                <Card
                  className={cn(
                    "relative flex flex-col w-full box-border animate-fade-in",
                    className,
                    sizeModal
                  )}
                >
                  {children}
                </Card>
              </div>
            </div>
          )}
        </div>
      ),
      document.body
    );
  }
);

export default Modal;
