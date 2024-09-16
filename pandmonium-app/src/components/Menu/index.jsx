import React, {Component} from 'react';
import MenuItem  from '../MenuItem/index';

class Menu extends Component {
    render(){
        return(
                this.props.icons.map((element) => 
                <MenuItem item={element} key={element.id}/>)
        );
}}
export default Menu;