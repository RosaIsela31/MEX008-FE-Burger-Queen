import React, { Component } from 'react';
import '../style.scss';

import pizza from '../../../assets/img/pizza.png';

class CustomPriceTikiHawaiana extends Component {

  handleChecketTikiHawaiana = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('tikihawaiana', JSON.stringify(election)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={pizza} alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <div>
            <label htmlFor="classic" name="check" >Chica</label>
            <input 
                name="check"
                id="chica" 
                type="radio" 
                value="TikiHawaiana chica" 
                onChange={this.handleChecketTikiHawaiana}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Mediana</label>
            <input 
                name="check"
                id="mediana" 
                type="radio" 
                value="TikiHawaiana mediana" 
                onChange={this.handleChecketTikiHawaiana}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Grande</label>
            <input 
                name="check"
                id="grande" 
                type="radio" 
                value="TikiHawaiana grande" 
                onChange={this.handleChecketTikiHawaiana}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceTikiHawaiana;