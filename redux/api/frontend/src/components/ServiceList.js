import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editService, fetchServices, removeServicesUpload } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

function ServiceList(props) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => { // получение данных с сервера
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = (id) => {  // удаление элемента списка
    dispatch(removeServicesUpload(id));
  }

  const handleEdit = (id, name, value) => {
    dispatch(editService(id, name, value)); // редактирование элемента списка
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong try again</p>;
  }

  return (
    <ul onLoad={() => {fetchServices()}}> {/*медленная загрузка страницы */}
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}

          <button>
            <NavLink to={'/services/' + o.id} exact >✎ </NavLink>
          </button>

          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList
