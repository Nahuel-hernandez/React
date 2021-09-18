import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import Pacman from './Pacman'
import { getFirestore } from '../service/getFirebase'

const ItemDetailContainer = (props) => {

    let [estado, setEstado] = useState({})
    let [loading, setloading] = useState(true)



    const id = props.match.params.id;

    useEffect(() => {
        const db = getFirestore()
        const queryDb = db.collection('Juegos').doc(id).get()
        .then (resp => {
            if (resp === 0){
                console.log("Error de conexion con la base de datos",queryDb)
                setloading(false)
            }
            setEstado({id: resp.id, ...resp.data()})
            setloading(false)
        })
        },[id]) 

    return (
        <div>
    {loading === true ? (<Pacman /> ) : ( estado.id && <ItemDetail item={estado} />) }
    </div>
    )
}

export default ItemDetailContainer
