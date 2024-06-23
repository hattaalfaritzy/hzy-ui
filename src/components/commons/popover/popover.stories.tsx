import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Popover } from ".";
import { Button } from "../button";

const meta: Meta<typeof Popover> = {
  title: "Components/Commons/Popover",
  component: Popover as Meta<typeof Popover>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Popover> = (args) => {
  return (
    <Popover
      {...args}
      trigger={<Button stopPropagation={false} label="Open Popover" />}
      classNameWrapper="flex justify-center items-center w-full h-[400px]"
      className="text-sm text-gray-600"
    >
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </span>
    </Popover>
  );
};

export const Base = Template.bind({});
