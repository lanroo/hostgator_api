import { configureStore, combineReducers } from "redux";

import state from "./state";
import offer from "./offer";

const reducers = combineReducers({
    state,
    offer,
});

const Store = configureStore(reducers);

export default Store;
