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

export const ButtonVariant: StoryFn<typeof Button> = (args) => {
  return (
    <div className="custom-canvas">
      <Button label="Dark Button" variant="dark" {...args} />
      <Button label="Light Button" variant="light" {...args} />
      <Button label="Informative Button" variant="informative" {...args} />
      <Button label="Success Button" variant="success" {...args} />
      <Button label="Warning Button" variant="warning" {...args} />
      <Button label="Error Button" variant="error" {...args} />
    </div>
  );
};

export const ButtonVariantOutline: StoryFn<typeof Button> = (args) => {
  return (
    <div className="custom-canvas">
      <Button label="Dark Button" variant="dark" outline {...args} />
      <Button label="Light Button" variant="light" outline {...args} />
      <Button
        label="Informative Button"
        variant="informative"
        outline
        {...args}
      />
      <Button label="Success Button" variant="success" outline {...args} />
      <Button label="Warning Button" variant="warning" outline {...args} />
      <Button label="Error Button" variant="error" outline {...args} />
    </div>
  );
};

export const ButtonAlign: StoryFn<typeof Button> = (args) => {
  return (
    <div className="custom-canvas">
      <Button label="Start Button" align="start" fullWidth {...args} />
      <Button label="Center Button" align="center" fullWidth {...args} />
      <Button label="End Button" align="end" fullWidth {...args} />
    </div>
  );
};

export const ButtonSmall: StoryFn<typeof Button> = (args) => {
  return <Button label="Small Button" size="sm" {...args} />;
};

export const ButtonMedium: StoryFn<typeof Button> = (args) => {
  return <Button label="Medium Button" size="md" {...args} />;
};

export const ButtonLarge: StoryFn<typeof Button> = (args) => {
  return <Button label="Large Button" size="lg" {...args} />;
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

export const ButtonOnClick: StoryFn<typeof Button> = (args) => {
  return (
    <Button
      label="Click Me"
      onClick={() => alert("Button clicked!")}
      {...args}
    />
  );
};
