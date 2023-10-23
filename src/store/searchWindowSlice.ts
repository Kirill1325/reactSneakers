import { createSlice } from "@reduxjs/toolkit";

const searchWindowSlice = createSlice({
    name: 'searchWindow',
    initialState: {
        isSearchWindowVisible: false
    },
    reducers: {
        toggleVisibility(state) {
            state.isSearchWindowVisible = !state.isSearchWindowVisible
        }
    }
})


export const { toggleVisibility } = searchWindowSlice.actions
export default searchWindowSlice.reducer