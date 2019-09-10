import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { cancelServiceEdit } from '../actions/actionCancel'


function ServiceCancel() {
    const items = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();
    
    const handleCancel = (evt) => { // Cancel - отменять редактирование и очищать inputs
      evt.preventDefault();
     	dispatch(cancelServiceEdit()); 
	}

    return (
       <button type='submit' onClick={handleCancel}>Cancel</button>
    )
}
export default ServiceCancel