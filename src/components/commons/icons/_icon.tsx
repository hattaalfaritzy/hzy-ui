import type { ComponentType, MouseEventHandler, SVGAttributes } from "react";

import Activity from "./libs/activity";
import BrokenImage from "./libs/broken-image";
import BusMarker from "./libs/bus-marker";
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
import FileUpload from "./libs/file-upload";
import FilterList from "./libs/filter-list";
import Gear from "./libs/gear";
import Home from "./libs/home";
import InfoOutline from "./libs/info-outline";
import Info from "./libs/info";
import List from "./libs/list";
import Loading from "./libs/loading";
import LRT from "./libs/lrt";
import Marker from "./libs/marker";
import MRT from "./libs/mrt";
import PaperClip from "./libs/paper-clip";
import Search from "./libs/search";
import StoreMarker from "./libs/store-marker";
import Store from "./libs/store";
import Train from "./libs/train";
import TrashOutline from "./libs/trash-outline";
import Trash from "./libs/trash";
import UserMultiple from "./libs/user-multiple";
import User from "./libs/user";

export interface ISvgProps extends SVGAttributes<SVGElement> {
  width?: number;
  onClick?: MouseEventHandler;
}

export type IconName =
  | "activity"
  | "broken-image"
  | "bus-marker"
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
  | "file-upload"
  | "filter-list"
  | "gear"
  | "home"
  | "info-outline"
  | "info"
  | "list"
  | "loading"
  | "lrt"
  | "marker"
  | "mrt"
  | "paper-clip"
  | "search"
  | "store-marker"
  | "store"
  | "train"
  | "trash-outline"
  | "trash"
  | "user-multiple"
  | "user";

type IconComponent = ComponentType<ISvgProps>;

export const icons: Record<string, IconComponent> = {
  activity: Activity,
  "broken-image": BrokenImage,
  "bus-marker": BusMarker,
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
  "file-upload": FileUpload,
  "filter-list": FilterList,
  gear: Gear,
  home: Home,
  "info-outline": InfoOutline,
  info: Info,
  list: List,
  loading: Loading,
  lrt: LRT,
  marker: Marker,
  mrt: MRT,
  "paper-clip": PaperClip,
  search: Search,
  "store-marker": StoreMarker,
  store: Store,
  train: Train,
  "trash-outline": TrashOutline,
  trash: Trash,
  "user-multiple": UserMultiple,
  user: User,
};
