import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Pacman from './Pacman'
import { getFirestore } from '../service/getFirebase'


let styles= {
    maxWidth: 250,
    marginLeft:800
}

function ItemListContainer() {

let [cargando, setCargando] = useState("true")
const [estado, setItems] = useState([])
const { gener } = useParams()

    useEffect(() => {
        
        const db = getFirestore()
        const queryDb = db.collection('Juegos')
        
        const condicion = gener ? 
        queryDb.where('genero','==',gener)
        : 
        queryDb
        condicion.get()

        .then (resp => {
            if (resp.size===0){
                console.log('Esta vacio')
            }
            setCargando("false")
            setItems(resp.docs.map(item=> ({id: item.id, ...item.data() } ) ) )
            })
    },[gener])

return (

    <div>
    {cargando === "true" ? (<Pacman /> ) : ( <ItemList style={{styles}} items={estado} />) }
    </div>
)
}

export default ItemListContainer
