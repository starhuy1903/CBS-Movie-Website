
import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isLoading: false,
        error: null,
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;