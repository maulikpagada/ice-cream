import { useReducer } from "react";
import { createContext } from "react";
import { themeReducer } from "../redux/reducer/Theme.reducer";
import * as ActionTypes from '../redux/ActionTypes'

const ThemeContext = createContext();

const initState = {
    theme: 'light'
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer,initState)

    const toggle_theme = (themeval) => {
        const newTheme = themeval === 'light' ? 'dark' : 'light';

        dispatch({type:ActionTypes.THEME_TOGGLE, payload: newTheme})
    }

    return(
        <ThemeContext.Provider
            value={{
                ...state,
                toggle_theme
            }}
        
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;