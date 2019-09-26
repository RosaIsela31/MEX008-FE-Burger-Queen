import React from 'react';
import Desserts from '../../components/generalMenu/menus/postres/postres';
import Toolbar from '../../components/sidebar/toolbar/Toolbar';


class DessertsMenu extends React.Component {
    render (){
        return (
        <div>
            <Toolbar />
            <Desserts />
        </div>
        );
    
    }
    }
    export default DessertsMenu;