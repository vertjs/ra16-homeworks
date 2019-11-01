import {
  REFRESH_DETAILS,
  SEARCH_DATA_REQUEST,
  SEARCH_DETAILS_SUCCESS,
  SEARCH_DETAILS_FAILURE
} from './actionTypes';

export const refreshDetailsRequest = search => ({
  type: REFRESH_DETAILS,
  payload: {search},
});
 
export const searchDataRequest = search => ({
  type: SEARCH_DATA_REQUEST,
  payload: {search},
});

export const searchDetailsSuccess = data => ({
  type: SEARCH_DETAILS_SUCCESS,
  payload: {data},
});

export const searchDetailsFailure = error => ({
  type: SEARCH_DETAILS_FAILURE,
  payload: {error},
});
