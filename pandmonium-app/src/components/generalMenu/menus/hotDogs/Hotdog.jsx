import React from 'react';
import '../FoodStyle.scss';
import hotdogs from '../../img/jocho.png';
import HotdogName from '../food'

//con props


function Hotdog() { //componente principal
  return (
    <div className= "container-food">
      <HotdogName name="Jochoslaw"icon= {hotdogs} />
      <HotdogName name="Xoloescuintle" icon={hotdogs}/>
      <HotdogName name="Pit bull" icon={hotdogs}/>
      <HotdogName name="Hachiko" icon={hotdogs}/>
      <HotdogName name="Pastor alemán" icon={hotdogs}/>

    </div>
  );
}
export default Hotdog;
