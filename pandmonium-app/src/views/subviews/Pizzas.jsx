import React from 'react';
<<<<<<< HEAD
import Pizzas from '../../components/generalMenu/menus/pizzas/Pizzas';
// import Pizzas from '../../components/generalMenu/menus/pizzas/Pizzas';
=======
import Pizzas from '../../components/generalMenu/menus/pizzas/pizzas';
>>>>>>> upstream/rama-pandmonium
import Toolbar from '../../components/sidebar/toolbar/Toolbar';

class PizzasMenu extends React.Component {
    render(){
        return (
            <div>
                <Toolbar />
                <Pizzas />
            </div>
        );
    }
}

export default PizzasMenu;