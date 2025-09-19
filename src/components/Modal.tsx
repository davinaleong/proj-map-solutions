import React from "react"
import IconX from "./../assets/icons/x.svg"

type ModalProps = {
  children: React.ReactNode
  onClose: () => void
  className?: string
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed grid place-items-center bg-black/70 inset-0 p-4">
      <section className="relative bg-white pt-8 pl-4 pb-4 pr-4 rounded-sm shadow-sm">
        <button
          className="cursor-pointer shadow-none absolute top-2 right-2"
          type="button"
          onClick={onClose}
        >
          <img src={IconX} alt="Close Icon" width="20px" height="20px" />
        </button>
        {children}
      </section>
    </div>
  )
}
export default Modal
