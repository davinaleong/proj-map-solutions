import { type ImageAsset } from "./../lib/images"
import Modal from "./Modal"

type ActiveImageModalProps = {
  image: ImageAsset
  onClose: () => void
}

function ActiveImageModal({ image, onClose }: ActiveImageModalProps) {
  return (
    <Modal onClose={onClose} className="max-w-[90vw] max-h-[90vh]">
      <div className="grid place-items-center">
        <img
          className="max-h-[80vh] max-w-[80vw] object-contain"
          src={image.src}
          alt={image.alt}
        />
      </div>
    </Modal>
  )
}
export default ActiveImageModal
