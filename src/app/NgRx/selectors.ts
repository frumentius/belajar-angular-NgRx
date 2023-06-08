import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './reducer';

export const selectState = createFeatureSelector<GlobalState>('stateObj');

export const selectFullState = createSelector(
  selectState,
  (state: GlobalState) => state
);
export const selectCount = createSelector(
  selectState,
  (state: GlobalState) => state.count
);
export const selectName = createSelector(
  selectState,
  (state: GlobalState) => state.name
);