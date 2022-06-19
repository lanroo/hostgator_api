import { createStore, combineReducers } from "redux";

import state from "./state";
import offer from "./offer";

const reducers = combineReducers({
    state,
    offer,
});

const Store = createStore(reducers);

export default Store;

