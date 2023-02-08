import { createStore } from "redux";
import { counterRedux } from "./reducer/counter.reducer";


export const configuerState = () => {
    const store = createStore(counterRedux);

    return store;
}