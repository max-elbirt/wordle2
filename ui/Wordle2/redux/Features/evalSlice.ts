import {Action, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface evalI {
    letter: string,
    index: number,
    correctness: | 'correctPlace' | 'notInTargetWord' | 'incorrectPlace' | null,
    status: | 'checked' | 'unchecked'
}

interface evalState {
    previousEvaluations: evalI[],
    currentEvaluations: evalI[]
}

export const evalInitialState: evalState = {
    previousEvaluations: [],
    currentEvaluations: []
}
const evalSlice = createSlice({
    initialState: evalInitialState,
    name: 'eval',
    reducers: {
        setCurrentEvaluations(state, action: PayloadAction<string>) {
            const currIndex = state.currentEvaluations.length;
            const currentEvalToAdd: evalI = {
                letter: action.payload,
                index: currIndex + 1,
                correctness: null,
                status: 'unchecked'
            }
            state.currentEvaluations.push(currentEvalToAdd);
        },
        EvaluationsReceived(state, action: PayloadAction<evalI[]>) {
            state.previousEvaluations = [...state.previousEvaluations, ...action.payload];
        },
        clearCurrentEvaluations(state, action: Action) {
            state.currentEvaluations = [];
        }
    }
})
const actions = evalSlice.actions;
export default evalSlice.reducer;

export const {setCurrentEvaluations, EvaluationsReceived, clearCurrentEvaluations} = actions;

