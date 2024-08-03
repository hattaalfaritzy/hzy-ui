import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputDropzone } from ".";

const meta: Meta<typeof InputDropzone> = {
  title: "Components/Forms/Input Dropzone",
  component: InputDropzone as Meta<typeof InputDropzone>["component"],
  tags: ["autodocs"],
  args: {
    maxFiles: 3,
    label: "Input Dropdown",
    important: true,
  },
};

export default meta;

const Template: StoryFn<typeof InputDropzone> = (args) => {
  const handleFilesDrop = (files: FileList) => {
    console.log("Files dropped:", files);
  };

  return <InputDropzone {...args} onFilesDrop={handleFilesDrop} />;
};

export const Base = Template.bind({});
