import {createContext, ReactNode, useRef} from "react";
import {Modal} from "@/components";
import {TModalRef} from "@/components/modal/Modal.tsx";

type TModalContext = {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<TModalContext>({
  openModal: () => {},
  closeModal: () => {},
})

const ModalContextProvider = ({ children }: {children: ReactNode}) => {

  const modalRef = useRef<TModalRef>(null);

  const openModal = () => {
    modalRef.current?.open();
  }

  const closeModal = () => {
    modalRef.current?.close();
  }

  const ctxValue: TModalContext = {
    openModal,
    closeModal,
  }

  return <ModalContext.Provider value={ctxValue}>
    {children}
    <Modal ref={modalRef} />
  </ModalContext.Provider>
}

export {ModalContext};
export default ModalContextProvider;
