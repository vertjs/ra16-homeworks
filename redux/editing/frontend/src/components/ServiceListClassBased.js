import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {removeService, changeServiceField} from '../actions/actionCreators';
import {connect} from 'react-redux';

class ServiceListClassBased extends Component {
  handleRemove = id => { // удаление из списка
    this.props.removeService(id);
  }

  handleEdit = (id, name, price) => { // Каранадаш - не работает, должно заполнять inputs и перезаписываться после нажатия Save
    console.log(id, name, price)
    this.props.changeServiceField(id, name, price)
  }


  render() {
    const {items} = this.props;

    return (
      <ul>
        {items.map(o => (
          <li key={o.id}>
            {o.name} {o.price}
            <button onClick={() => this.handleEdit(o.id, o.name, o.price)}>✎</button>
            <button onClick={() => this.handleRemove(o.id)}>✗</button>
          </li>
        ))}
      </ul>
    )
  }
}

ServiceListClassBased.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
}

const mapStateToProps = (state) => ({
  items: state.serviceList,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeService: id => dispatch(removeService(id))
//   }
// };

const mapDispatchToProps = ({
  removeService,
  changeServiceField
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
