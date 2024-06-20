import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputSearch } from ".";

const meta: Meta<typeof InputSearch> = {
  title: "Components/Forms/Input Search",
  component: InputSearch as Meta<typeof InputSearch>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputSearch> = (args) => {
  return <InputSearch {...args} />;
};

export const Base = Template.bind({});
