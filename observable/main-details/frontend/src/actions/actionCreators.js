import {
  REFRESH_DETAILS,
  SEARCH_DETAILS_REQUEST,
  SEARCH_DETAILS_SUCCESS,
  SEARCH_DETAILS_FAILURE,

  REFRESH_ITEMS,
  SEARCH_ITEMS_REQUEST,
  SEARCH_ITEMS_SUCCESS,
  SEARCH_ITEMS_FAILURE
} from './actionTypes';

export const refreshDetailsRequest = search => ({
  type: REFRESH_DETAILS,
  payload: {search},
});
 
export const searchDetailsRequest = search => ({
  type: SEARCH_DETAILS_REQUEST,
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
/*******************/

export const refreshItemsRequest = items => ({
  type: REFRESH_ITEMS,
  payload: {items},
});
 
export const searchItemsRequest = search => ({
  type: SEARCH_ITEMS_REQUEST,
  payload: {search},
});

export const searchItemsSuccess = items => ({
  type: SEARCH_ITEMS_SUCCESS,
  payload: {items},
});

export const searchItemsFailure = error => ({
  type: SEARCH_ITEMS_FAILURE,
  payload: {error},
});
