import {configureStore} from "@reduxjs/toolkit";
import gameReducer from '../Features/gameSlice';
import userReducer from '../Features/userSlice';
import overlaysReducer from "../Features/overlaysSlice";
import evalReducer from '../Features/evalSlice'
import {keyboardMiddleware} from "../middleware/keyboardHandlerMiddleware";
import {evalMiddleware} from "../middleware/evalMiddleware";
export const store = configureStore({
    reducer: {
        game: gameReducer,
        user: userReducer,
        overlays: overlaysReducer,
        eval: evalReducer
    },
    middleware: [...keyboardMiddleware, ...evalMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;