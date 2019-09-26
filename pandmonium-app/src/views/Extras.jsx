import React from 'react';
import Toolbar from '../components/sidebar/toolbar/Toolbar';
import '../views/extras.scss'

class Extras extends React.Component {
    render (){
        return (
        <div>
            <Toolbar />
          <p class="title">Extras</p>
            <div className="extras">
              <button className="button-extra">Vuélvela Hawaiana</button>
              <button className="button-extra">Queso de papa</button>
              <button className="button-extra">Queso americano</button>
              <button className="button-extra">Alitas Diablo</button>
              <button className="button-extra">Papas Gajo</button>
            </div>
        </div>
        );
    
    }
    }
    export default Extras;