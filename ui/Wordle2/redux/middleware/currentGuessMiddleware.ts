import {Dispatch, Middleware, MiddlewareAPI, PayloadAction} from "@reduxjs/toolkit";
import {statusses} from "../Features/gameSlice";

export const currentGuessMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) =>
    (action: PayloadAction) => {
    if (store.getState().game.status === statusses.in_progress){
        const newWord = store.getState().guess.currentGuess;
        if (store.getState().game.settings.numberOfLettersInGuess === newWord.length()){

        }
    }
    }