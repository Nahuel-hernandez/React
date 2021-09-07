import React from 'react'
import { Link } from 'react-router-dom'
import carrito from './Media/carrito.png'


function CartWidget() {
    return (
        <Link exact path to={'/Cart'}>  <img src={carrito} alt="Logo carrito"  /> </Link>
    )
}

CartWidget.propTypes = {

}

export default CartWidget

