import React, { Component } from 'react';
import '../style.scss';

import salad from '../../../assets/img/salad.png';

class CustomPriceDelirium extends Component {

  handleChecketDelirium = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('delirium', JSON.stringify(election)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={salad} alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <div>
            <label htmlFor="classic" name="check" >Sencilla</label>
            <input 
                name="check"
                id="classic" 
                type="radio" 
                value="Delirium sencilla" 
                onChange={this.handleChecketDelirium}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="Delirium combo" 
                onChange={this.handleChecketDelirium}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceDelirium;