import {createAction, Dispatch, Middleware, MiddlewareAPI, PayloadAction} from "@reduxjs/toolkit";
import {addLetter} from "../Features/guessSlice";
const qwerty = '/^[A-Z]$/';

export const keyboardClickFlow: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: PayloadAction<string>) => {
    if (action.type === keyboardClicked.type) {
       if (action.payload.match(qwerty) &&  store.getState().game.status === 'IN_PROGRESS') {
           store.dispatch(addLetter);
       }
    }
}

const keyboardClicked = createAction<string>('keyboardHandler/keyboardClicked')