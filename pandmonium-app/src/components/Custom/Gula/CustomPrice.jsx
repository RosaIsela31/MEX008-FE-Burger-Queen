import React, { Component } from 'react';
import hamburger from '../../../../src/assets/img/hamburger.png';
import '../style.scss';



class CustomPrice extends Component {

  handleChecket = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('gula', JSON.stringify(election)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={hamburger} alt="#"/>
        </figure>
        <div className="option-price">
          <div>
            <label htmlFor="classic" name="check" >Classic</label>
            <input 
                name="check"
                id="classic" 
                type="radio" 
<<<<<<< HEAD:pandmonium-app/src/components/Custom/CustomPrice.jsx
                value="Gula Classic" 
=======
                value="Gula classic" 
>>>>>>> 259442525c1e94f6698046fa6ce3469775873509:pandmonium-app/src/components/Custom/Gula/CustomPrice.jsx
                onChange={this.handleChecket}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
<<<<<<< HEAD:pandmonium-app/src/components/Custom/CustomPrice.jsx
                value="Gula Combo" 
=======
                value="Gula combo" 
>>>>>>> 259442525c1e94f6698046fa6ce3469775873509:pandmonium-app/src/components/Custom/Gula/CustomPrice.jsx
                onChange={this.handleChecket}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPrice;