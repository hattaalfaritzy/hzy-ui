import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Message } from "./";

const meta: Meta<typeof Message> = {
  title: "Components/Commons/Message",
  component: Message as Meta<typeof Message>["component"],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["dark", "light", "informative", "success", "warning", "error"],
      control: { type: "radio" },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Message> = (args) => {
  return <Message label="Message Text" {...args} />;
};

export const Base = Template.bind({});
