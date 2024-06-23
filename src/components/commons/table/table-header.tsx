import { cn } from "@/utils/cn";
import { TableHTMLAttributes, useState } from "react";
import type { IconName } from "../icons/_icon";
import Icons from "../icons";

export type SortingTable = "asc" | "desc";

export interface ITableHeaderProps
  extends Omit<TableHTMLAttributes<HTMLTableCellElement>, "align"> {
  label: string;
  onSort?: (direction: SortingTable) => void;
  withSort?: boolean;
  align?: TypeAligns;
  defaultSort?: SortingTable;
  iconName?: IconName;
}

export const TableHeader = ({
  label,
  onSort,
  withSort = false,
  defaultSort = "asc",
  align = "center",
  iconName,
}: ITableHeaderProps) => {
  const [sortDirection, setSortDirection] = useState<SortingTable>(defaultSort);

  const handleSort = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
    if (onSort) onSort(newSortDirection);
  };

  const styleByAlign = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[align];

  return (
    <th
      className={cn("px-4 py-6 cursor-pointer font-semibold")}
      onClick={withSort ? handleSort : undefined}
    >
      <div className={cn("flex items-center", styleByAlign)}>
        {iconName && (
          <Icons name={iconName} width={20} className="fill-dark mr-1.5" />
        )}
        <span className="text-sm text-dark">{label}</span>
        {withSort && (
          <span className="hover:text-light-700 ml-2 text-sm text-dark">
            {sortDirection === "asc" ? "▲" : "▼"}
          </span>
        )}
      </div>
    </th>
  );
};

export default TableHeader;
