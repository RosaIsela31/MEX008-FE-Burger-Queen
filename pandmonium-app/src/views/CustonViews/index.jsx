import React, { Component } from 'react';
import CustomContainer from '../../components/Custom/CustomContainer';
import Sidebar from '../../components/sidebar/Sidebar';

class CustomView extends Component {
  render (){
    return(
      <div>
        <Sidebar />,
        <CustomContainer />
      </div>

    )
  }
}

export default CustomView;