//import { createStore } from "redux";
//import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slice.js";

//const enhacer = devToolsEnhancer();
//export const store = createStore(rootReducer, enhacer);

export const store = configureStore({
    reducer: rootReducer,
})

