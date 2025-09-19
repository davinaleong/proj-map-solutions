import { type ImageAsset } from "./../lib/images"
import Modal from "./Modal"

type ImageGridModalProps = {
  images: ImageAsset[]
  onSelect: (image: ImageAsset) => void
  onClose: () => void
}

function ImageGridModal({ images, onSelect, onClose }: ImageGridModalProps) {
  return (
    <Modal onClose={onClose} className="max-w-[60ch]">
      <div className="grid grid-cols-3 gap-4 overflow-y-auto">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            className="cursor-pointer max-w-[15ch] min-h-[15ch] font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm overflow-hidden aspect-square hover:opacity-70"
            onClick={() => onSelect(image)}
          >
            <img
              className="w-100 h-100 object-cover"
              src={image.src}
              alt={image.alt}
            />
          </button>
        ))}
      </div>
    </Modal>
  )
}

export default ImageGridModal
