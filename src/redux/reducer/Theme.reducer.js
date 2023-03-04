import * as ActionTypes from '../ActionTypes'

export const themeReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.THEME_TOGGLE:
            return {
                ...state,
                theme: action.payload
            }

        default:
            return state
    }
}