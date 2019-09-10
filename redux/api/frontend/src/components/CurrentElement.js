import React, {Fragment, useState, useEffect}  from 'react';
import useJsonFetch from '../hooks/useJsonFetch'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators'

function CurrentElement({match}) {
    const [data] = useJsonFetch(process.env.REACT_APP_API_URL, [])
    const url = process.env.REACT_APP_API_URL + '/' + match.params.id
    const {item, loading, error} = useSelector(state => state.serviceAdd)
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        id: '',
        name: '',
        price: '',
        content: ''})

        useEffect(()=> {
            if(data.length > 0) {
                let d = data.find(i => i.id == match.params.id)
                const {name, price, content} = d
                setForm(prev => ({...prev, name: name, price: price, content: content}))
            }
        }, [data, match.params.id])
    

    const handleChange = evt => {
        const {name, value} = evt.target
        dispatch(changeServiceField(name, value))
        setForm(prev => ({...prev, [name]: value}))
    };

    const handleSubmit = (evt) => {
        console.log(`handleSubmit`)
        evt.preventDefault()
        dispatch(addService())
    }

    return (
        <Fragment>
        <h1>CurrentElement</h1>

      <form onSubmit={handleSubmit}>
        <input name='name' onChange={handleChange} value={form.name}  />
        <input name='price' onChange={handleChange} value={form.price}  />
    {/* <input name='content' onChange={handleChange} value={item.content} />*/}
        <button type='submit' disabled={loading}>Cancel</button>
        <button type='submit' disabled={loading}>Save</button>
        {error && <p>Something went wrong try again</p>}
      </form>
      </Fragment>
    )
}

export default CurrentElement;