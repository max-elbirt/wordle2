import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GuessState {
    guess: string
}

export const initialGuessState: GuessState = {
    guess : ''
}

const guessSlice = createSlice({
    initialState: initialGuessState,
    name: 'guess',
    reducers: {
        addLetter(state, action: PayloadAction<string>){
            state.guess += action.payload;
        }
    }
})

export default guessSlice.reducer;
export const {addLetter} = guessSlice.actions;