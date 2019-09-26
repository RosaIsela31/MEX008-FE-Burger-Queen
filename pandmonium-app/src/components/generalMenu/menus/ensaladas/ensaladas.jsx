import React from 'react';
import '../FoodStyle.scss';
import salad from '../../img/salad.png';
import SaladName from '../food';

function Salad (){
    return(
        <div className='container-food'>
            <SaladName name="Delirium" icon={salad} />
            <SaladName name="Paraíso Perdido" icon={salad} />
        </div>
    );
}

function Salads (){
    return(
        <div className='container'><Salad /></div>
    );
}

export default Salads;