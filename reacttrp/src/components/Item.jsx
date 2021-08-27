import { useState, useEffect } from 'react'

const juegos =[
    {nombre:"Silent Hill",precio:100,genero:"terror",id:1},
    {nombre:"Resident Evil",precio:90,genero:"terror",id:2},
    {nombre:"Sea of Thieves",precio:300,genero:"aventura",id:3},
    {nombre:"Rainbox Six",precio:100,genero:"fps",id:4},
    {nombre:"World of Warcraft",precio:500,genero:"mmorpg",id:5},
    {nombre:"Tomb Raider",precio:120,genero:"accion",id:6},
    {nombre:"Need for Speed",precio:200,genero:"carreras",id:7},
    {nombre:"Counter Strike",precio:80,genero:"fps",id:8},
    {nombre:"Eurotruck Simulator",precio:70,genero:"simulador",id:9},
    {nombre:"Mortal Kombat",precio:270,genero:"accion",id:10},
    {nombre:"Life is Strange",precio:180,genero:"aventura",id:11},
    {nombre:"Doom",precio:400,genero:"accion",id:12},
    {nombre:"Dark Souls",precio:200,genero:"accion",id:13},
    {nombre:"Alien Isolation",precio:300,genero:"terror",id:14},
    {nombre:"Dead Space",precio:150,genero:"terror",id:15}];


function getJuegos(id) {  //futuro buscador?

    if (id===undefined){
        return juegos;
    }       
    else{
        return juegos.find(juegos=> juegos.id ===id)
    }
}

let tarea = new Promise((resolve) => {
    setTimeout(() => {
        resolve(getJuegos());        
    }, 2000);
});

function Item() {
    let [estado, setEstado] = useState({juegos})
    useEffect(() => {
        tarea
        .then((resp)=> console.log(resp) )     //guardar en el estado
    }, [resp])
    return (
        setEstado(estado=resp),

        <div className="App" >
        
                <div className="card-header">
                    {estado.nombre}
                </div>
                
                </div>
)
}

export default Item
