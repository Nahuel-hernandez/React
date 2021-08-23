
import React, { useState } from 'react';

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


function ItemCount () {
    let stock = 11;    

    const [cantidad , setCambio] = useState(1);

    const Sumar = () => {
        if (cantidad<stock){
        setCambio(cantidad + 1);
    }else{
        return false;
    }
};

    const Restar = () => {
        if (cantidad===1){
            return false;
        }
        else{
        setCambio(cantidad - 1);
    }   
    };

    const Mostrar = () => {
        console.log("usted ha agregado",{cantidad},"de productos");

    }

    return (
        <div >
        <button onClick={Restar} style={styles}> - </button>
        <label style={styles}>{cantidad}</label>
        <button onClick={Sumar} style={styles}> + </button>
        <br /><br />
        <button onClick={Mostrar} style={stylesDos}>Agregar al carrito</button>
        </div>
    )
};

export default  ItemCount