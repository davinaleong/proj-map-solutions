import React from "react"
import IconGrid from "./../assets/icons/grid-2x2.svg"
import IconMap from "./../assets/icons/map.svg"
import { type Event } from "../lib/types"

interface HomeProps {
  dispatch: React.Dispatch<Event>
}

function Home({ dispatch }: HomeProps) {
  return (
    <section className="container mx-auto min-h-full grid grid-cols-2 justify-center gap-2">
      <button
        className="cursor-pointer text-neutral-800 text-5xl bg-neutral-50 rounded-sm shadow-sm hover:bg-neutral-200 font-bold flow flex flex-col gap-2 justify-center items-center"
        type="button"
        onClick={() => dispatch({ type: "RESOLVE", target: "grid" } as any)}
      >
        <img src={IconGrid} alt="Grid Icon" width="80px" height="80px" />
        <div>Grid Solution</div>
      </button>
      <button
        className="cursor-pointer text-neutral-800 text-5xl bg-neutral-50 rounded-sm shadow-sm hover:bg-neutral-200 font-bold flow flex flex-col gap-2 justify-center items-center"
        type="button"
        onClick={() => dispatch({ type: "RESOLVE", target: "map" } as any)}
      >
        <img src={IconMap} alt="Map Icon" width="80px" height="80px" />
        <div>Map Solution</div>
      </button>
    </section>
  )
}

export default Home
