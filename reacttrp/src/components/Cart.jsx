import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

let styles = {
    fontSize:30,
    backgroundColor:"transparent",
    width:250,
    height: 50
}


function Cart() {
    const {borrarCarrito,producto,borrarJuego} = useCartContext ()
    

    console.log ("asdasd",producto)
    
    let total=0

    return (
    
        <div>
            {producto.length ===0 ? ( <div><h1 className="text-danger">El carrito esta vacio</h1><br/>  <Link exact path to={'/'}> <button className="btn btn-outline-danger" >Volver al inicio</button></Link> </div> ) : (<div>
            {producto.map((item)=> 
            <div className="app" >
            <div key={item.item.id} className="card border-danger" >
            <div className="card-body text-danger ">
            <img src={item.item.urlImg} alt="Imagen del juego" width="600" height="400"/>
            <div className="card-title "> {item.item.nombre} </div>
            </div>       
            <div>
                <div className="card-text text-danger">Precio por unidad: {item.item.precio} AR$</div> <br />
                <div className="card-text text-danger">Genero: {item.item.genero}</div> <br />
                <div className="card-text text-danger"> Cantidad: {item.quantity} </div> <br />
                <div className="card-text text-danger"> precio total de este juego: {(item.quantity)*(item.item.precio)} </div>
                <div className="ocultar">{total=total+(item.quantity)*(item.item.precio)}</div><br/>
                <button className="btn btn-outline-danger" onClick={()=>borrarJuego(item.item.id)} style={styles}>Borrar Juego</button>
                </div>
                </div>
                </div>
                )}
                <h1 className="text-danger">El total a pagar es de  {total} AR$ </h1> <button className="btn btn-outline-danger" onClick={borrarCarrito} style={styles}>Borrar Carrito</button></div>)}
                </div>
            )
}

export default Cart
