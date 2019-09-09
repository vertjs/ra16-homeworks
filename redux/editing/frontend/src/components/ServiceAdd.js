import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, removeService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => { // внесение данных
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {  // Save - добавление в список
		evt.preventDefault();
		dispatch(addService(item.name, item.price));
	}

	const handleCancel = () => { // Cancel - не работает, должно отменять редактирование и очищать inputs
		dispatch(removeService(item.id)); 
	}


	return (
		<form>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit' onClick={handleSubmit}>Save</button>
			<button type='submit' onClick={handleCancel}>Cancel</button>
		</form>
	);
}

export default ServiceAdd;