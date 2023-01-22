import {createSlice} from "@reduxjs/toolkit";

export interface User {
    name: string,
    id: string
}

export interface UserState{
    currentUser: User,
}

export const initialUserState : UserState = {
    currentUser: {
        name: 'guest',
        id: '0',
    }
}
const userSlice = createSlice({
    initialState: initialUserState,
    name: 'user',
    reducers: {

    }
})

export default userSlice.reducer;