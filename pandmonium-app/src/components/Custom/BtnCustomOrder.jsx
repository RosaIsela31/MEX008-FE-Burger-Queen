import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// components
import Modal from '../Modal/Modal';
// assets
import './style.scss';


class BtnCustomOrder extends Component {
  state = { 
    show: false,
    changeColorGreen: true
  };

  changeColor = (x)=>{
    this.setState({changeColorGreen: !this.state.changeColorGreen})

    this.setState({ show: true });

    console.log(localStorage.getItem('No_mesa')
    );
    

    // this.setState({ show: false });
  }

  // showModal = () => {
  //   this.setState({ show: true });
  // };


  // hideModal = () => {
  //   this.setState({ show: false });
  // }
 
  render() {
    if(this.state.changeColorGreen){}

    return(
      <div>
        <div className="buttonOrder">
         <button style={{backgroundColor: (this.state.changeColorGreen) ? '#C4C4C4' : "#42FF00"}}
              onClick={this.changeColor}> Añadir Pedido </button>
        </div>,
        <Modal id='modalid' 
        show={this.state.show}
        />
      </div>
    )
  }
}

export default BtnCustomOrder;

// class TableList extends React.Component{
//   state ={
//       changeColorGreen: true
//   }
//   changeColor = (x)=>{
//       this.setState({changeColorGreen: !this.state.changeColorGreen})
     
//   }
//   render(){
//       if(this.state.changeColorGreen){
//           return(
//               <Link to="/Menu"><button style={{backgroundColor: (this.state.changeColorGreen) ? '#C4C4C4' : "#42FF00"}}
//               onClick={this.changeColor}>
//              {this.props.number}
//              </button></Link>
//           )
//       }
//       else{
//           return(
//               <button style={{backgroundColor: (this.state.changeColorGreen) ? '#C4C4C4' : "#42FF00"}} onClick={this.changeColor}>{this.props.number}
//               </button>
//           )
//       }
//    }
// }