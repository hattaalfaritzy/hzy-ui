import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const props = {
    isOpen,
    onClose: closeModal,
  };

  return {
    openModal,
    closeModal,
    props,
  };
}
