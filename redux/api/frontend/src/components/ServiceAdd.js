import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeServiceField, addService } from '../actions/actionCreators'

function ServiceAdd() {
  const {item, loading, error} = useSelector(state => state.serviceAdd)
  const dispatch = useDispatch()

  const handleChange = evt => {
    const {name, value} = evt.target
    console.log(name, value)
    dispatch(changeServiceField(name, value))
  };

  const handleSubmit = evt => { // добавление элемента в список
    evt.preventDefault()
    dispatch(addService())
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
