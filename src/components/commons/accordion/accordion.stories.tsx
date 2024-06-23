import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Accordion } from "./";

const meta: Meta<typeof Accordion> = {
  title: "Components/Commons/Accordion",
  component: Accordion as Meta<typeof Accordion>["component"],
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion title="Accordion Title" {...args}>
      <span className="text-sm">Accordion Content</span>
    </Accordion>
  );
};

export const Base = Template.bind({});
