import React, { Component } from 'react';
import './style.scss';

class CustomPrice extends Component {
  render(){
    return(
      <div className="price-custom">
        <figure>
          <img src='../../assets/img/hamburger.png' alt="#"/>
        </figure>
        <div className="option-price">
          <p>Opción 1</p>
          <p>Opción 2</p>
        </div>
      </div>

    )
  }
}

export default CustomPrice;