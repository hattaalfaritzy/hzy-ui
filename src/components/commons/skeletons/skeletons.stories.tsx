import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Skeletons } from ".";

const meta: Meta<typeof Skeletons> = {
  title: "Components/Commons/Skeletons",
  component: Skeletons as Meta<typeof Skeletons>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Skeletons> = (args) => {
  return <Skeletons {...args} />;
};

export const Base = Template.bind({});
