import { createSelector } from 'reselect';

const userSelector = ({ user }) => user;

export const userDataSelector = createSelector(userSelector, user => user);
