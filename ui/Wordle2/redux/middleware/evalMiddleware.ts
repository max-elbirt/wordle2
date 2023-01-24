import {Action, createAction, Middleware} from "@reduxjs/toolkit";
import {clearCurrentEvaluations, setCurrentEvaluations} from "../Features/evalSlice";
import {increaseRowIndex, setStatus, statusses} from "../Features/gameSlice";

const endOfRow: Action = createAction('eval/EndOfRow');

export const newEvalFlow: Middleware = (store) => (next) => (action) => {
    next(action);
    if (action.type === setCurrentEvaluations.type) {
        if (store.getState().eval.currentEvaluations.length === store.getState().game.settings.numberOfLettersInGuess) {
            store.dispatch(endOfRow);
        }
    else {
        setCurrentEvaluations(action.payload);
        }
    }
}

export const evalRowFlow : Middleware = (store) => (next) => (action) => {
    next(action);
    if (action.type === endOfRow.type){
    store.dispatch(clearCurrentEvaluations());
    store.dispatch(setStatus(statusses.pending));
    store.dispatch(increaseRowIndex())}
}

export const evalMiddleware = [evalRowFlow, newEvalFlow];