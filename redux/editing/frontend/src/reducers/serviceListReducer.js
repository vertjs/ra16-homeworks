import nanoid from 'nanoid';
import { SAVE_SERVICE, REMOVE_SERVICE } from '../actions/actionTypes';

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_SERVICE: {
      const { id, name, price } = action.payload;
      if (id === '') {
        return [...state, { id: nanoid(), name, price: Number(price) }];
      } return state.map(o => o.id === id ? { ...o, name, price: Number(price) } : o);
    }

    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    }

    default:
      return state;
  }
}
