import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { InputAutocomplete } from ".";

const meta: Meta<typeof InputAutocomplete> = {
  title: "Components/Forms/Input Autocomplete",
  component: InputAutocomplete as Meta<typeof InputAutocomplete>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof InputAutocomplete> = (args) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <InputAutocomplete
      {...args}
      value={selectedOption}
      onChange={handleOptionSelect}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  options: [
    "London",
    "Paris",
    "New York",
    "Tokyo",
    "Sydney",
    "Berlin",
    "Rio de Janeiro",
    "Amsterdam",
    "Bangkok",
    "Cairo",
  ],
  label: "Select a city",
  placeholder: "Search city...",
};
