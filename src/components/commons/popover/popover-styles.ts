export type PlacementPopover =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left-top"
  | "left-bottom"
  | "right-top"
  | "right-bottom";

export type ArrowStyles = {
  container?: string;
  arrow?: string;
};

export const popoverStyles = {
  calculatePositionStyles: (
    triggerRect: DOMRect,
    popoverRect: DOMRect,
    placement: PlacementPopover
  ) => {
    const { top, left, width, height } = triggerRect;
    const { width: popoverWidth, height: popoverHeight } = popoverRect;

    let popoverStyles: React.CSSProperties = {};

    switch (placement) {
      case "top":
        popoverStyles = {
          top: `${top - popoverHeight - 10}px`,
          left: `${left + width / 2 - popoverWidth / 2}px`,
        };
        break;
      case "right":
        popoverStyles = {
          top: `${top + height / 2 - popoverHeight / 2}px`,
          left: `${left + width + 5}px`,
        };
        break;
      case "bottom":
        popoverStyles = {
          top: `${top + height + 10}px`,
          left: `${left + width / 2 - popoverWidth / 2}px`,
        };
        break;
      case "left":
        popoverStyles = {
          top: `${top + height / 2 - popoverHeight / 2}px`,
          left: `${left - popoverWidth - 5}px`,
        };
        break;
      case "top-left":
        popoverStyles = {
          top: `${top - popoverHeight - 10}px`,
          left: `${left}px`,
        };
        break;
      case "top-right":
        popoverStyles = {
          top: `${top - popoverHeight - 10}px`,
          left: `${left + width - popoverWidth}px`,
        };
        break;
      case "bottom-left":
        popoverStyles = {
          top: `${top + height + 10}px`,
          left: `${left}px`,
        };
        break;
      case "bottom-right":
        popoverStyles = {
          top: `${top + height + 10}px`,
          left: `${left + width - popoverWidth}px`,
        };
        break;
      case "left-top":
        popoverStyles = {
          top: `${top}px`,
          left: `${left - popoverWidth}px`,
        };
        break;
      case "left-bottom":
        popoverStyles = {
          top: `${top + height - popoverHeight}px`,
          left: `${left - popoverWidth}px`,
        };
        break;
      case "right-top":
        popoverStyles = {
          top: `${top}px`,
          left: `${left + width}px`,
        };
        break;
      case "right-bottom":
        popoverStyles = {
          top: `${top + height - popoverHeight}px`,
          left: `${left + width}px`,
        };
        break;
      default:
        popoverStyles = {};
        break;
    }

    return popoverStyles;
  },

  calculateArrowStyles: (placement: PlacementPopover) => {
    let arrowStyles: ArrowStyles = {};

    switch (placement) {
      case "top":
        arrowStyles = {
          container: "flex-col justify-center items-center",
          arrow: "",
        };
        break;
      case "right":
        arrowStyles = {
          container: "flex-row-reverse justify-center items-center",
          arrow: "rotate-90 -mr-1.5",
        };
        break;
      case "bottom":
        arrowStyles = {
          container: "flex-col-reverse justify-center items-center",
          arrow: "rotate-180",
        };
        break;
      case "left":
        arrowStyles = {
          container: "flex-row justify-center items-center",
          arrow: "-rotate-90 -ml-1.5",
        };
        break;
      case "top-left":
        arrowStyles = {
          container: "flex-col justify-center items-start",
          arrow: "ml-3",
        };
        break;
      case "top-right":
        arrowStyles = {
          container: "flex-col justify-center items-end",
          arrow: "mr-3",
        };
        break;
      case "bottom-left":
        arrowStyles = {
          container: "flex-col-reverse justify-center items-start",
          arrow: "rotate-180 ml-4",
        };
        break;
      case "bottom-right":
        arrowStyles = {
          container: "flex-col-reverse justify-center items-end",
          arrow: "rotate-180 mr-4",
        };
        break;
      case "left-top":
        arrowStyles = {
          container: "flex-row justify-center items-start",
          arrow: "-rotate-90 -ml-1.5 mt-4",
        };
        break;
      case "left-bottom":
        arrowStyles = {
          container: "flex-row justify-center items-end",
          arrow: "-rotate-90 -ml-1.5 mb-4",
        };
        break;
      case "right-top":
        arrowStyles = {
          container: "flex-row-reverse justify-center items-start",
          arrow: "rotate-90 -mr-1.5 mt-4",
        };
        break;
      case "right-bottom":
        arrowStyles = {
          container: "flex-row-reverse justify-center items-end",
          arrow: "rotate-90 -mr-1.5 mb-4",
        };
        break;
      default:
        arrowStyles = {};
        break;
    }

    return arrowStyles;
  },
};
