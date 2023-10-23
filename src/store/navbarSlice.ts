import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        isNavbarvisible: false
    },
    reducers: {
        toggleVisibility(state) {
            state.isNavbarvisible = !state.isNavbarvisible
        }
    }
})

export const { toggleVisibility } = navbarSlice.actions
export default navbarSlice.reducer