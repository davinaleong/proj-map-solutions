import { useReducer } from "react"
import { fsm, renderState } from "./lib/helpers"
import { type State } from "./lib/types"
import { FsmWidget } from "./components/FsmWidget"
import IconEarth from "./assets/icons/earth.svg"
import "./App.css"

function App() {
  const [state] = useReducer(fsm, "home" as State)

  return (
    <div className="relative min-h-screen min-w-screen p-4 flow">
      <header>
        <h1 className="text-3xl font-bold flex gap-1 justify-center">
          <img src={IconEarth} alt="Earth Icon" width="20px" height="20px" />
          Map Solutions
        </h1>
      </header>

      <main>{renderState(state)}</main>

      <footer className="text-neutral-500 text-center text-sm italic">
        <p>Map Solutions &copy; Davina Leong, 2025</p>
      </footer>

      <FsmWidget state={state} />
    </div>
  )
}

export default App
