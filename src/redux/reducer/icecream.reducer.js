import * as ActionTypes from "../ActionTypes"

const initState = {
    icecream: [],
}

export const icecreamReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.ICECREAM_GET:
            return {
                ...state,
                icecream: action.payload
            }

        case ActionTypes.ICECREAM_ADD:
            return {
                ...state,
                icecream: state.icecream.concat(action.payload)
            }

        case ActionTypes.ICECREAM_UPDATE:
            let uData = state.icecream.map((a) => {
                if (a.id === action.payload.id) {
                    return action.payload
                } else {
                    return a;
                }
            })
            return {
                ...state,
                icecream: uData
            }
            
        // case ActionTypes.ICECREAM_DELETE:
        //     console.log(dData);
        //     let dData = state.icecream.filter((m) => m.id !== action.payload)

        //     return {
        //         ...state,
        //         icecream: dData
        //     }

        case ActionTypes.ICECREAM_DELETE:
            let dData = state.icecream.filter((m) => m.id !== action.payload)

            return{
                ...state,
                icecream: dData
            }
        default:
            return state
    }
}