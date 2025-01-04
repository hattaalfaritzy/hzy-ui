import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Button } from "./";
import Icons from "../icons";

export default {
  title: "Components/Commons/Button",
  component: Button as Meta<typeof Button>["component"],
} as Meta<typeof Button>;

export const ButtonDefault: StoryFn<typeof Button> = (args) => {
  return <Button label="Button" {...args} />;
};

export const ButtonLabel: StoryFn<typeof Button> = (args) => {
  return <Button label="Click Me" {...args} />;
};

export const ButtonChildren: StoryFn<typeof Button> = (args) => {
  return (
    <Button {...args}>
      <span>Click Me</span>
    </Button>
  );
};

export const ButtonLoading: StoryFn<typeof Button> = (args) => {
  return <Button label="Loading" loading {...args} />;
};

export const ButtonRounded: StoryFn<typeof Button> = (args) => {
  return <Button label="Rounded Button" rounded {...args} />;
};

export const ButtonDisabled: StoryFn<typeof Button> = (args) => {
  return <Button label="Disabled Button" disabled {...args} />;
};

export const ButtonFullWidth: StoryFn<typeof Button> = (args) => {
  return <Button label="Full Width Button" fullWidth {...args} />;
};

export const ButtonDark: StoryFn<typeof Button> = (args) => {
  return <Button label="Dark Button" variant="dark" {...args} />;
};

export const ButtonLight: StoryFn<typeof Button> = (args) => {
  return <Button label="Light Button" variant="light" {...args} />;
};

export const ButtonInformative: StoryFn<typeof Button> = (args) => {
  return <Button label="Informative Button" variant="informative" {...args} />;
};

export const ButtonSuccess: StoryFn<typeof Button> = (args) => {
  return <Button label="Success Button" variant="success" {...args} />;
};

export const ButtonWarning: StoryFn<typeof Button> = (args) => {
  return <Button label="Warning Button" variant="warning" {...args} />;
};

export const ButtonError: StoryFn<typeof Button> = (args) => {
  return <Button label="Error Button" variant="error" {...args} />;
};

export const ButtonSmall: StoryFn<typeof Button> = (args) => {
  return <Button label="Small Button" size="sm" {...args} />;
};

export const ButtonMedium: StoryFn<typeof Button> = (args) => {
  return <Button label="Medium Button" size="md" {...args} />;
};

export const ButtonIconLeft: StoryFn<typeof Button> = (args) => {
  return (
    <Button label="Edit Data" iconLeft={<Icons name="edit" />} {...args} />
  );
};

export const ButtonIconRight: StoryFn<typeof Button> = (args) => {
  return (
    <Button label="Add Cart" iconRight={<Icons name="cart" />} {...args} />
  );
};
