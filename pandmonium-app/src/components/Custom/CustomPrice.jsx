import React, { Component } from 'react';
import './style.scss';
//LocalStorage
import '../LocalStorage/LocalStorage';

class CustomPrice extends Component {
  render(){
    return(
      <div className="price-custom">
        <figure>
          <img src='../../assets/img/hamburger.png' alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <p id="classic">Classic</p>
          <p>Combo</p>
        </div>
      </div>

    )
  }
}

export default CustomPrice;