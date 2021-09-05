
import React from 'react'
import { Link } from 'react-router-dom'

function Item({item}) {

    const {nombre,precio,genero,id,urlImg} = item;
    return (
    
<Link to={`/detalle/${id}`}>



<div className="app" >
    <div key={id} className="card border-danger">
        <div className="card-body text-danger ">
        <img src={urlImg} alt="Imagen del juego" width="600" height="400"/>
            <div className="card-title "> {nombre} </div>
            </div>       
            <div>
                <div className="card-text text-danger">Precio: {precio} AR$</div> <br />
                <div className="card-text text-danger">Genero: {genero}</div> 
                </div>
                </div>
                
    </div>
    </Link>
    )
}

export default Item


