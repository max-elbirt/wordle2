import {createSlice} from "@reduxjs/toolkit";

export interface overlay {
    modal: 'signIn' | 'help' | null ;
    spinner: boolean;
    toast: string[];
}

export const initialOverlayState: overlay = {
    modal: null,
    spinner: false,
    toast: []
}
const overlaysSlice = createSlice({
    initialState: initialOverlayState,
    name: 'overlay',
    reducers: {

    }
})

export default overlaysSlice.reducer;

