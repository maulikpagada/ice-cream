import { combineReducers } from "redux";
import { icecreamReducer } from "./icecream.reducer";

export const rootReducer = combineReducers({
    icecream: icecreamReducer  
})