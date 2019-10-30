import {REFRESH_DETAILS} from '../actions/actionTypes';

const initialState = {
    data: {},
    loading: false,
    error: null
};

export default function detailsReducer(state = initialState, action) {
    switch (action.type) {
        case REFRESH_DETAILS:
            const {data} = action.payload;
            return {
                ...state,
                data,
                loading: false,
                error: null
            };
        default:
            return state;
    }
}