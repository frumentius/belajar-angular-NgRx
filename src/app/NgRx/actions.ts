import { createAction } from '@ngrx/store';

export const countIncrement = createAction('[Count] Increment');
export const countDecrement = createAction('[Count] Decrement');
export const updateName = createAction('[Name] Update', (name: string) => ({ name }));
export const updateState = createAction('[FullState] Update', (count: number, name: string) => ({ count, name }));