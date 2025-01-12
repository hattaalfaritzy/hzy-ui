import type { Meta, StoryFn } from "@storybook/react";
import { Tag } from ".";

export default {
  title: "Components/Commons/Tag",
  component: Tag as Meta<typeof Tag>["component"],
} as Meta<typeof Tag>;

export const TagDefault: StoryFn<typeof Tag> = (args) => {
  return <Tag {...args} label="Default Tag" />;
};

export const TagVariants: StoryFn<typeof Tag> = (args) => {
  return (
    <div className="custom-canvas">
      <Tag label="Dark Tag" variant="dark" {...args} />
      <Tag label="Light Tag" variant="light" {...args} />
      <Tag label="Informative Tag" variant="informative" {...args} />
      <Tag label="Success Tag" variant="success" {...args} />
      <Tag label="Warning Tag" variant="warning" {...args} />
      <Tag label="Error Tag" variant="error" {...args} />
    </div>
  );
};

export const TagCustomClass: StoryFn<typeof Tag> = (args) => {
  return (
    <Tag
      {...args}
      label="Custom Styled Tag"
      className="bg-purple-500"
      classNameLabel="text-white font-bold"
    />
  );
};

export const TagOnClick: StoryFn<typeof Tag> = (args) => {
  return (
    <Tag
      {...args}
      label="Clickable Tag"
      variant="informative"
      onClick={() => alert("Tag clicked!")}
    />
  );
};
