import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Modal } from ".";
import { Button } from "../button";
import useModal from "../../../hooks/useModal";

const meta: Meta<typeof Modal> = {
  title: "Components/Commons/Modal",
  component: Modal as Meta<typeof Modal>["component"],
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
    },
    classNameWrapper: {
      control: { type: "text" },
    },
    classNameBackdrop: {
      control: { type: "text" },
    },
    isOpen: {
      control: { type: "boolean" },
    },
    backDrop: {
      control: { type: "boolean" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Modal> = (args) => {
  const modal = useModal();
  return (
    <>
      <Button label="Open Modal" onClick={modal.openModal} />
      <Modal {...args} {...modal.props}>
        <span>Modal</span>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </Modal>
    </>
  );
};

export const Base = Template.bind({});
