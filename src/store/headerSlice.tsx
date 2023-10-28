import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        isHeaderVisible: true
    },
    reducers: {
        toggleHeaderVisibility(state) {
            state.isHeaderVisible = !state.isHeaderVisible
        }
    }
})

export const { toggleHeaderVisibility } = headerSlice.actions
export default headerSlice.reducer