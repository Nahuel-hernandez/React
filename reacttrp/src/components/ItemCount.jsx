import {useState} from 'react'
import { Link } from 'react-router-dom';


let styles = {
    fontSize:30,
    backgroundColor:"transparent",
    width:50,
    height: 50
}
let stylesDos={
    fontSize:30,
    backgroundColor:"transparent"
}

const ButtonAddToCart = () => {
    return <button  className="btn btn-outline-danger" style={stylesDos}>Agregar al carrito</button>
}

const ButtonViewCart = () => {
    return (
    <Link exact path to={'/Cart'}> <button  className="btn btn-outline-danger" style={stylesDos}>Terminar compra</button></Link>
    )
}

const ItemCount = ({initial, onAdd}) => {
const [cantidad, setCantidad] = useState(initial)
const [bAdd , setbAdd] = useState ('botcount')

const sumar =()=>{
    setCantidad(cantidad +1)        
}

const restar =()=>{
    if(cantidad > initial) setCantidad(cantidad - 1)
}   

const handleClick=()=>{
    onAdd(cantidad)
    setCantidad(initial)
    setbAdd('botadd')
}

return (
        <div>
        {bAdd ==='botcount' ? ( <button  className="btn btn-outline-danger" onClick={restar} style={styles}> - </button> ) : <div/>} 
        {bAdd ==='botcount' ? ( <label className="text-danger" style={styles}>{cantidad}</label> ) : <div/>} 
        {bAdd ==='botcount' ? ( <button  className="btn btn-outline-danger" onClick={sumar} style={styles}> + </button> ) : <div/>} 
        <br /><br />
        <div>
        {bAdd ==='botcount' ? (<div onClick={handleClick}><ButtonAddToCart /></div> ) : <ButtonViewCart />}
        </div><br />
        </div>          
    )
}


export default ItemCount
