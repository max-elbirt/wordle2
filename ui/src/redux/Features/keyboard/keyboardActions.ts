import { createAction } from '@reduxjs/toolkit';

export const keyboardClicked = createAction<string>('keyboard/keyboardClicked');