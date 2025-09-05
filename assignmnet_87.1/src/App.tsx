import HappyDisplay from "./components/HappyDisplay"
import HappyIncreamentor from "./components/HappyIncreamentor"
import SadDisplay from "./components/SadDisplay"
import SadIncreamentor from "./components/SadIncreamentor"

function App() {

  return (<div className="p-5">
   <HappyDisplay/>
   <SadDisplay />
   <HappyIncreamentor />
   <SadIncreamentor />
   </div>
  )
}

export default App
