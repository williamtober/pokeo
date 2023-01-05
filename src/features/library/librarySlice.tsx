import { createSlice } from '@reduxjs/toolkit';
import { json } from 'stream/consumers';
import { ICard } from '../../interfaces/card';
import { ISet } from '../../interfaces/set';

// define what the library card type is
interface LibraryCard {
    // the count of the card
    count: number,
    // the card object
    card: ICard,
}

type Card = {
    [id: string] : {
        [id: string] : LibraryCard
    }
}

type Set = {
    [id: string] : ISet
}

interface LibraryState {
    // hash map of sets
    sets: Set, 
    // has of cards sorted by set as key
    cards: Card,
    // status of the slice
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    // error message
    error: string | null,
}

const temp = localStorage.getItem('library');
const persistedState = temp ? JSON.parse(temp) : {};

const initialState = {
    sets: persistedState.sets || {},
    cards: persistedState.cards || {},
    status: 'idle',
    error: null,
} as LibraryState;

// count is expected, -1 or 1 so that the count can be incremented or decremented
type count = { 
    count: -1 | 1,
    card: ICard,
    set: ISet
}

const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        // add a set to the store
        countCard(state, action: { payload: count }) {
            // get the set and count from the action
            const { count, card, set } = action.payload;

            
            // see if the key exists in the sets object
            if(state.sets[set.id]) {
                // create the set
                state.sets[set.id] = set;
                // check if the card exists in the set
                if(state.cards[set.id][card.id]) {
                    // if it does, increment the count
                    state.cards[set.id][card.id].count = state.cards[set.id][card.id].count + count;
                } else {
                    // if it does, increment the count
                    state.cards = {
                        ...state.cards,
                        [set.id]: {
                            ...state.cards[set.id],
                            [card.id]: {
                                count: 1,
                                card
                            }
                        }
                    }
                }
            } else {
                // if it doesn't, add the set to the store
                state.sets = {
                    ...state.sets,
                    [set.id]: set
                };
                // add the card to the store
                state.cards = {
                    ...state.cards,
                    [set.id]: {
                        ...state.cards[set.id],
                        [card.id]: {
                            count: 1,
                            card
                        }
                    }
                }
            }

            // save the state to local storage
            localStorage.setItem('library', JSON.stringify(state));

            console.log(state.cards, state.sets)

        }
    }
});


export const { countCard } = librarySlice.actions;
export default librarySlice.reducer;