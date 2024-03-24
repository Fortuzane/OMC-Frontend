import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    open: false,
    product: null,
};
export const quickViewSlice = createSlice({
    name: "quick-view",
    initialState,
    reducers: {
        setOpen(state = initialState, action) {
            state.open = action.payload;
        },
        setProduct(state= initialState, action) {
            state.product = action.payload;
        },
    }
});

export const quickViewAction = quickViewSlice.actions;
