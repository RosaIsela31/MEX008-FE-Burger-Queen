import React from 'react';
import Salads from '../../components/generalMenu/menus/ensaladas/ensaladas';
import Toolbar from '../../components/sidebar/toolbar/Toolbar';


class SaladsMenu extends React.Component {
    render (){
        return (
        <div>
            <Toolbar />
            <Salads />
        </div>
        );
    
    }
    }
    export default SaladsMenu;