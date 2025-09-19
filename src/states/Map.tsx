import { useState } from "react"
import MapHeader from "./../components/MapHeader"
import MapHotspot from "./../components/MapHotspot"
import MapImage from "./../components/MapImage"
import MapModal from "./../components/MapModal"
import {
  type ImageAsset,
  images,
  samplePointAImages,
  samplePointBImages,
} from "./../lib/images"

const ImageMap: ImageAsset = images[0]

function Map() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImages, setModalImages] = useState<ImageAsset[]>([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (imgs: ImageAsset[]) => {
    setModalImages(imgs)
    setCurrentImageIndex(0)
    setIsModalOpen(true)
  }

  const handlePrev = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + modalImages.length) % modalImages.length
    )

  const handleNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % modalImages.length)

  return (
    <>
      <article className="h-full flow">
        <MapHeader />

        <section className="relative min-h-screen grid place-items-center">
          <div className="relative w-full max-w-4xl">
            <MapImage image={ImageMap} />

            <MapHotspot
              label="A"
              top="57%"
              left="47%"
              onClick={() => openModal(samplePointAImages)}
            />

            <MapHotspot
              label="B"
              top="59%"
              left="45%"
              onClick={() => openModal(samplePointBImages)}
            />
          </div>
        </section>
      </article>

      {isModalOpen && (
        <MapModal
          images={modalImages}
          currentIndex={currentImageIndex}
          onClose={() => setIsModalOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}

export default Map
