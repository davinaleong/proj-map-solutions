import React from "react"
import { images } from "./../lib/images"
import IconGrid from "./../assets/icons/grid-2x2.svg"
import IconX from "./../assets/icons/x.svg"
import Image0001 from "./../assets/images/0001.png"

function Grid() {
  return (
    <>
      <article className="flow">
        <header>
          <h2 className="text-2xl font-bold flex gap-2 align-middle justify-center">
            <img src={IconGrid} alt="Grid Icon" width="20px" height="20px" />
            <span>Grid Solution</span>
          </h2>
        </header>
        <section className="grid grid-cols-2 grid-rows-2 gap-2 min-h-screen">
          <button
            className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:bg-neutral-100 text-xl"
            type="button"
          >
            <p>Some content</p>
          </button>
          <button
            className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:bg-neutral-100 text-xl"
            type="button"
          >
            <img
              src={Image0001}
              alt="Aerial view of a city with buildings and roads"
              className="w-100 h-100 object-cover"
            />
          </button>
          <button
            className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:bg-neutral-100 text-xl"
            type="button"
          >
            <p>Some content</p>
          </button>
          <button
            className="cursor-pointer font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:bg-neutral-100 text-xl"
            type="button"
          >
            <p>Some content</p>
          </button>
        </section>
      </article>

      <div className="fixed grid place-items-center bg-black/70 inset-0 p-4">
        <section className="relative max-w-[60ch] bg-white p-4 rounded-sm shadow-sm">
          <button className="absolute top-4 right-4" type="button">
            <img src={IconX} alt="Close Icon" width="30px" height="30px" />
          </button>

          <div className="flex flex-wrap gap-4">
            {images.map(({ id, src, alt }) => (
              <button
                key={id}
                type="button"
                className="cursor-pointer max-w-[15ch] max-h-[15ch] font-bold grid place-items-center rounded-sm bg-text-50 shadow-sm aspect-square hover:opacity-70"
              >
                <img className="w-100 h-100 object-cover" src={src} alt={alt} />
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Grid
