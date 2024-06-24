import { cn } from "@/utils/cn";
import Button from "../button";
import Icons from "../icons";

interface PaginationProps {
  className?: string;
  currentPage: number;
  total: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({
  className,
  currentPage,
  total,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  // Calculate display range based on current page position
  const displayRange = currentPage === 1 || currentPage === totalPages ? 2 : 1;

  const getPageNumbers = () => {
    const pages: (number | null)[] = [];

    // Show first page
    pages.push(1);

    // Show ... if currentPage is not near the start
    if (currentPage > displayRange + 2) {
      pages.push(null);
    }

    // Show pages around the current page
    for (
      let i = currentPage - displayRange;
      i <= currentPage + displayRange;
      i++
    ) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // Show ... if currentPage is not near the end
    if (currentPage < totalPages - displayRange - 1) {
      pages.push(null);
    }

    // Show last page
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

  // Calculate current range of items being shown
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, total);

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <span className="text-sm text-[#A5A5A5] font-regular">
        Showing <b className="text-dark">{`${startItem}-${endItem}`}</b> from{" "}
        <b className="text-dark">{total}</b> data
      </span>
      <div
        className={cn(
          "flex flex-row justify-center items-center space-x-2",
          className
        )}
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
