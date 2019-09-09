import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeServiceField, addService, removeService} from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  handleChange = evt => { // внесение данных
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  }

  handleSubmit = evt => { // Save - добавление в список
    const {item} = this.props;
    evt.preventDefault();
    this.props.onSave(item.name, item.price);
  }

  handleCancel = () => {
    const {item} = this.props;
		this.props.onChange(item.name, item.price);// Cancel - не работает, должно отменять редактирование и очищать inputs
	}


  render() {
    const { item } = this.props;

    return (
      <form>
        <input name='name' onChange={this.handleChange} value={item.name} />
        <input name='price' onChange={this.handleChange} value={item.price} />
        <button type='submit' onClick={this.handleSubmit}>Save</button>
        <button type='submit' onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }
}


ServiceAddClassBased.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.serviceAdd,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (name, price) => dispatch(addService(name, price)),
  }
};

// const mapDispatchToProps = ({
//   onChange: changeServiceField,
//   onSave: addService,
// });

export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddClassBased);
