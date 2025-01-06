import type { Meta, StoryFn } from "@storybook/react";
import { Dropdown } from ".";

export default {
  title: "Components/Commons/Dropdown",
  component: Dropdown as Meta<typeof Dropdown>["component"],
} as Meta<typeof Dropdown>;

export const DropdownDefault: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      label="Dropdown"
      placeholder="Select an option"
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
      onSelect={(option) => alert("Selected: " + option.label)}
    />
  );
};

export const DropdownLabel: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      label="Dropdown Label"
      placeholder="Select an option"
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
    />
  );
};

export const DropdownImportant: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      label="Required Field"
      important
      placeholder="Select an option"
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
    />
  );
};

export const DropdownPlaceholder: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      placeholder="Choose an option"
      options={[
        { label: "Option A", value: "A" },
        { label: "Option B", value: "B" },
      ]}
    />
  );
};

export const DropdownOption: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      options={[
        { label: "First Option", value: "1" },
        { label: "Second Option", value: "2" },
      ]}
    />
  );
};

export const DropdownInitialSelected: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      initialSelected={{ label: "Option 1", value: "1" }}
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
    />
  );
};

export const DropdownOnSelect: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown
      {...args}
      options={[
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ]}
      onSelect={(option) => alert("Selected: " + option.label)}
    />
  );
};
