import React, { Component } from 'react';
import hamburger from '../../../src/assets/img/hamburger.png';
import './style.scss';


import hamburger from '../../assets/img/hamburger.png';

class CustomPrice extends Component {

  handleChecket = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
    let store = [];
     
    store.push(election);

    localStorage.setItem('gula', JSON.stringify(store)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={hamburger} alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <div>
            <label htmlFor="classic" name="check" >Classic</label>
            <input 
                name="check"
                id="classic" 
                type="radio" 
                value="Gula classic" 
                onChange={this.handleChecket}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="Gula combo" 
                onChange={this.handleChecket}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPrice;