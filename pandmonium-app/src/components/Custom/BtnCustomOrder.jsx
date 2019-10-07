import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import './style.scss';


class BtnCustomOrder extends Component {
  state = { 
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  // hideModal = () => {
  //   this.setState({ show: false });
  // }
 
  render() {
    return(
      <div>
        <div className="buttonOrder">
         <button className="buttonOrder" onClick={this.showModal} > Añadir Pedido </button>
        </div>
        <Modal id='modalid' 
        show={this.state.show}
        />
      </div>
    )
  }
}

export default BtnCustomOrder;

