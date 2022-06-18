import { legacy_createstore, combineReducers } from "redux";

import state from "./state";
import offer from "./offer";

// PS: "createStore" are deprecated so.. //
// it's needed replaced by "legacy_createStore".// 
// Another alternative is to use Redux //
// Toolkit (the @reduxjs/toolkit package)" //

    const reducers = combineReducers({
        state,
        offer,
    });

    const Store = legacy_createstore(reducers);


    export default Store;