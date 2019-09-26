import React from 'react';
import '../FoodStyle.scss';
import pizza from '../../img/pizza.png';
import PizzaName from '../food'

function Pizza() { //componente principal
    return (
      <div className= "container-food">
        <PizzaName name="Chaneque"icon= {pizza} />
        <PizzaName name="Sodoma" icon={pizza}/>
        <PizzaName name="Lujuria" icon={pizza}/>
        <PizzaName name="Ángel caído" icon={pizza}/>
        <PizzaName name="Purgatorio" icon={pizza}/>
        <PizzaName name="Tiki-Hawaiana" icon={pizza}/>
      </div>
    );
  }

function Pizzas (){
    return (
        <div className="container"><Pizza/></div>
    )
}


export default Pizzas;
