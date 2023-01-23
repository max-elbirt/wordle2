import {Action, createSlice, PayloadAction} from "@reduxjs/toolkit";

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
    status: "IN_PROGRESS",
    sessionID: '0',
    currentRowIndex: 0,
}
const gameSlice = createSlice({
    initialState,
    name: 'Game',
    reducers: {
        setStatus(state, action: PayloadAction<statusses>){
            state.status = action.payload;
        },
        increaseRowIndex(state, action: Action) {
            state.currentRowIndex += 1;
        }
    }
})
export enum statusses {
    in_progress= 'IN_PROGRESS',
    ended = 'ENDED',
    pending = 'PENDING',
    error = 'ERROR'
}
const actions = gameSlice.actions;

export default gameSlice.reducer;
export const {setStatus, increaseRowIndex} = actions;