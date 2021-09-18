
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

    let [loading, setloading] = useState(true)
    const [estado, setItems] = useState([])

    const { gener } = useParams()

    useEffect(() => {
        if (gener === undefined){
        const db = getFirestore()
        const queryDb = db.collection('Juegos').get()
        .then (resp => {
                console.log(queryDb)
                setloading(false)
            setItems(resp.docs.map(item=> ({id: item.id, ...item.data()})))
            setloading(false)})}

                else{
                    const db = getFirestore()
                    const queryDb = db.collection('Juegos').doc().get()
                    .then((resp)=> setItems(resp.docs.filter( r => gener===r.genero)),setloading(false) )
                }

            },[gener]
        ) 


    console.log(estado)


        return (

            <div>
            {loading === true ? (<Pacman /> ) : ( <ItemList style={{styles}} items={estado} />) }
            </div>
        )
    }

export default ItemListContainer
