import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import Icons, { icons } from "./";

const meta: Meta<typeof Icons> = {
  title: "Components/Commons/Icons",
  component: Icons as Meta<typeof Icons>["component"],
  tags: ["autodocs"],
  args: {
    name: "dashboard",
  },
};

export default meta;

const Template: StoryFn<typeof Icons> = (args) => {
  return <Icons {...args} name={args.name} />;
};

export const Base = Template.bind({});

const ListIcons = () => {
  const iconsNames = Object.keys(icons);
  return (
    <div className="flex flex-col space-y-6">
      <span className="text-lg lg:text-3xl text-black">
        List Components Icons
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 h-fit-content">
        {Object.values(icons).map((Icon: any, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center py-8 border-2 border-gray-200 rounded-lg space-y-2"
          >
            <Icon className="fill-neutral-700" width={20} />
            <div className="text-sm truncate">{iconsNames[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ListColors: StoryFn<typeof Icons> = () => <ListIcons />;
