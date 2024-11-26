import {useContext} from "react";
import {ModalContext} from "@/context/ModalContext.tsx";

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  const {openModal, closeModal} = context;

  return { openModal, closeModal };
}

export default useModal