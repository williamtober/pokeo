import { createSlice } from "@reduxjs/toolkit";
// import en.json from the data folder
import sets from  "../../data/en.json"

// define the statuses the redux slice can be in
interface CardState {
    cards: Object[],
    sets: Object[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error: string | null,
}

const initialState = {
    cards: [],
    // sort the sets by release date
    sets: sets.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()),
    status: "idle",
    error: null,
} as CardState;

// create the slice
const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // add a card to the store
        getSet(state, action: { payload: string }) {
            // the action.payload will have the file name name of the set
            const set = action.payload;
            // get the set from the data folder
            const setFile = require(`../../data/sets/${set}.json`);
            // add the set to the store
            state.cards = setFile;
        },
        // add a card to the store
    }
});

// export the actions and reducer
export const { getSet } = cardSlice.actions;
export default cardSlice.reducer;