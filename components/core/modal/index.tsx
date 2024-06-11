'use client'
import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface IModalProps {
  open: boolean;
  children: ReactNode;
}

const Modal = ({ open, children }: IModalProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [])
  
  if (!open || !mounted) return null;

  return ReactDOM.createPortal(
    <div className="
      w-full h-full fixed top-0 left-0 flex
      justify-center items-center bg-[rgba(0,0,0,0.5)]
      z-[8000]
    ">
      {children}
    </div>,
    document.getElementById('modal-root') as HTMLElement
  )
};

export default Modal;
