import { cn } from "@/utils/cn";
import type { ComponentType, MouseEventHandler, SVGAttributes } from "react";
import Alert from "./libs/alert";
import Bell from "./libs/bell";
import CaretDown from "./libs/caret-down";
import ChevronDown from "./libs/chevron-down";
import ChevronLeft from "./libs/chevron-left";
import ChevronRight from "./libs/chevron-right";
import ChevronUp from "./libs/chevron-up";
import ClaimManagement from "./libs/claim-management";
import Clip from "./libs/clip";
import Close from "./libs/close";
import Dashboard from "./libs/dashboard";
import Download from "./libs/download";
import Employee from "./libs/employee";
import EmployeeRounded from "./libs/employee-rounded";
import Enrollment from "./libs/enrollment";
import Favorite from "./libs/favorite";
import File from "./libs/file";
import Menu from "./libs/menu";
import Search from "./libs/search";
import Wallet from "./libs/wallet";
import Form from "./libs/form";

export interface ISvgIconProps extends SVGAttributes<SVGElement> {
  width?: number | string;
  onClick?: MouseEventHandler;
}

type IconComponent = ComponentType<ISvgIconProps>;

type IconName =
  | "dashboard"
  | "employee"
  | "employee-rounded"
  | "enrollment"
  | "claim-management"
  | "search"
  | "bell"
  | "wallet"
  | "menu"
  | "caret-down"
  | "chevron-up"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "favorite"
  | "alert"
  | "clip"
  | "download"
  | "close"
  | "file"
  | "form";


export const icons: Record<string, IconComponent> = {
  dashboard: Dashboard,
  employee: Employee,
  "employee-rounded": EmployeeRounded,
  enrollment: Enrollment,
  "claim-management": ClaimManagement,
  search: Search,
  bell: Bell,
  wallet: Wallet,
  menu: Menu,
  "caret-down": CaretDown,
  "chevron-up": ChevronUp,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  favorite: Favorite,
  alert: Alert,
  clip: Clip,
  download: Download,
  close: Close,
  file: File,
  form: Form,
};

export default function Icons({ className, name, ...props }: IIconProps) {
  const Component = icons[name as IconName];

  if (!Component) return null;

  return <Component className={cn(className || "fill-[#A0A8B6]")} {...props} />;
}

export interface IIconProps extends SVGAttributes<SVGElement> {
  className?: string;
  name?: IconName;
}
