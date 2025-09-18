import { useReducer } from "react"
import { fsm } from "./lib/helpers"
import { type State } from "./lib/types"
import { FsmWidget } from "./components/FsmWidget"
import "./App.css"

function App() {
  const [state] = useReducer(fsm, "home" as State)

  return (
    <div className="relative min-h-screen min-w-screen p-4">
      <FsmWidget state={state} />
    </div>
  )
}

export default App
