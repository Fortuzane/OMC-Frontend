import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    open: false,
};
export const categorySlideBarSlice = createSlice({
    name: "category-slideBar",
    initialState,
    reducers: {
        setOpen(state = initialState, action) {
            state.open = action.payload;
        }
    }
});

export const categorySlideBarAction = categorySlideBarSlice.actions;
