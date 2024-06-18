import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { ImageWithFallback } from "./";

const meta: Meta<typeof ImageWithFallback> = {
  title: "Components/Commons/ImageWithFallback",
  component: ImageWithFallback as Meta<typeof ImageWithFallback>["component"],
  tags: ["autodocs"],
  args: {
    alt: "Logo",
    src: "./image.png",
  },
};

export default meta;

const Template: StoryFn<typeof ImageWithFallback> = (args) => {
  return <ImageWithFallback {...args} />;
};

export const Base = Template.bind({});
