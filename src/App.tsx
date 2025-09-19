import { useReducer } from "react"
import { fsm } from "./lib/helpers"
import { type State } from "./lib/types"
import { FsmWidget } from "./components/FsmWidget"
import IconEarth from "./assets/icons/earth.svg"
import Home from "./states/Home"
import Grid from "./states/Grid"
import Map from "./states/Map"
import "./App.css"

function App() {
  const [state, dispatch] = useReducer(fsm, "home" as State)

  return (
    <div className="relative min-h-screen min-w-screen max-w-screen grid grid-rows-[min-content_auto_min-content] p-4 flow">
      <header>
        <h1 className="text-3xl font-bold flex gap-1 justify-center">
          <img src={IconEarth} alt="Earth Icon" width="20px" height="20px" />
          Map Solutions
        </h1>
      </header>

      <main className="p-4">
        {state === "home" && <Home dispatch={dispatch} />}
        {state === "grid" && <Grid />}
        {state === "map" && <Map />}
      </main>

      <footer className="text-neutral-500 text-center text-sm italic">
        <p>Map Solutions &copy; Davina Leong, 2025</p>
      </footer>

      <FsmWidget state={state} />
    </div>
  )
}

export default App
