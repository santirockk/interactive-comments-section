//import { createStore } from "redux";
//import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "./slice.js";
import { windowReducer } from "./windowSlice.js";

//const enhacer = devToolsEnhancer();
//export const store = createStore(rootReducer, enhacer);

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        window: windowReducer,
    }
})

