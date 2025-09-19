import React from "react"
import IconGrid from "./../assets/icons/grid-2x2.svg"
import IconMap from "./../assets/icons/map.svg"
import { type Event } from "../lib/types"
import { HomeButton } from "../components/HomeButton"

interface HomeProps {
  dispatch: React.Dispatch<Event>
}

function Home({ dispatch }: HomeProps) {
  return (
    <section className="container mx-auto w-full h-full grid grid-cols-2 justify-center gap-2">
      <HomeButton
        icon={IconGrid}
        label="Grid Solution"
        target="grid"
        dispatch={dispatch}
      />
      <HomeButton
        icon={IconMap}
        label="Map Solution"
        target="map"
        dispatch={dispatch}
      />
    </section>
  )
}

export default Home
