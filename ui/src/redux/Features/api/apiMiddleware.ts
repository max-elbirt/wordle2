import { Middleware, PayloadAction } from '@reduxjs/toolkit'
import { apiRequest, ApiRequestPayload } from './apiActions'

const apiMiddleware: Middleware = ({ getState, dispatch }) => (next) => (action: PayloadAction<ApiRequestPayload>) => {
    next(action)
    if (action.type === apiRequest.type) {
        if (action.payload.method === 'GET') {
            fetch(action.payload.url)
                .then((response) => response.json())
                .then((data) => {
                    dispatch({ type: action.payload.onSuccess, payload: data })
                })
                .catch((error) => {
                    dispatch({ type: action.payload.onError, payload: error })
                })
        }
        if (action.payload.method === 'POST') {
            fetch(action.payload.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(action.payload.body),
            })
                .then((response) => response.json())
                .then((data) => {
                    dispatch({ type: action.payload.onSuccess, payload: data })
                })
                .catch((error) => {
                    dispatch({ type: action.payload.onError, payload: error })
                })
        }
    }
}

export default [apiMiddleware]