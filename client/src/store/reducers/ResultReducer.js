import { GET_RESULTS } from "../types";

export default function resultReducer(state = {}, action) {
    switch (action.type) {
        case GET_RESULTS:
            console.log(action.payload)
            return { ...state,results:action.payload }
        default:
            return state
    }
}