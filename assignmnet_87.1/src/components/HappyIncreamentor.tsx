import { useDispatch } from "react-redux"
import { happyButtonClicked } from "./Action";


function HappyIncreamentor() {
    const dispatch = useDispatch();
    const incrementor = ()=>{
        dispatch(happyButtonClicked);
    }
    return (
        <>
            <div className="text-lg">Are You Happy ?</div>
            <button onClick={incrementor} type="button" className="bg-orange-500 w-16 active:scale-95 p-2 border-1 border-orange-700 rounded-lg">Yes</button>
        </>
    )
}

export default HappyIncreamentor