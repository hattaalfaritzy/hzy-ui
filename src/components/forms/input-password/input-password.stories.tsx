import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputPassword } from ".";

const meta: Meta<typeof InputPassword> = {
  title: "Components/Forms/Input Password",
  component: InputPassword as Meta<typeof InputPassword>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputPassword> = (args) => {
  return <InputPassword {...args} />;
};

export const Base = Template.bind({});
