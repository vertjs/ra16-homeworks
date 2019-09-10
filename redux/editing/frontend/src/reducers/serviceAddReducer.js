import {SAVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANCEL_SERVICE_EDIT} from '../actions/actionTypes'

const initialState = {
  id: '',
  name: '',
  price: ''
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      {
        const {name, value} = action.payload;
        return {...state, [name]: value};
      }
    case EDIT_SERVICE:
      {
        const { id, name, price } = action.payload;
        return { ...state, id, name, price };
      }
    case SAVE_SERVICE:
      {
        return { ...initialState };
      }
    case CANCEL_SERVICE_EDIT:
      {
        return { ...initialState };
      }
    default:
      return state;
  }
}
