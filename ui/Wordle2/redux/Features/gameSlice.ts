import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GameState {
    settings: {
        numberOfGuesses: number; numberOfLettersInGuess: number;
    }
    status: 'IN_PROGRESS' | 'ENDED' | 'PENDING' | 'ERROR';
    sessionID: string;
    currentRowIndex: number;
}

export const initialState: GameState ={
    settings: {
        numberOfGuesses: 5,
        numberOfLettersInGuess: 5,
    },
    status: "PENDING",
    sessionID: '0',
    currentRowIndex: 0,
}
const gameSlice = createSlice({
    initialState,
    name: 'Game',
    reducers: {
        setStatus(state, action: PayloadAction<statusses>){
            state.status = action.payload;
        }
    }
})
export enum statusses {
    in_progress= 'IN_PROGRESS',
    ended = 'ENDED',
    pending = 'PENDING',
    error = 'ERROR'
}
export default gameSlice.reducer;