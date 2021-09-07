import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

function ItemDetail({item}) {
    
    const [contador , setContador] = useState ()

    function onAdd(cant) {
    setContador(cant)
    console.log("la cantidad es",contador)
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
                <ItemCount  onAdd={onAdd}/>
                <Link exact path to={'/'}> <button className="btn btn-outline-danger" >Volver al inicio</button></Link>
                </div>
    </div>
    )
}

export default ItemDetail
