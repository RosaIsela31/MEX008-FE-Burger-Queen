import React from 'react';
import DrinkButton from '../../components/generalMenu/menus/bebidas/bebidas';
import Toolbar from '../../components/sidebar/toolbar/Toolbar';

class DrinksMenu extends React.Component {
    render (){
        return(
            <section>
                <Toolbar />
                <DrinkButton/>
            </section>
        );
    }
}

export default DrinksMenu;