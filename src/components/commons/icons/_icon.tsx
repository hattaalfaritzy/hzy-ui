import type { ComponentType, MouseEventHandler, SVGAttributes } from "react";

import BrokenImage from "./libs/broken-image";
import BusStop from "./libs/bus-stop";
import CaretDown from "./libs/caret-down";
import CaretUp from "./libs/caret-up";
import Cart from "./libs/cart";
import ChevronDown from "./libs/chevron-down";
import ChevronLeft from "./libs/chevron-left";
import ChevronRight from "./libs/chevron-right";
import ChevronUp from "./libs/chevron-up";
import CloseCircleOutline from "./libs/close-circle-outline";
import CloseCircle from "./libs/close-circle";
import Edit from "./libs/edit";
import Error from "./libs/error";
import EyeOutline from "./libs/eye-outline";
import EyeSlashOutline from "./libs/eye-slash-outline";
import EyeSlash from "./libs/eye-slash";
import Eye from "./libs/eye";
import Gear from "./libs/gear";
import InfoOutline from "./libs/info-outline";
import Info from "./libs/info";
import List from "./libs/list";
import Loading from "./libs/loading";
import Marker from "./libs/marker";
import Search from "./libs/search";
import Train from "./libs/train";
import Trash from "./libs/trash";
import UserMultiple from "./libs/user-multiple";
import User from "./libs/user";

export interface ISvgProps extends SVGAttributes<SVGElement> {
  width?: number;
  onClick?: MouseEventHandler;
}

export type IconName =
  | "broken-image"
  | "bus-stop"
  | "caret-down"
  | "caret-up"
  | "cart"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "close-circle-outline"
  | "close-circle"
  | "edit"
  | "error"
  | "eye-outline"
  | "eye-outline-slash"
  | "eye-slash"
  | "eye"
  | "gear"
  | "info-outline"
  | "info"
  | "list"
  | "loading"
  | "marker"
  | "search"
  | "train"
  | "trash"
  | "user-multiple"
  | "user";

type IconComponent = ComponentType<ISvgProps>;

export const icons: Record<string, IconComponent> = {
  "broken-image": BrokenImage,
  "bus-stop": BusStop,
  "caret-down": CaretDown,
  "caret-up": CaretUp,
  cart: Cart,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "close-circle-outline": CloseCircleOutline,
  "close-circle": CloseCircle,
  edit: Edit,
  error: Error,
  "eye-outline-slash": EyeSlashOutline,
  "eye-outline": EyeOutline,
  "eye-slash": EyeSlash,
  eye: Eye,
  gear: Gear,
  "info-outline": InfoOutline,
  info: Info,
  list: List,
  loading: Loading,
  marker: Marker,
  search: Search,
  train: Train,
  "user-multiple": Trash,
  trash: UserMultiple,
  user: User,
};
