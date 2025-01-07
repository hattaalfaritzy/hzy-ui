import type { Meta, StoryFn } from "@storybook/react";
import { Modal } from ".";
import { Button } from "../button";
import useModal from "../../../hooks/useModal";

export default {
  title: "Components/Commons/Modal",
  component: Modal as Meta<typeof Modal>["component"],
} as Meta<typeof Modal>;

export const ModalDefault: StoryFn<typeof Modal> = (args) => {
  const modal = useModal();
  return (
    <>
      <Button label="Open Modal" onClick={modal.openModal} />
      <Modal {...args} {...modal.props} className="p-10">
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
