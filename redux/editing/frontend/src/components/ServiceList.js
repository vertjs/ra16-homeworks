import React from 'react'
import {useSelector, useDispatch, connects} from 'react-redux';
import {removeService, editServiceField, addService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleEdit = (id, name, value) => {
    console.log(id, name, value)
   // dispatch(editServiceField(id, name, value));
    dispatch(addService(name, value)); // Каранадаш - не работает, должно заполнять inputs и перезаписываться после нажатия Save
  }

  const handleRemove = id => { // удаление из списка
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
