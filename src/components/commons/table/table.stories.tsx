import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { TableHeader as TableHead } from "./table-header";
import { Table } from "./";
import Button from "../button";

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
