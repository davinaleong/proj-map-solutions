import React from "react"
import { type Event } from "../lib/types"

type HomeButtonProps = {
  icon: string
  label: string
  target: "grid" | "map"
  dispatch: React.Dispatch<Event>
}

export function HomeButton({ icon, label, target, dispatch }: HomeButtonProps) {
  return (
    <button
      className="cursor-pointer text-neutral-800 text-5xl bg-neutral-50 rounded-sm shadow-sm hover:bg-neutral-200 font-bold flow flex flex-col gap-2 justify-center items-center"
      type="button"
      onClick={() => dispatch({ type: "RESOLVE", target })}
    >
      <img src={icon} alt={`${label} Icon`} width="80" height="80" />
      <div>{label}</div>
    </button>
  )
}
