import {CHANGE_SERVICE_FIELD, REMOVE_SERVICE} from '../actions/actionTypes'

const initialState = {
  id: '',
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case REMOVE_SERVICE:
      const {id} = action.payload;
      console.log(id)
      return state;
    default:
      return state;
  }
}
