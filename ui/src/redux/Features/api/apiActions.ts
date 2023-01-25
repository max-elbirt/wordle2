import { createAction } from '@reduxjs/toolkit';

export interface ApiRequestPayload {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    onSuccess: string;
    onError: string;
}

//EVENT ACTIONS (TRIGGERS)
export const apiRequest = createAction<ApiRequestPayload>('api/apiRequest');