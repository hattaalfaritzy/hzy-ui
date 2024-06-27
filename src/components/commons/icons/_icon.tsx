import type { ComponentType, MouseEventHandler, SVGAttributes } from "react";

import BrokenImage from "./libs/broken-image";
import CaretDown from "./libs/caret-down";
import CaretUp from "./libs/caret-up";
import ChevronDown from "./libs/chevron-down";
import ChevronLeft from "./libs/chevron-left";
import ChevronRight from "./libs/chevron-right";
import ChevronUp from "./libs/chevron-up";
import CloseCircleOutline from "./libs/close-circle-outline";
import CloseCircle from "./libs/close-circle";
import Error from "./libs/error";
import EyeSlash from "./libs/eye-slash";
import Eye from "./libs/eye";
import Gear from "./libs/gear";
import InfoOutline from "./libs/info-outline";
import Info from "./libs/info";
import List from "./libs/list";
import Loading from "./libs/loading";
import Marker from "./libs/marker";
import Search from "./libs/search";
import User from "./libs/user";

export interface ISvgProps extends SVGAttributes<SVGElement> {
  width?: number;
  onClick?: MouseEventHandler;
}

export type IconName =
  | "broken-image"
  | "caret-down"
  | "caret-up"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "close-circle-outline"
  | "close-circle"
  | "error"
  | "eye-slash"
  | "eye"
  | "gear"
  | "info-outline"
  | "info"
  | "list"
  | "loading"
  | "marker"
  | "search"
  | "user";

type IconComponent = ComponentType<ISvgProps>;

export const icons: Record<string, IconComponent> = {
  "broken-image": BrokenImage,
  "caret-down": CaretDown,
  "caret-up": CaretUp,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "close-circle-outline": CloseCircleOutline,
  "close-circle": CloseCircle,
  error: Error,
  "eye-slash": EyeSlash,
  eye: Eye,
  gear: Gear,
  "info-outline": InfoOutline,
  info: Info,
  list: List,
  loading: Loading,
  marker: Marker,
  search: Search,
  user: User,
};
