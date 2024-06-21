import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./";

const meta: Meta<typeof Button> = {
  title: "Components/Commons/Button",
  component: Button as Meta<typeof Button>["component"],
  tags: ["autodocs"],
  args: {
    label: "Lihat di olx.com",
    className: "w-full",
    align: "center",
    size: "md",
    variant: "informative",
    outline: false,
  },
  argTypes: {
    variant: {
      options: ["dark", "light", "informative", "success", "warning", "error"],
      control: { type: "radio" },
    },
    align: {
      options: ["start", "center", "end"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Base = Template.bind({});
