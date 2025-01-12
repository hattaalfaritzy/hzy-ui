import type { Meta, StoryFn } from "@storybook/react";
import { Pagination } from ".";

export default {
  title: "Components/Commons/Pagination",
  component: Pagination as Meta<typeof Pagination>["component"],
} as Meta<typeof Pagination>;

export const PaginationDefault: StoryFn<typeof Pagination> = (args) => {
  return (
    <Pagination
      {...args}
      currentPage={1}
      total={50}
      itemsPerPage={10}
      onPageChange={(pageNumber) =>
        console.log("Page changed to:" + pageNumber)
      }
    />
  );
};

export const PaginationPageRanges: StoryFn<typeof Pagination> = (args) => {
  return (
    <Pagination
      {...args}
      currentPage={5}
      total={100}
      itemsPerPage={10}
      onPageChange={(pageNumber) =>
        console.log("Page changed to:" + pageNumber)
      }
    />
  );
};

export const PaginationCustomStyling: StoryFn<typeof Pagination> = (args) => {
  return (
    <Pagination
      {...args}
      currentPage={1}
      total={30}
      className="bg-gray-100 p-4 rounded-md"
      itemsPerPage={10}
      onPageChange={(pageNumber) =>
        console.log("Page changed to:" + pageNumber)
      }
    />
  );
};

export const PaginationEventHandling: StoryFn<typeof Pagination> = (args) => {
  return (
    <Pagination
      {...args}
      currentPage={2}
      total={60}
      itemsPerPage={15}
      onPageChange={(pageNumber) => alert("Navigated to page:" + pageNumber)}
    />
  );
};

export const PaginationVariants: StoryFn<typeof Pagination> = (args) => {
  return (
    <Pagination
      {...args}
      currentPage={1}
      total={20}
      itemsPerPage={5}
      onPageChange={(pageNumber) =>
        console.log("Page changed to:" + pageNumber)
      }
    />
  );
};
