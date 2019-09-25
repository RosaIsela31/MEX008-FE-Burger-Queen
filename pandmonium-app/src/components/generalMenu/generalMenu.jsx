import React from 'react';
import './menus/FoodStyle.css';
import FoodMenu from './generalFood';


import hamburger from './img/hamburger.png';
import pizza from './img/pizza.png';
import jocho from './img/jocho.png';
import salad from './img/salad.png';
import drink from './img/bebida.png';
import dessert from './img/postre.png';

import {Link} from 'react-router-dom';


function Menu(){ //componente 1
    return (
      <div className= "container-food">
          <Link to={'/Hamburguesas'}><FoodMenu name="principal-hamburger" icon={hamburger} /></Link>
          <Link to={'/Pizzas'}><FoodMenu name="principal-pizza" icon={pizza} /></Link>
          <Link to={'/Hotdogs'}><FoodMenu name="principal-jocho" icon={jocho} /></Link>
          <Link to={'/Ensaladas'}><FoodMenu name="principal-salad" icon={salad} /></Link>
          <Link to={'/Bebidas'}><FoodMenu name="principal-bebida" icon={drink} /></Link>
          <Link to={'/Postres'}><FoodMenu name="principal-postre" icon={dessert} /></Link>
      </div>
    );
  }
  

function AllFood (){
    return (
        <div className="container">
            <Menu/>
        </div>
    );
}


export default AllFood;
