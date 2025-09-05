import { useSelector } from "react-redux"
import { happyCountSelector } from "./Selector"


function HappyDisplay() {
    const happyCount = useSelector(happyCountSelector);
  return (
    <div className="text-lg bg-orange-500 border-1 border-orange-700 rounded-sm p-3 mb-3">You are {happyCount} times happy today</div>
  )
}

export default HappyDisplay