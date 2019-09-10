import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';

function ServiceAdd() {
  console.log(process.env.REACT_APP_DATA_URL)
  const {item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => { // добавление элемента в список
    evt.preventDefault();
    dispatch(addService());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit' disabled={loading}>Cancel</button>
      <button type='submit' disabled={loading}>Save</button>
      {error && <p>Something went wrong try again</p>}
    </form>
  );
}

export default ServiceAdd;
