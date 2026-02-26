import { combineReducers, createStore } from "redux";
import bahasaReducer from "./reducer/bahasareducer";
import temaReducer from "./reducer/temaReducer";


const reducerTotal = combineReducers({
    bahasa : bahasaReducer,
    tema :temaReducer,
});

const store = createStore(reducerTotal);

export default store;