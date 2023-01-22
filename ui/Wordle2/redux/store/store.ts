import {configureStore} from "@reduxjs/toolkit";
import gameReducer from '../Features/gameSlice';
import userReducer from '../Features/userSlice';
import overlaysReducer from "../Features/overlaysSlice";
import evalReducer from '../Features/evalSlice'
export const store = configureStore({
    reducer: {
        game: gameReducer,
        user: userReducer,
        overlays: overlaysReducer,
        eval: evalReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>