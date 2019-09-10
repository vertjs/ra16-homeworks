import { CANCEL_SERVICE_EDIT } from './actionTypes';


export function cancelServiceEdit(id, name, price) {
  return {type: CANCEL_SERVICE_EDIT, payload: {}};
}