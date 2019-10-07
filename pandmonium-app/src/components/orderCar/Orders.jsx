import React,{Component} from 'react';
import imgTrash from '../../assets/img/trash.png'

class Orders extends Component{

    render(){
        return(
            <div>
            <h4>Pedidos</h4>
            <div  className = "orderContainer">
            <div type = "text" className="order-list">  
            <p> Mesa: <br />
             {localStorage.getItem('No_mesa')}
            </p>  
            <p>
             {localStorage.getItem('gula')}
            </p>          
            <p>
            {localStorage.getItem('extras')}   
            </p>
            </div>
            
            <figure>
                <button className= "btn-add">
                <img className = "img-add"src={imgTrash} alt="icono para desplegar"/>
                </button>
            </figure>
            </div>
            {/* -------------------------- */}
            </div>
        );
    }
}


export default Orders;