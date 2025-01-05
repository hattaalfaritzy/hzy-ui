import type { Meta, StoryFn } from "@storybook/react";
import { Card } from "./";

export default {
  title: "Components/Commons/Card",
  component: Card as Meta<typeof Card>["component"],
} as Meta<typeof Card>;

export const CardDefault: StoryFn<typeof Card> = (args) => {
  return (
    <Card {...args}>
      <span className="text-xs">Card Default</span>
    </Card>
  );
};

export const CardShadow: StoryFn<typeof Card> = (args) => {
  return (
    <div className="custom-canvas">
      <Card {...args}>
        <span className="text-xs">Card w/ Shadow</span>
      </Card>
      <Card withShadow={false} {...args}>
        <span className="text-xs">Card w/o Shadow</span>
      </Card>
    </div>
  );
};

export const CardRounded: StoryFn<typeof Card> = (args) => {
  return (
    <Card rounded {...args}>
      <span className="text-xs">Card Rounded</span>
    </Card>
  );
};

export const CardOnClick: StoryFn<typeof Card> = (args) => {
  return (
    <Card onClick={() => alert("Card clicked!")} {...args}>
      <span className="text-xs">Card Rounded</span>
    </Card>
  );
};
