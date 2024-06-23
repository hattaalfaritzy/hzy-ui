import { cn } from "@/utils/cn";
import type { ReactNode, TableHTMLAttributes } from "react";
import TableHeader, { type SortingTable } from "./table-header";
import Icons from "../icons";

type VariantTable = "default" | "sticky";

interface IColumnsProps {
  label: string;
  key: string;
  align?: "start" | "center" | "end";
  sortable?: boolean;
  iconName?: string;
  action?: (data: any) => ReactNode;
}

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  classNameWrapper?: string;
  className?: string;
  columns: IColumnsProps[];
  dataSource: any[];
  loading?: boolean;
  onSort?: (key: string, direction: SortingTable) => void;
  variant?: VariantTable;
}

export const Table = ({
  classNameWrapper,
  className,
  columns,
  dataSource,
  loading = false,
  onSort,
  variant = "default",
}: ITableProps) => {
  const handleSort = (key: string) => (direction: SortingTable) => {
    if (onSort) onSort(key, direction);
  };

  const styleByVariant = {
    default: "static",
    sticky: "z-10 sticky top-0 shadow",
  }[variant];

  return (
    <div
      className={cn(
        "overflow-x-auto h-auto",
        styleByVariant === "sticky" && "max-h-96",
        classNameWrapper
      )}
    >
      <table className={cn("relative w-full min-w-full bg-white", className)}>
        <thead
          className={cn(
            "py-8 bg-white border-b border-[#F1F1F1]",
            styleByVariant
          )}
        >
          <tr>
            {columns.map((column) => (
              <TableHeader
                key={column.key}
                label={column.label}
                onSort={column.sortable ? handleSort(column.key) : undefined}
                withSort={column.sortable}
                align={column.align}
                iconName={column.iconName as any}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-20">
                <div className="flex justify-center items-center w-full">
                  <Icons width={50} name="loading" className="fill-dark" />
                </div>
              </td>
            </tr>
          ) : (
            dataSource.map((data, index) => (
              <tr
                key={index}
                className={cn({ "border-b": index !== dataSource.length - 1 })}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn("px-4 py-6 font-normal text-sm", {
                      "text-left": column.align === "start",
                      "text-center": column.align === "center",
                      "text-right": column.align === "end",
                    })}
                  >
                    {column.action ? column.action(data) : data[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
