import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputTextarea } from ".";

const meta: Meta<typeof InputTextarea> = {
  title: "Components/Forms/Input Textarea",
  component: InputTextarea as Meta<typeof InputTextarea>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputTextarea> = (args) => {
  return <InputTextarea {...args} />;
};

export const Base = Template.bind({});
