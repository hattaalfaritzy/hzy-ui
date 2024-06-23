import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Dropdown } from ".";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Commons/Dropdown",
  component: Dropdown as Meta<typeof Dropdown>["component"],
  tags: ["autodocs"],
  args: {
    label: "Dropdown",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
  },
};

export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => {
  return <Dropdown {...args} />;
};

export const Base = Template.bind({});
