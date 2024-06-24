import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Pagination } from ".";

const meta: Meta<typeof Pagination> = {
  title: "Components/Commons/Pagination",
  component: Pagination as Meta<typeof Pagination>["component"],
  tags: ["autodocs"],
  args: {
    currentPage: 1,
    total: 200,
    itemsPerPage: 10,
  },
};

export default meta;

const Template: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Base = Template.bind({});
