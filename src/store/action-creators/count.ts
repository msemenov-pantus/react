import {Dispatch} from "redux";
import {CountActionTypes, CountAction} from "type/count/count";

export const addCount = (value: number) => {
    return async (dispatch: Dispatch<CountAction>) => {
        dispatch({
            type: CountActionTypes.ADD_COUNT,
            payload: value
        })
    }
}
