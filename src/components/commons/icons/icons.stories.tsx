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
    <div className="flex flex-col space-y-6 mix-blend-difference p-20">
      <span className="text-lg lg:text-2xl text-white/70">
        List Components Icons
      </span>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 h-fit-content">
        {Object.values(icons).map((Icon: any, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center py-6 border-2 border-white/70 rounded-lg space-y-3"
          >
            <Icon className="fill-white/70" width={20} />
            <div className="text-xs truncate text-white/70">
              {iconsNames[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ListColors: StoryFn<typeof Icons> = () => <ListIcons />;
