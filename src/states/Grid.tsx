import React, { useState } from "react"
import { type ImageAsset, images } from "./../lib/images"
import Image0001 from "./../assets/images/0001.png"
import GridHeader from "../components/GridHeader"
import ImageGridModal from "../components/ImageGridModal"
import ActiveImageModal from "../components/ActiveImageModal"
import { GridButton } from "../components/GridButton"

function Grid() {
  const [isImageGridModalOpen, setIsImageGridModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<ImageAsset | null>(null)

  return (
    <>
      <article className="flow">
        <GridHeader />
        <section className="grid grid-cols-2 grid-rows-2 gap-2 min-h-screen">
          <GridButton>
            <p>Some content</p>
          </GridButton>

          <GridButton onClick={() => setIsImageGridModalOpen(true)}>
            <img
              src={Image0001}
              alt="Aerial view of a city with buildings and roads"
              className="w-100 h-100 object-cover"
            />
          </GridButton>

          <GridButton>
            <p>Some content</p>
          </GridButton>

          <GridButton>
            <p>Some content</p>
          </GridButton>
        </section>
      </article>

      {isImageGridModalOpen && (
        <ImageGridModal
          images={images}
          onClose={() => setIsImageGridModalOpen(false)}
          onSelect={(img) => {
            setActiveImage(img)
            setIsImageGridModalOpen(false)
          }}
        />
      )}

      {activeImage && (
        <ActiveImageModal
          image={activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  )
}

export default Grid
