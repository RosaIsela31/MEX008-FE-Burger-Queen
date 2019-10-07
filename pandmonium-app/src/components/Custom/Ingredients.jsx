import React, { Component } from "react";
import './style.scss';
//import CheckBox from './CheckBox';

class Ingredients extends Component {
  handleChecket = (e) => {
    console.log(e.target.value);
    const checked = e.target.value;
    let store = [];

    store.push(checked);
    localStorage.setItem('extras', JSON.stringify(store));
  }
  render(){
    return(
      <div className="ingredientsOptions">
        {/* <p>{this.props.data.description}</p> */}
        
        <p>Mezcla de vegetales con:<br></br>
        Avena,Garam,Lechuga<br></br>
        Masala (Especies hindúes)<br></br>
        Jitomate<br></br>
        Germinado de alfalfa<br></br>
        Pepinillos</p>

        <label htmlFor="Hawaiana" name="hawaiana">Vuelvela Hawaiana + $20
            <input
            name= "hawaiana"
            id="hawaiana"
            type="radio"
            value="Vuelvela Hawaiana"
            onChange={this.handleChecket}
            />
       </label>
       <label htmlFor="Americano" name="americano">Queso tipo americano + $15
            <input
            name= "americano"
            id="americano"
            type="radio"
            value="Queso tipo Americano"
            onChange={this.handleChecket}
            />
       </label>

       <label htmlFor="Papa" name="quesopapa">Queso de papa + $10
            <input
            name="quesopapa"
            id="quesopapa"
            type="radio"
            value="Queso de papa"
            onChange={this.handleChecket}
            
            
            />

       </label>
       
      </div>
    )
  }
}

export default Ingredients;