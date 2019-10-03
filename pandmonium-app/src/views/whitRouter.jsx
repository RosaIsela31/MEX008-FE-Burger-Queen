import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuView from '../views/MenuView/index';
import BurgerView from '../views/MenuItemView/burgerview';
import HotdogView from './MenuItemView/hotdogview.jsx';
import PizzaView from '../views/MenuItemView/pizzaview';
import SaladView from '../views/MenuItemView/saladview';
import DessertView from '../views/MenuItemView/dessertview';
// import SodaView from '../views/MenuItemView/sodaview';
// import MilkshakeView from '../views/MenuItemView/milkshakeview';
import Todos from '../firebase/todos';


class WhitRouter extends React.Component {
    render(){
        console.log(this.props.location.pathname)
        switch(this.props.location.pathname){
            case '/Menu':
                return(<MenuView/>)
            case '/burgers':
                return (<BurgerView/>)
            case '/hotdogs':
                 return (<HotdogView />)
            case '/pizzas':
                 return(<PizzaView/>)
            case '/ensaladas':
                 return(<SaladView/>)
            case '/postres':
                 return(<DessertView/>)
             case '/soda':
               return(<Todos />)
            // case '/malteadas':
            //     return(<MilkshakeView />)
          
            default:
                return (<p>404</p>) 
        }
        
    }
}

export default withRouter(WhitRouter);