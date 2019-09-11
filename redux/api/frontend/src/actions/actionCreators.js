import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  REMOVE_SERVICE,
  EDIT_SERVICE_FIELD, 
  CHANGE_CURRENT_ELEMENT
} from './actionTypes';

export const fetchServicesRequest =() => ({ // запрос на сервер
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({ // ошибка принятия данных
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({ // успешное принятие данных
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const addServiceRequest = (name, price) => ({ // добавление элемента на сервер
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
  },
})

export const addServiceFailure = message => ({ // ошибка при добавлении элемента на сервер
  type: ADD_SERVICE_FAILURE,
  payload: {
    message,
  },
});

export const addServiceSuccess = () => ({ // успешное добавление элемента на сервер
  type: ADD_SERVICE_SUCCESS,
});

export const changeServiceField = (name, value) => ({ // изменение поля ввода
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export function editServiceField(form) {
  return {type: EDIT_SERVICE_FIELD, payload: {form}}
}

export function changeCurrentElement(name, value) {
  return {type: CHANGE_CURRENT_ELEMENT, payload: {name, value}}
}


export const removeService = (id) => ({ // удаление элемента списка
  type: REMOVE_SERVICE,
  payload: {
    id
  },
});

export const fetchServices = () => async (dispatch) => { // получение данных с сервера
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  } catch (error) {
    dispatch(fetchServicesFailure(error.message));
  }
};

export const addService = () => async (dispatch, getState) => {  // добавление элемента в список
  dispatch(addServiceRequest());
  const {serviceAdd: {item: {name, price}}} = getState();
  console.log(process.env.REACT_APP_API_URL)
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, price}),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }

  dispatch(fetchServices());
};

export const removeServicesUpload = (id) => async (dispatch) => { // удаление элемента списка
  dispatch(removeService(id));
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL+'/'}`+id, {
      method: 'DELETE',
      body: JSON.stringify(id)
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(removeService(id));
  } catch (error) {
    console.log(error.message);
  }
};


export const editService = (form) => async (dispatch) => {
  dispatch(editServiceField(form));
  console.log(form)
  console.log(`${process.env.REACT_APP_API_URL+'/'}`+form.id)
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
   
    dispatch(changeServiceField(form.name, form.price));
  } catch (error) {
    console.log(error.message);
  }

}
