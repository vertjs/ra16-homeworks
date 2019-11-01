import {
    REFRESH_DETAILS,
    SEARCH_DATA_REQUEST,
    SEARCH_DETAILS_SUCCESS,
    SEARCH_DETAILS_FAILURE
} from '../actions/actionTypes';

const initialState = {
    data: {},
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
                search
            };
        case SEARCH_DATA_REQUEST:
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

        default:
            return state;
    }
}