import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pendingApiCallCount: 0
}
export const loadingSpinnerSlice = createSlice({
    name: "loading-spinner",
    initialState,
    reducers: {
        startApiCall(state) {
            state.pendingApiCallCount++;
        },
        endApiCall(state) {
            state.pendingApiCallCount--;
        },
    }
});

export const loadingSpinnerAction = loadingSpinnerSlice.actions;
