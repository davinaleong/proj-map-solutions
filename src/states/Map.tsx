import React from "react"
import MapHeader from "./../components/MapHeader"
import {
  type ImageAsset,
  images,
  samplePointAImages,
  samplePointBImages,
} from "./../lib/images"

const ImageMap: ImageAsset = images[0]

function Map() {
  return (
    <>
      <article className="flow">
        <MapHeader />

        <section className="relative min-h-screen grid place-items-center">
          <div className="relative w-full max-w-4xl">
            <img
              src={ImageMap.src}
              alt={ImageMap.alt}
              className="w-full h-auto object-cover rounded-sm shadow-sm"
            />

            {/* Hotspot A */}
            <button
              className="cursor-pointer absolute uppercase font-bold w-[2ch] aspect-square bg-neutral-200 rounded-sm shadow-sm hover:opacity-70"
              style={{ top: "57%", left: "47%" }}
              type="button"
            >
              A
            </button>

            {/* Hotspot B */}
            <button
              className="cursor-pointer absolute uppercase font-bold w-[2ch] aspect-square bg-neutral-200 rounded-sm shadow-sm hover:opacity-70"
              style={{ top: "59%", left: "45%" }}
              type="button"
            >
              B
            </button>
          </div>
        </section>
      </article>
    </>
  )
}

export default Map
