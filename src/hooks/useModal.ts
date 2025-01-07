import { useState } from "react";

export const useModal = () => {
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
};

export default useModal;
