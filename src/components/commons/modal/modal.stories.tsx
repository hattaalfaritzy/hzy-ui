import type { Meta, StoryFn } from "@storybook/react";
import { Modal } from ".";
import { Button } from "../button";
import { useState } from "react";
import Dropdown from "../dropdown";
import { InputSwitch } from "@/components/forms";

export default {
  title: "Components/Commons/Modal",
  component: Modal as Meta<typeof Modal>["component"],
} as Meta<typeof Modal>;

export const ModalDefault: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Button label="Open Modal" onClick={handleModal} />
      <Modal {...args} isOpen={isOpen} onClose={handleModal} className="p-4">
        <span className="text-sm">Modal</span>
        <span className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </Modal>
    </>
  );
};

export const ModalSize: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSizeChange = (selectedOption: {
    label: string;
    value: string;
  }) => {
    setSize(selectedOption.value as "sm" | "md" | "lg");
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col justify-start items-center space-y-4">
        <Button label="Open Modal" onClick={handleModal} />
        <Dropdown
          label="Change Size"
          initialSelected={{ label: "Medium", value: "md" }}
          options={[
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ]}
          onSelect={handleSizeChange}
        />
      </div>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleModal}
        size={size}
        className="p-4"
      >
        <span className="text-sm">Modal</span>
        <span className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </Modal>
    </div>
  );
};

export const ModalBackdrop: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [backDrop, setBackDrop] = useState<boolean>(true);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBackdropToggle = () => {
    setBackDrop((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col justify-start items-center space-y-4">
        <Button label="Open Modal" onClick={handleModal} />
        <InputSwitch
          label="Toggle Backdrop"
          checked={backDrop}
          onChange={handleBackdropToggle}
        />
      </div>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleModal}
        backDrop={backDrop}
        className="p-4"
      >
        <span className="text-sm">Modal</span>
        <span className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </Modal>
    </div>
  );
};

export const ModalFallbackClose: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Button label="Open Modal" onClick={handleModal} />
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => {
          alert("Modal closed!");
          handleModal();
        }}
        className="p-4"
      >
        <span className="text-sm">Modal</span>
        <span className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </Modal>
    </>
  );
};
