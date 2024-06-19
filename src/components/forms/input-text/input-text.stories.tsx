import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputText } from ".";

const meta: Meta<typeof InputText> = {
  title: "Components/Forms/Input Text",
  component: InputText as Meta<typeof InputText>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputText> = (args) => {
  return <InputText {...args} />;
};

export const Base = Template.bind({});
