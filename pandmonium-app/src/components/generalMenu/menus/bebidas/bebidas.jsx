import React from 'react';
import '../FoodStyle.css';

function Drink(props){
    return(
        <button>{props.name}</button>
    );
}

class Drinks extends React.Component {
    render(){
        return (
            <div className="container">
                <Drink name="Malteadas"/>
                <Drink name="Sodas italianas"/>
            </div>
        );
    }
}

export default Drinks;