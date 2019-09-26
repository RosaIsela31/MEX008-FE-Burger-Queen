import React from 'react';
import '../FoodStyle.scss';
import dessert from '../../img/postre.png';
import DessertName from '../food'

function Dessert() { //componente principal
    return (
      <div className= "container-food">
        <DessertName name="Mousse de Tofu"icon= {dessert} />
        <DessertName name="Vegatina" icon={dessert}/>
        <DessertName name="Pan dulce" icon={dessert}/>
      </div>
    );
  }

function Desserts (){
    return (
        <div className="container"><Dessert/></div>
    )
}


export default Desserts;