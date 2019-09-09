import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { cancelServiceEdit } from '../actions/actionCancel'
import { editService } from '../actions/actionCreators';

function ServiceCancel() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();
    
    const handleEdit = (id, name, value) => { // Cancel - не работает, должно отменять редактирование и очищать inputs
        console.log(items)
        console.log(id, name, value)
	/*	dispatch(editService(id, name, value)); */
	}

    return (
		<button onClick={() => handleEdit()}>Cancel</button>
    )
}
export default ServiceCancel