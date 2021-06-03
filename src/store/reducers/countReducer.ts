 import  {initialState,CountAction, CountState, CountActionTypes } from "type/count/count"

export const countReducer = (state = initialState, action: CountAction): CountState => {
    switch (action.type) {
        case CountActionTypes.ADD_COUNT:
            return { count: action.payload }
        case CountActionTypes.RESET_COUNT:
            return { count: 0 }
        default:
            return state
    }
}