import type { Event, State } from "./types"
import Home from "../states/Home"
import Grid from "../states/Grid"
import Map from "../states/Map"

export function fsm(state: State, event: Event): State {
  switch (state) {
    case "home":
      if (event.type === "START") return "loading"
      return state

    case "grid":
    case "map":
      if (event.type === "START") return "loading"
      return state

    case "loading":
      if (event.type === "RESOLVE") return "grid" // default after loading
      if (event.type === "REJECT") return "error"
      return state

    case "error":
      if (event.type === "RESET") return "home"
      return state

    default:
      return state
  }
}

export function renderState(state: State) {
  switch (state) {
    case "home":
      return <Home />
    case "grid":
      return <Grid />
    case "map":
      return <Map />
    case "loading":
      return (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-yellow-500">⏳ Loading...</h2>
        </div>
      )
    case "error":
      return (
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-red-600">❌ Error</h2>
          <p className="text-gray-600">Something went wrong.</p>
        </div>
      )
    default:
      return null
  }
}
