import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputSelect } from ".";

const meta: Meta<typeof InputSelect> = {
  title: "Components/Forms/Input Select",
  component: InputSelect as Meta<typeof InputSelect>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputSelect> = (args) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <InputSelect
      {...args}
      value={selectedOption}
      onOptionSelect={handleOptionSelect}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  options: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
    "Option 11",
    "Option 12",
    "Option 13",
    "Option 14",
    "Option 15",
    "Option 16",
  ],
  label: "Select an option",
  placeholder: "Select or type...",
};
