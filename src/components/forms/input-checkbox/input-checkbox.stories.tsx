import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputCheckbox } from ".";

const meta: Meta<typeof InputCheckbox> = {
  title: "Components/Forms/Input Checkbox",
  component: InputCheckbox as Meta<typeof InputCheckbox>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputCheckbox> = (args) => {
  return <InputCheckbox {...args} />;
};

export const Base = Template.bind({});
