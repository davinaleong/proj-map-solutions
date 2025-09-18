export type State = "home" | "grid" | "map" | "loading" | "error"

export type Event =
  | { type: "START" }
  | { type: "RESOLVE"; target: "grid" | "map" }
  | { type: "REJECT" }
  | { type: "RESET" }
