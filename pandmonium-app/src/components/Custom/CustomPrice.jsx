import React, { Component } from 'react';
import './style.scss';
//LocalStorage
import '../LocalStorage/LocalStorage';

class CustomPrice extends Component {

  handleChecket = (e) => {
    // console.log(e.target.value);
    const election = e.target.value;
    let store = [];
    // console.log(localStorage);
       if(localStorage.getItem(election) === null){
         store = [];
       }
      //  else{
      //    store = JSON.parse(localStorage.getItem(election));
      //  }

    store.push(election);

    localStorage.setItem('gula', JSON.stringify(store)); 
    // console.log(store);
  }

  render(){
    return(
      <div className="price-custom">
        <figure className="cuadro">
          <img className="iconFood"  src='../../assets/img/hamburger.png' alt="#"/>
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
                value="classic" 
                onChange={this.handleChecket}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="combo" 
                onChange={this.handleChecket}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPrice;