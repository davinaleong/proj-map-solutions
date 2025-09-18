export type State = "home" | "grid" | "map" | "loading" | "error"

export type Event =
  | { type: "START" }
  | { type: "RESOLVE" }
  | { type: "REJECT" }
  | { type: "RESET" }
