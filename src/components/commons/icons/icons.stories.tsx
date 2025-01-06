import type { Meta, StoryFn } from "@storybook/react";
import Icons, { icons } from "./";

export default {
  title: "Components/Commons/Icons",
  component: Icons as Meta<typeof Icons>["component"],
} as Meta<typeof Icons>;

export const IconDefault: StoryFn<typeof Icons> = (args) => {
  return <Icons {...args} name="activity" />;
};

export const IconCustomized: StoryFn<typeof Icons> = (args) => {
  return (
    <div className="custom-canvas">
      <Icons {...args} name="broken-image" className="w-8 h-8 fill-blue-500" />
      <Icons {...args} name="activity" className="w-8 h-8 stroke-blue-500" />
    </div>
  );
};

const List = () => {
  const iconsNames = Object.keys(icons);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 h-fit-content">
      {Object.values(icons).map((Icon: any, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center py-6 border-2 border-white/70 rounded-lg space-y-3"
        >
          <Icon className="fill-white/70 stroke-white/70" width={20} />
          <div className="text-xxs truncate text-white/70">
            {iconsNames[index]}
          </div>
        </div>
      ))}
    </div>
  );
};

export const IconLists: StoryFn<typeof Icons> = () => <List />;
