import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

function ItemDetail({item}) {
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
                <ItemCount /><br /><br />
                <Link exact path to={'/'}> <button className="btn btn-outline-danger">Volver al inicio</button></Link>
                </div>
                
    </div>
    )
}

export default ItemDetail
