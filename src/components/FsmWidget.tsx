import { type State } from "../lib/types"

interface FsmWidgetProps {
  state: State
}

export function FsmWidget({ state }: FsmWidgetProps) {
  const stateColor =
    state === "error"
      ? "text-red-600"
      : state === "loading"
      ? "text-yellow-500"
      : "text-green-600"

  return (
    <div className="fixed right-4 bottom-4 rounded-sm bg-neutral-50 text-center w-64 mx-auto shadow-sm text-sm">
      <h3 className="bg-neutral-200">Finite State Manager Widget</h3>
      <p className="text-neutral-500 flex gap-1 justify-center">
        <span>Current State:</span>
        <span className={`font-bold ${stateColor}`}>{state.toUpperCase()}</span>
      </p>
    </div>
  )
}
