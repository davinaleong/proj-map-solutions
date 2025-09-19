import React, { useState } from "react"
import { type ImageAsset, images } from "./../lib/images"
import Image0001 from "./../assets/images/0001.png"
import GridHeader from "../components/GridHeader"
import ImageGridModal from "../components/ImageGridModal"
import ActiveImageModal from "../components/ActiveImageModal"

function Grid() {
  const [isImageGridModalOpen, setIsImageGridModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<ImageAsset | null>(null)

  return (
    <>
      <article className="flow">
        <GridHeader />
        <section className="grid grid-cols-2 grid-rows-2 gap-2 min-h-screen">
          <button className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:opacity-70 text-xl">
            <p>Some content</p>
          </button>

          <button
            className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square text-xl hover:opacity-70"
            type="button"
            onClick={() => setIsImageGridModalOpen(true)}
          >
            <img
              src={Image0001}
              alt="Aerial view of a city with buildings and roads"
              className="w-100 h-100 object-cover"
            />
          </button>

          <button className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:opacity-70 text-xl">
            <p>Some content</p>
          </button>

          <button className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:opacity-70 text-xl">
            <p>Some content</p>
          </button>
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
