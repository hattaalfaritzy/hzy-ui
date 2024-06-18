import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Card } from "./";

const meta: Meta<typeof Card> = {
  title: "Components/Commons/Card",
  component: Card as Meta<typeof Card>["component"],
  tags: ["autodocs"],
  args: {
    withShadow: true,
    rounded: true,
  },
};

export default meta;

const Template: StoryFn<typeof Card> = (args) => {
  return (
    <Card {...args}>
      <span className="text-xs">Card Content</span>
    </Card>
  );
};

export const Base = Template.bind({});
