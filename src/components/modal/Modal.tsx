import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import styles from './modal.module.css'
import {TrackingForm} from "@/components";

const {modal} = styles;
export type TModalRef = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef((_, ref) => {

  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal()
    },
    close() {
      dialogRef.current?.close()
    }
  }))

  return createPortal(
    <dialog ref={dialogRef} className={modal}>
      <TrackingForm />
    </dialog>
  , document.getElementById("modal")!)
})

export default Modal;