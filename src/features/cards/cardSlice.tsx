import { createSlice } from "@reduxjs/toolkit";
// import en.json from the data folder
import sets from  "../../data/en.json"
console.log(sets) 

// define the statuses the redux slice can be in
interface CardState {
    cards: Object[],
    sets: Object[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error: string | null,
}

const initialState = {
    cards: [],
    sets: sets,
    status: "idle",
    error: null,
} as CardState;

// create the slice
const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        // add a card to the store
        getSets(state, action) {
            state.sets = action.payload;
        },
        // add a card to the store
    }
});

// export the actions and reducer
export const { getSets } = cardSlice.actions;
export default cardSlice.reducer;