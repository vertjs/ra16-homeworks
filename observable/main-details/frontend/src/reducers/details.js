import {
    REFRESH_DETAILS,
    SEARCH_DETAILS_REQUEST,
    SEARCH_DETAILS_SUCCESS,
    SEARCH_DETAILS_FAILURE,

    REFRESH_ITEMS,
    SEARCH_ITEMS_REQUEST,
 //   SEARCH_ITEMS_SUCCESS,
 //   SEARCH_ITEMS_FAILURE
} from '../actions/actionTypes';

const initialState = {
    data: {},
    items: [],
    loading: false,
    error: null,
    search: null,
};

export default function detailsReducer(state = initialState, action) {
    switch (action.type) {
        case REFRESH_DETAILS:
            const {search} = action.payload;
            return {
                ...state,
                loading: false,
                search
            };
        case SEARCH_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SEARCH_DETAILS_SUCCESS:
            const {data} = action.payload;
            return {
                ...state,
                data,
                loading: false,
                error: null
            };
        case SEARCH_DETAILS_FAILURE:
                const {error} = action.payload;
                return {
                    ...state,
                    loading: false,
                    error
                };
        case REFRESH_ITEMS:
            const {items} = action.payload;
            return {
                ...state,
                loading: false,
                items
            };
        case SEARCH_ITEMS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
      /*  case SEARCH_ITEMS_SUCCESS:
            const {items} = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null
            };
        case SEARCH_ITEMS_FAILURE:
                const {error} = action.payload;
                return {
                    ...state,
                    loading: false,
                    error
                };*/
        default:
            return state;
    }
}