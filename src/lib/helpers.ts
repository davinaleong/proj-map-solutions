import type { Event, State } from "./types"

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
