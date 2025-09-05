import { useDispatch } from "react-redux"
import { sadButtonClicked } from "./Action";


function SadIncreamentor() {
    const dispatch = useDispatch();
    const incrementor = ()=>{
        dispatch(sadButtonClicked);
    }
    return (
        <>
            <div className="text-lg">Are You Sad ?</div>
            <button onClick={incrementor} type="button" className="bg-blue-700 w-16 rounded-lg p-2 border-1 border-blue-900 active:scale-95">Yes</button>
        </>
    )
}

export default SadIncreamentor