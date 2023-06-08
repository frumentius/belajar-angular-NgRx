import { createReducer, on } from '@ngrx/store';
import { countIncrement, countDecrement, updateName, updateState } from './actions';

export interface GlobalState {
  count: number;
  name: string;
}

export const initialState: GlobalState = {
  count: 0,
  name: ''
};

export const appReducer = createReducer(
  initialState,
  on(countIncrement, (state) => ({ ...state, count: state.count + 1 })),
  on(countDecrement, (state) => ({ ...state, count: state.count - 1 })),
  on(updateName, (state, { name }) => ({
    ...state,
    name
  })),
  on(updateState, (state, { count, name }) => ({
    ...state,
    count,
    name
  }))
);
