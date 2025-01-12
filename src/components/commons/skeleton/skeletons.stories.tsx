import type { Meta, StoryFn } from "@storybook/react";
import { Skeleton } from ".";

export default {
  title: "Components/Commons/Skeleton",
  component: Skeleton as Meta<typeof Skeleton>["component"],
} as Meta<typeof Skeleton>;

export const SkeletonDefault: StoryFn<typeof Skeleton> = (args) => {
  return <Skeleton {...args} />;
};

export const SkeletonSizes: StoryFn<typeof Skeleton> = (args) => {
  return <Skeleton {...args} width={200} height={100} />;
};

export const SkeletonRounded: StoryFn<typeof Skeleton> = (args) => {
  return <Skeleton {...args} width={100} height={100} rounded />;
};

export const SkeletonCustomStyling: StoryFn<typeof Skeleton> = (args) => {
  return (
    <Skeleton
      {...args}
      width={150}
      height={20}
      className="bg-gray-300/30 rounded-md"
    />
  );
};
