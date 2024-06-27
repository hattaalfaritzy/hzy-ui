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
  options: ["Option 1", "Option 2", "Option 3"],
  label: "Select an option",
  placeholder: "Select or type...",
};
