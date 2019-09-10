import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveService, changeServiceField } from '../actions/actionCreators';
import ServiceCancel from './ServiceCancel';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();
	
	const handleSubmit = evt => {  // Save - добавление в список
		evt.preventDefault();
		dispatch(saveService(item.id, item.name, item.price));
	}

	const handleChange = evt => { // внесение данных
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	return (
		<form>
			<input name='name' value={item.name} onChange={handleChange}/> {/* */}
			<input name='price' value={item.price} onChange={handleChange}/>
			<button type='submit' onClick={handleSubmit}>Save</button>
			<ServiceCancel/>
		</form>
	);
}

export default ServiceAdd;