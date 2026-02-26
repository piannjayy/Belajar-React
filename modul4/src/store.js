import { combineReducers, createStore } from "redux";
import listReducer from "./reducer/listReducer";


const reducerTotal = combineReducers({
    list : listReducer,
})

const store = createStore(reducerTotal);

export default store;