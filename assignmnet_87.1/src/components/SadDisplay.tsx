import { useSelector } from "react-redux"
import { sadCountSelector } from "./Selector"



function SadDisplay() {
    const sadCount = useSelector(sadCountSelector);
  return (
    <div className="text-lg bg-blue-500 mb-3 border-1 border-blue-700 rounded-sm p-3">You are {sadCount} times Sad today</div>
  )
}

export default SadDisplay