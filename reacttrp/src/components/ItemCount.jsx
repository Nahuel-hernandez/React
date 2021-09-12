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
    return <button style={stylesDos}>Agregar al carrito</button>
}

const ButtonViewCart = () => {
    return (
    <Link exact path to={'/Cart'}> <button style={stylesDos}>Terminar compra</button></Link>
    )
}

const ItemCount = ({initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const [bAdd , setbAdd] = useState ('botcount')
    const handlerAdd =()=>{
        setCount(count +1)        
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handleClick=()=>{
        onAdd(count)
        setCount(initial)
        setbAdd('botadd')
    }

    return (
        <div>
        {bAdd ==='botcount' ? ( <button onClick={handlerRm} style={styles}> - </button> ) : <div/>} 
        {bAdd ==='botcount' ? ( <label style={styles}>{count}</label> ) : <div/>} 
        {bAdd ==='botcount' ? ( <button onClick={handlerAdd} style={styles}> + </button> ) : <div/>} 
        <br /><br />
        <div>
        {bAdd ==='botcount' ? (<div onClick={handleClick}><ButtonAddToCart /></div> ) : <ButtonViewCart />}
        </div><br />
        </div>          
    )
}


export default ItemCount
