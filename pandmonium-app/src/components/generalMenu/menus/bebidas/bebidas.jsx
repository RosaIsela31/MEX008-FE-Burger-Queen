import React from 'react';
import Drink from './bebida';

class Drinks extends React.Component {
    render(){
        return (
            <div>
                <Drink name="Malteadas"/>
                <Drink name="Sodas italianas"/>
            </div>
        );
    }
}

export default Drinks;