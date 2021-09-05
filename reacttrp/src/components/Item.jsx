
import React from 'react'
import { Link } from 'react-router-dom'

function Item({item}) {
    return (
    
<Link to={`/detalle/?id=${item.id}`}>

<div className="app" >
    <div key={item.id} className="card border-danger">
        <div className="card-body text-danger ">
        <img src={item.urlImg} alt="Imagen del juego" width="600" height="400"/>
            <div className="card-title "> {item.nombre} </div>
            </div>       
            <div>
                <div className="card-text text-danger">Precio: {item.precio} AR$</div> <br />
                </div>
                </div>
                
    </div>
    </Link>
    )
}

export default Item


