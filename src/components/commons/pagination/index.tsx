import { cn } from "@/utils/cn";

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
        <b className="text-dark">{total}</b> data asdasd
      </span>
      <div
        className={cn(
          "flex flex-row justify-center items-center space-x-2",
          className
        )}
      >
        <button
          className={cn(
            "px-3 py-1 text-sm rounded-md border border-gray-300",
            currentPage === 1 && "bg-gray-200",
            "hover:bg-gray-300"
          )}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {getPageNumbers().map((pageNumber, index) =>
          pageNumber === null ? (
            <span key={index} className="px-3 py-1">
              ...
            </span>
          ) : (
            <button
              key={index}
              className={cn(
                "px-3 py-1 text-sm rounded-md border border-gray-300",
                pageNumber === currentPage && "bg-gray-200",
                "hover:bg-gray-300"
              )}
              onClick={() => handlePageChange(pageNumber as number)}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          className={cn(
            "px-3 py-1 text-sm rounded-md border border-gray-300",
            currentPage === totalPages && "bg-gray-200",
            "hover:bg-gray-300"
          )}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
