import type { State } from "./Store"

export const sadCountSelector = (State: State)=>{
    return State.sadCount;
}
export const happyCountSelector = (State: State)=>{
    return State.happyCount;
}