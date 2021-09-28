import React from 'react'
import { Link } from 'react-router-dom'
import carrito from './Media/carrito.png'
import { useCartContext } from '../context/cartContext'


function CartWidget() {

    const {producto} = useCartContext ()

    let total=0
    return ( <div>
        {producto.length === 0 ? (<div ></div>) : (<div>
        {producto.map((item)=> 
        <div className="ocultar">{total=total+item.quantity}</div>)} <label>{total}</label><Link exact path to={'/Cart'}>  <img src={carrito} alt="Logo carrito"  /></Link></div>)}
        </div>
    )
}


export default CartWidget

