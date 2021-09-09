import { useCartContext } from '../context/cartContext'


function Cart() {
    const {borrarCarrito} = useCartContext ()
    return (
        <div>
            <h1>Hola soy un cart</h1>
            <button onClick={borrarCarrito}>Borrar Carrito</button>
        </div>
    )
}

export default Cart
