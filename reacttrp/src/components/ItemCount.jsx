import React, { useState } from 'react';
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

const ItemCount = (props) => {

    let stock = 11;
    const [bAdd , setbAdd] = useState ('botcount')

    const [cantidad , setCambio] = useState(1);



    const Sumar = () => {
        if (cantidad<stock){
        setCambio(cantidad + 1);
    }else{
        return false;
    }
};

    const Restar = () => {
        if (cantidad===1 ){
            return false;
        }
        else{
        setCambio(cantidad - 1);
    }   
    };

    const handleClick =()=>{
        setbAdd('botadd')
        props.onAdd(cantidad)
    }

    return (
        <div>
        {bAdd ==='botcount' ? ( <button onClick={Restar} style={styles}> - </button> ) : <div/>} 
        {bAdd ==='botcount' ? ( <label style={styles}>{cantidad}</label> ) : <div/>} 
        {bAdd ==='botcount' ? ( <button onClick={Sumar} style={styles}> + </button> ) : <div/>} 
        <br /><br />
        <div onClick={handleClick}>
        {bAdd ==='botcount' ? (<ButtonAddToCart /> ) : <ButtonViewCart />}
        </div><br />
        </div>
    )
};

export default  ItemCount



