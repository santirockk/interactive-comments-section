import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    window: window.innerWidth
}

const windowSlice = createSlice({
    name: "window",
    initialState: initialState,
    reducers:{
        changeWitdh(state, action){
            state.window = action.payload
        },
    },
});

export const { changeWitdh } = windowSlice.actions;
export const windowReducer = windowSlice.reducer;




