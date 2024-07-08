import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputSwitch } from ".";

const meta: Meta<typeof InputSwitch> = {
  title: "Components/Forms/Input Switch",
  component: InputSwitch as Meta<typeof InputSwitch>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputSwitch> = (args) => {
  return <InputSwitch {...args} />;
};

export const Base = Template.bind({});
