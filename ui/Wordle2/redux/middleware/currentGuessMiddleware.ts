import {Dispatch, Middleware, MiddlewareAPI, PayloadAction} from "@reduxjs/toolkit";

export const currentGuessMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: PayloadAction) => {

}