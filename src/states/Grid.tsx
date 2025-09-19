import React from "react"
import IconGrid from "./../assets/icons/grid-2x2.svg"
import Image0001 from "./../assets/images/0001.png"

function Grid() {
  return (
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
            className="w-100 h-100 aspect-[3/4] object-cover"
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
  )
}

export default Grid
