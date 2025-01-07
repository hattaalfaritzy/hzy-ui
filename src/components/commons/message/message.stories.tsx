import type { Meta, StoryFn } from "@storybook/react";
import { Message } from "./";

export default {
  title: "Components/Commons/Message",
  component: Message as Meta<typeof Message>["component"],
} as Meta<typeof Message>;

export const MessageDefault: StoryFn<typeof Message> = (args) => {
  return <Message label="Default Message" {...args} />;
};

export const MessageVariant: StoryFn<typeof Message> = (args) => {
  return (
    <div className="custom-canvas full columns">
      <Message label="Dark Message" variant="dark" {...args} />
      <Message label="Light Message" variant="light" {...args} />
      <Message label="Informative Message" variant="informative" {...args} />
      <Message label="Success Message" variant="success" {...args} />
      <Message label="Error Message" variant="error" {...args} />
      <Message label="Warning Message" variant="warning" {...args} />
    </div>
  );
};

export const MessageLabel: StoryFn<typeof Message> = (args) => {
  return <Message label="This is a message label" {...args} />;
};

export const MessageOnClick: StoryFn<typeof Message> = (args) => {
  return (
    <Message
      {...args}
      label="Click me to trigger an action!"
      variant="warning"
      onClick={() => alert("Message clicked!")}
    />
  );
};
