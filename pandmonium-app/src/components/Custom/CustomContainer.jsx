import React, { Component } from 'react';
import Ingredients from './Ingredients';
import CustomPrice from './CustomPrice';
import './style.scss';
import Modal from '../Modal/Modal';



class CustomContainer extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };


  hideModal = () => {
    this.setState({ show: false });
  }
 

  render(){
    // const gula = this.props.data.filter((element) => {
    //   return element.name === 'Gula'
    // })
  
    return(
      // gula.map((element) => 
      <div className="customContainerPrincipal">
        <CustomPrice 
        // classic={element.classic}  combo={element.combo}
        />
        <Ingredients 
        // ingredients={this.props.data} 
        />

        <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div>
        <Modal id='modalid' 
        show={this.state.show}
        // close={this.closeModalHandler}
        />

      </div>
      // )
    );
  };     
};

export default CustomContainer;

const classic = document.querySelector('#classic');
console.log(classic);


// Load-EventsListeners 

loadEventListeners();

function loadEventListeners() {

}

const getTasks = () => {
  let tasks;
 document.querySelector('#classic')}