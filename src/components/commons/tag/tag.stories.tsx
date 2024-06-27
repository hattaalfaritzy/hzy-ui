import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Tag } from ".";

const meta: Meta<typeof Tag> = {
  title: "Components/Commons/Tag",
  component: Tag as Meta<typeof Tag>["component"],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["dark", "light", "informative", "success", "warning", "error"],
      control: { type: "radio" },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Tag> = (args) => {
  return <Tag label="Tag Text" {...args} />;
};

export const Base = Template.bind({});
