import { createSlice } from "@reduxjs/toolkit";

const sizeGuideSlice = createSlice({
    name: 'sizeGuide',
    initialState: {
        isSizeGuidevisible: false
    },
    reducers: {
        toggleVisiblility(state) {
            state.isSizeGuidevisible = !state.isSizeGuidevisible
        }
    }
})

export const { toggleVisiblility } = sizeGuideSlice.actions
export default sizeGuideSlice.reducer