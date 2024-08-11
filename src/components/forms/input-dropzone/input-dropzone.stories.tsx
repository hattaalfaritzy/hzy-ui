import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputDropzone } from ".";

const meta: Meta<typeof InputDropzone> = {
  title: "Components/Forms/Input Dropzone",
  component: InputDropzone,
  tags: ["autodocs"],
  args: {
    label: "Input Dropzone",
    important: true,
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
  },
};

export default meta;

const Template: StoryFn<typeof InputDropzone> = (args) => {
  const handleDrop = (acceptedFiles: File[]) => {
    console.log("Dropped files:", acceptedFiles);
  };

  return <InputDropzone {...args} onDrop={handleDrop} />;
};

export const Base = Template.bind({});
