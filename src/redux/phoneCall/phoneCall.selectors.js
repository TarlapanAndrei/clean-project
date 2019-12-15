import { createSelector } from 'reselect';

const selectCall = state => state.phone;

export const selectStatus = createSelector(
  [selectCall],
  phone => phone.phoneStatus
)