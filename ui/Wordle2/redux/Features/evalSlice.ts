import {createSlice} from "@reduxjs/toolkit";

interface eval {
    letter: string,
    index: number,
    correctness: |'correctPlace' | 'notInTargetWord' | 'incorrectPlace',
}

interface evalState {
    evaluations: eval[],
}
export const evalInitialState: evalState = {
    evaluations: []
}
const evalSlice = createSlice({
    initialState: evalInitialState,
    name: 'eval',
    reducers: {
    }
})

export default evalSlice.reducer;