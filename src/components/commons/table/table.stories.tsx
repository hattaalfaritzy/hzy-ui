import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { TableHeader as TableHead } from "./table-header";
import { Table, type IColumnsProps } from "./";
import Button from "../button";
import Pagination from "../pagination";

const meta: Meta<typeof Table> = {
  title: "Components/Commons/Table",
  component: Table as Meta<typeof Table>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Table> = (args) => {
  const [sortedData, setSortedData] = useState(args.dataSource);
  const [loading, setLoading] = useState(args.loading);

  const handleSort = (key: string, direction: "asc" | "desc") => {
    setLoading(true);
    setTimeout(() => {
      const sorted = [...args.dataSource].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      });
      setSortedData(sorted);
      setLoading(false);
    }, 2000);
  };

  return (
    <Table
      {...args}
      dataSource={sortedData}
      loading={loading}
      onSort={handleSort}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  columns: [
    {
      label: "Name",
      key: "name",
      align: "center",
      sortable: true,
    },
    {
      label: "Age",
      key: "age",
      align: "center",
      sortable: true,
    },
    {
      label: "Address",
      key: "address",
      align: "center",
      sortable: false,
    },
  ],
  dataSource: [
    { name: "John Doe", age: 28, address: "123 Main St" },
    { name: "Jane Smith", age: 34, address: "456 Oak St" },
    { name: "Sam Johnson", age: 45, address: "789 Pine St" },
  ],
};

export const TableHeader: StoryFn<typeof TableHead> = (args) => {
  return <TableHead {...args} />;
};

TableHeader.args = {
  label: "Table Header",
  align: "end",
  iconName: "user",
  withSort: true,
  defaultSort: "asc",
};

export const TableSticky: StoryFn<typeof Table> = (args) => {
  return <Table {...args} />;
};

TableSticky.args = {
  columns: [
    {
      label: "Name",
      key: "name",
      align: "center",
      sortable: true,
    },
    {
      label: "Age",
      key: "age",
      align: "center",
      sortable: true,
    },
    {
      label: "Address",
      key: "address",
      align: "center",
      sortable: false,
    },
  ],
  dataSource: [
    { name: "John Doe", age: 28, address: "123 Main St" },
    { name: "Jane Smith", age: 34, address: "456 Oak St" },
    { name: "Sam Johnson", age: 45, address: "789 Pine St" },
    { name: "John Doe", age: 28, address: "123 Main St" },
    { name: "Jane Smith", age: 34, address: "456 Oak St" },
    { name: "Sam Johnson", age: 45, address: "789 Pine St" },
    { name: "John Doe", age: 28, address: "123 Main St" },
  ],
  variant: "sticky",
  classNameWrapper: "max-h-96",
};

export const TableWithAction: StoryFn<typeof Table> = (args) => {
  return <Table {...args} />;
};

TableWithAction.args = {
  columns: [
    {
      label: "Name",
      key: "name",
      align: "center",
      sortable: true,
    },
    {
      label: "Age",
      key: "age",
      align: "center",
      sortable: true,
    },
    {
      label: "Address",
      key: "address",
      align: "center",
    },
    {
      label: "Action",
      key: "address",
      align: "center",
      action: (data) => (
        <Button
          label="Action"
          onClick={() => alert(`Clicked on ${data.name}`)}
        />
      ),
    },
  ],
  dataSource: [
    { name: "John Doe", age: 28, address: "123 Main St" },
    { name: "Jane Smith", age: 34, address: "456 Oak St" },
  ],
};

export const TableWithPagination: StoryFn<typeof Table> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 5; // Adjust items per page as needed

  const columns: IColumnsProps[] = [
    {
      label: "Name",
      key: "name",
      align: "center",
      sortable: true,
    },
    {
      label: "Age",
      key: "age",
      sortable: true,
    },
    {
      label: "Address",
      key: "address",
    },
    {
      label: "Action",
      key: "action",
      action: (data) => (
        <Button
          label="Action"
          variant="dark"
          onClick={() => alert(`Clicked on ${data.name}`)}
        />
      ),
    },
  ];

  const randomNames = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Michael Brown",
    "Emily Davis",
    "William Miller",
    "Olivia Wilson",
    "James Moore",
    "Isabella Taylor",
    "Benjamin Anderson",
    "Sophia Thomas",
    "Liam Jackson",
    "Mia White",
    "Noah Harris",
    "Ava Martin",
    "Logan Thompson",
    "Charlotte Garcia",
    "Lucas Martinez",
    "Amelia Robinson",
    "Mason Clark",
    "Ethan Rodriguez",
    "Harper Lewis",
    "Aiden Lee",
    "Evelyn Walker",
    "Jacob Hall",
    "Abigail Young",
    "Jackson Allen",
    "Ella King",
    "Jack Wright",
    "Chloe Scott",
  ];

  const randomAddresses = [
    "123 Main St",
    "456 Oak St",
    "789 Pine St",
    "101 Maple Ave",
    "202 Cedar Rd",
    "303 Birch Blvd",
    "404 Walnut St",
    "505 Chestnut St",
    "606 Elm St",
    "707 Spruce St",
    "808 Aspen St",
    "909 Willow St",
    "111 Acacia Ave",
    "212 Magnolia St",
    "313 Palm Dr",
    "414 Poplar St",
    "515 Redwood Rd",
    "616 Cypress Ln",
    "717 Sycamore St",
    "818 Alder Dr",
    "919 Ash St",
    "121 Juniper St",
    "232 Hawthorn St",
    "343 Sequoia Dr",
    "454 Fir Ave",
    "565 Larch St",
    "676 Pinecone Rd",
    "787 Maplewood St",
    "898 Beech St",
    "909 Dogwood Ln",
  ];

  const randomAge = () => Math.floor(Math.random() * 60) + 18;

  const dataSource = Array.from({ length: 100 }, (_, i) => ({
    name: randomNames[i % randomNames.length].substring(0, 30),
    age: randomAge(),
    address: randomAddresses[i % randomAddresses.length].substring(0, 30),
  }));

  const sortedData = dataSource.slice().sort((a, b) => {
    if (sortKey && a[sortKey] && b[sortKey]) {
      if (sortDirection === "asc") {
        return a[sortKey].toString().localeCompare(b[sortKey].toString());
      } else {
        return b[sortKey].toString().localeCompare(a[sortKey].toString());
      }
    }
    return 0;
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: string) => {
    setLoading(true);
    setTimeout(() => {
      if (key === sortKey) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortKey(key);
        setSortDirection("asc");
      }
      setLoading(false);
    }, 1000);
  };

  const onPageChange = (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full">
      <Table
        columns={columns}
        dataSource={paginatedData}
        loading={loading}
        onSort={handleSort}
      />
      <Pagination
        currentPage={currentPage}
        total={sortedData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
