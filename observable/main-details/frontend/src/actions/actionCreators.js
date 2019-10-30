import {REFRESH_DETAILS} from './actionTypes';

export const refreshDetailsRequest = id => ({
    type: REFRESH_DETAILS,
    payload: {id},
  });
  