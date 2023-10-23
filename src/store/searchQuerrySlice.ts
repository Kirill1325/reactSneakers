import { createSlice, current } from "@reduxjs/toolkit";

const searchHistoryState = <string[]>[]

const searchQuerrySlice = createSlice({
    name: 'searchQuerry',
    initialState: {
        searchQuerry: '',
        searchHistory: searchHistoryState
    },
    reducers: {
        setSearchQuerry(state, action) {
            state.searchQuerry = action.payload
        },
        setSearchHistory(state, action) {
            if (state.searchHistory !== undefined) {
                state.searchHistory.push(action.payload)
            }
        },
        clearSearchHistory(state) {
            state.searchHistory.length = 0
        }
    }
})

export const { setSearchQuerry, setSearchHistory, clearSearchHistory } = searchQuerrySlice.actions
export default searchQuerrySlice.reducer