import { SAVE_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANCEL_SERVICE_EDIT } from './actionTypes';

export function saveService(id, name, price) {
  return {type: SAVE_SERVICE, payload: {id, name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

/*export function cancelServiceEdit() {
  return {type: CANCEL_SERVICE_EDIT};
}*/

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function editService(id, name, price) {
  return {type: EDIT_SERVICE, payload: {id, name, price}}
}