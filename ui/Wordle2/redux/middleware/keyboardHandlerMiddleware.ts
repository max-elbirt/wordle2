import {createAction, Dispatch, Middleware, MiddlewareAPI, PayloadAction} from "@reduxjs/toolkit";
import {setCurrentEvaluations} from "../Features/evalSlice";

const qwerty = /^[A-Z]$/;

export const keyboardClickFlow: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: PayloadAction<string>) => {
    next(action);
    if (action.type === keyboardClicked.type) {
        const capitalLetter = action.payload.toUpperCase()
        console.log(capitalLetter)
        if (qwerty.test(capitalLetter) && store.getState().game.status === 'IN_PROGRESS') {
            console.log('entered the final level', action.payload.match(qwerty));
            store.dispatch(setCurrentEvaluations(action.payload));
        }
    }
}
export const keyboardClicked = createAction<string>('keyboardHandler/keyboardClicked');
export const keyboardMiddleware = [keyboardClickFlow];