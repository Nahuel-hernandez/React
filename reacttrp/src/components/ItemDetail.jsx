import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import React from 'react';
import { useCartContext } from '../context/cartContext'

function ItemDetail({item}) {

    const producto  = item

    const {agregarAlCarrito} = useCartContext ()

    const onAdd=(cant)=>{
        agregarAlCarrito(producto, cant)
    }

    return (    
    <div className="app" >
    <div key={item.id} className="card border-danger">
        <div className="card-body text-danger ">
        <img src={item.urlImg} alt="Imagen del juego" width="600" height="400"/>
            <div className="card-title "> {item.nombre} </div>
            </div>       
            <div>
                <div className="card-text text-danger">Precio: {item.precio} AR$</div> <br />
                <div className="card-text text-danger">Genero: {item.genero}</div> 
                </div>
                <ItemCount  initial={1} onAdd={onAdd}/>
                <Link exact path to={'/'}> <button className="btn btn-outline-danger" >Volver al inicio</button></Link>
                </div>
    </div>
    )
}

export default ItemDetail
