import React,{Component} from 'react';
import imgTrash from '../../assets/img/trash.png'

class Orders extends Component{

    render(){
        return(
            <div>
            <h4>Pedidos</h4>
            <div  className = "orderContainer">
            <div type = "text" className="order-list">  
            <p> Mesa: <br /> </p>  
             {localStorage.getItem('No_mesa')} <br/> 
             {localStorage.getItem('gula')} <br/>
             {localStorage.getItem('extra')} <br/>
             {localStorage.getItem('malicia')} <br/>  
             {localStorage.getItem('soberbia')} <br/>    
             {localStorage.getItem('encarnacion')} <br/>       
             {localStorage.getItem('bananalimbo')} <br/>    
             {localStorage.getItem('encarnacion')} <br/> 
             {localStorage.getItem('jochoslaw')} <br/> 
             {localStorage.getItem('xoloescuintle')} <br/>
             {localStorage.getItem('pitbull')} <br/>  
             {localStorage.getItem('hachiko')} <br/>
             {localStorage.getItem('pastoraleman')} <br/>
             {localStorage.getItem('delirium')} <br/>
             {localStorage.getItem('paraisoperdido')} 
            </div>
            
            <figure>
                <button className= "btn-add">
                <img className = "img-add"src={imgTrash} alt="icono para desplegar"/>
                </button>
            </figure>
            </div>
            </div>
        );
    }
}


export default Orders;