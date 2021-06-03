export interface  CountState{
    count: number
}
export enum CountActionTypes {
    ADD_COUNT= "ADD_COUNT",
    RESET_COUNT= "RESET_COUNT",
}
export interface AddCountAction {
    type: CountActionTypes.ADD_COUNT,
    payload: number,
}
export interface ResetCountAction {
    type: CountActionTypes.RESET_COUNT,
}
export type  CountAction  = AddCountAction | ResetCountAction

export const initialState: CountState = {
    count: 0,
}