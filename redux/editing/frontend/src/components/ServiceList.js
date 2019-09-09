import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService } from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleEdit = (id, name, value) => {
    console.log(items)
    console.log(id, name, value)
    dispatch(editService(id, name, value)); // редактирование элемента списка
  }

  const handleRemove = id => { // удаление из списка
    console.log(items)
    dispatch(removeService(id));
  }
  
  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id, o.name, o.price)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>✗</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
