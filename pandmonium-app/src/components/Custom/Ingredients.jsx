import React, { Component } from "react";
import './style.scss';
import CheckBox from './CheckBox';

class Ingredients extends Component {
  render(){
    return(
      <div className="ingredientsOptions">
        {/* <p>{this.props.data.description}</p> */}
        <p>Ingrediente 2</p>
        <p>Ingrediente 3</p>
        <p>Ingrediente 4</p>
        <p>Ingrediente 5</p>
        <p>Ingrediente 6</p>
      </div>
    )
  }
}

export default Ingredients;