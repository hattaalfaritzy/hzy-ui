import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Tooltip } from ".";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Commons/Tooltip",
  component: Tooltip as Meta<typeof Tooltip>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Tooltip> = (args) => {
  return (
    <Tooltip
      {...args}
      content="This is Tooltip content"
      classNameWrapper="flex justify-center items-center w-full h-[400px]"
    >
      <Button stopPropagation={false} label="Open Tooltip" />
    </Tooltip>
  );
};

export const Base = Template.bind({});
