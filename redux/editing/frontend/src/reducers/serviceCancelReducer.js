import { CANCEL_SERVICE_EDIT } from '../actions/actionTypes'

const initialState = {
  id: ''
};

export default function serviceCancelReducer(state = initialState, action) {
  switch (action.type) {
    case CANCEL_SERVICE_EDIT:
      {
        const { i } = action.payload;
        return { ...state, i };
      }
    default:
      return state;
  }
}
