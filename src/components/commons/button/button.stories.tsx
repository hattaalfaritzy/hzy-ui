import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./";

const meta: Meta<typeof Button> = {
  title: "Components/Commons/Button",
  component: Button as Meta<typeof Button>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => {
  return (
    <Button
      {...args}
      onClick={() => {}}
      label="Lihat di olx.com"
      className="w-full"
      align="start"
    />
  );
};

export const Base = Template.bind({});
