import { cn } from "@/utils/cn";
import Button from "../button";
import Icons from "../icons";

interface PaginationProps {
  className?: string;
  currentPage: number;
  total: number;
  itemsPerPage?: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
  className,
  currentPage,
  total,
  itemsPerPage = 10,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  const displayRange = currentPage === 1 || currentPage === totalPages ? 2 : 1;

  const getPageNumbers = () => {
    const pages: (number | null)[] = [];

    pages.push(1);

    if (currentPage > displayRange + 2) {
      pages.push(null);
    }

    for (
      let i = currentPage - displayRange;
      i <= currentPage + displayRange;
      i++
    ) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - displayRange - 1) {
      pages.push(null);
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, total);

  return (
    <div
      className={cn(
        "flex flex-row justify-between items-center w-full p-8 bg-white",
        className
      )}
    >
      <span className="text-sm text-[#A5A5A5] font-regular">
        Showing <b className="text-dark">{`${startItem}-${endItem}`}</b> from{" "}
        <b className="text-dark">{total}</b> data
      </span>
      <div
        className={cn("flex flex-row justify-center items-center space-x-2")}
      >
        <Button
          variant="dark"
          outline={currentPage === 1 ? false : true}
          className={cn(
            "group rounded-xl h-10 w-10",
            currentPage !== 1 && "hover:bg-gray-200"
          )}
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Icons
            name="chevron-left"
            width={30}
            className={cn(currentPage !== 1 ? "fill-dark" : "fill-white")}
          />
        </Button>
        {getPageNumbers().map((pageNumber, index) =>
          pageNumber === null ? (
            <span key={index} className="px-3 py-1">
              ...
            </span>
          ) : (
            <Button
              key={index}
              variant="dark"
              outline={pageNumber === currentPage ? false : true}
              className={cn(
                "rounded-xl h-10 w-10 text-sm p-0",
                pageNumber === currentPage
                  ? "hover:bg-dark/80"
                  : "hover:bg-gray-200"
              )}
              size="md"
              label={String(pageNumber)}
              onClick={() => handlePageChange(pageNumber as number)}
            />
          )
        )}
        <Button
          variant="dark"
          outline={currentPage === totalPages ? false : true}
          className={cn(
            "group rounded-xl h-10 w-10",
            currentPage !== totalPages && "hover:bg-gray-200"
          )}
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Icons
            name="chevron-right"
            className={cn(
              currentPage !== totalPages ? "fill-dark" : "fill-white"
            )}
          />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
