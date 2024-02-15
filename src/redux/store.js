import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducers.js";

const enhacer = devToolsEnhancer();

export const store = createStore(rootReducer, enhacer);
