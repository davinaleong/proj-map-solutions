import Modal from "./Modal"
import IconMoveLeft from "./../assets/icons/move-left.svg"
import IconMoveRight from "./../assets/icons/move-right.svg"
import { type ImageAsset } from "./../lib/images"

type MapModalProps = {
  images: ImageAsset[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function MapModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: MapModalProps) {
  if (images.length === 0) return null

  const currentImage = images[currentIndex]

  return (
    <Modal onClose={onClose} className="min-w-[60ch]">
      {/* Controls */}
      <div className="absolute top-2 left-2 flex items-center gap-4">
        <button
          className="cursor-pointer shadow-none"
          type="button"
          onClick={onPrev}
        >
          <img src={IconMoveLeft} alt="Previous" width="20" height="20" />
        </button>
        <button
          className="cursor-pointer shadow-none"
          type="button"
          onClick={onNext}
        >
          <img src={IconMoveRight} alt="Next" width="20" height="20" />
        </button>
      </div>

      {/* Image */}
      <div className="grid place-items-center">
        <img
          className="max-h-[80vh] max-w-[80vw] object-contain"
          src={currentImage.src}
          alt={currentImage.alt}
        />
      </div>
    </Modal>
  )
}

export default MapModal
