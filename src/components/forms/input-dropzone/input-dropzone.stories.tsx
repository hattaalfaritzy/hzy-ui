import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputDropzone } from ".";

const meta: Meta<typeof InputDropzone> = {
  title: "Components/Forms/Input Dropzone",
  component: InputDropzone as Meta<typeof InputDropzone>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputDropzone> = (args) => {
  return <InputDropzone {...args} />;
};

export const Base = Template.bind({});
