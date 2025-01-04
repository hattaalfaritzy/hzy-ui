import React, { useState } from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Accordion } from "./";
import Icons from "../icons";

export default {
  title: "Components/Commons/Accordion",
  component: Accordion as Meta<typeof Accordion>["component"],
} as Meta<typeof Accordion>;

export const AccordionDefault: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion title="Example Accordion" {...args}>
      <span className="text-sm">This is the content inside the accordion.</span>
    </Accordion>
  );
};

export const AccordionTitle: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion title="Title Accordion" {...args}>
      <span className="text-sm">This is the content inside the accordion.</span>
    </Accordion>
  );
};

export const AccordionChildren: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion title="Accordion with Content" {...args}>
      <span className="text-sm">
        This is the accordion content. You can include text, components, or
        other elements here.
      </span>
    </Accordion>
  );
};

export const AccordionOpened: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion title="Open by Default" defaultOpen {...args}>
      <span className="text-sm">This accordion starts open.</span>
    </Accordion>
  );
};

export const AccordionDisabled: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion title="Disabled Accordion" disabled {...args}>
      <span className="text-sm">This accordion cannot be toggled.</span>
    </Accordion>
  );
};

export const AccordionOpenedDisabled: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion title="Disabled Accordion Opened" defaultOpen disabled {...args}>
      <span className="text-sm">This accordion cannot be toggled.</span>
    </Accordion>
  );
};

export const AccordionWithIcon: StoryFn<typeof Accordion> = (args) => {
  return (
    <Accordion
      title="Accordion with Icon"
      withIcon={<Icons name="gear" className="fill-black" />}
      {...args}
    >
      <span className="text-sm">This accordion has an icon.</span>
    </Accordion>
  );
};

export const AccordionOnClick: StoryFn<typeof Accordion> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Accordion
      title="Accordion Title"
      withIcon={
        <Icons name={isOpen ? "eye" : "eye-slash"} className="fill-black" />
      }
      onClick={handleToggle}
      {...args}
    >
      <span className="text-sm">Accordion Content</span>
    </Accordion>
  );
};
