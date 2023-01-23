import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GuessState {
    currentGuess: string
}

export const initialGuessState: GuessState = {
    currentGuess : ''
}

const guessSlice = createSlice({
    initialState: initialGuessState,
    name: 'guess',
    reducers: {
        addLetter(state, action: PayloadAction<string>){
            state.currentGuess += action.payload;
        }
    }
})

export default guessSlice.reducer;
export const {addLetter} = guessSlice.actions;