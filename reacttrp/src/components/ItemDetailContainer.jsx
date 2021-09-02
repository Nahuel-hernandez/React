import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';

const juegos =[
    {nombre:"Silent Hill",precio:100,genero:"terror",id:1,urlImg:"https://www.egames.news/__export/1624138472203/sites/debate/img/2021/06/19/silent_hill_-_01.jpg_423682103.jpg"},
    {nombre:"Resident Evil",precio:90,genero:"terror",id:2,urlImg:"https://areajugones.sport.es/wp-content/uploads/2016/03/Resident-Evil-6-Logo.jpg"},
    {nombre:"Sea of Thieves",precio:300,genero:"aventura",id:3,urlImg:"https://www.zonammorpg.com/wp-content/uploads/2018/01/3b9907bf-92ef-46e4-9a02-ecbd453252cc.jpg"},
    {nombre:"Rainbox Six",precio:100,genero:"accion",id:4,urlImg:"https://www.egames.news/__export/1613975597884/sites/debate/img/2021/02/21/cuxnto_pesa_rainbow_sixx_requisitos_mxnimos_y_recomendados.jfif_242310155.jfif"},
    {nombre:"World of Warcraft",precio:500,genero:"aventura",id:5,urlImg:"https://depor.com/resizer/VmbW0YqgmwndDxau1aD_RVGeB2c=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HFTKHCX2AFFHNOWW3ANTZY7TOU.jpg"},
    {nombre:"Tomb Raider",precio:120,genero:"accion",id:6,urlImg:"https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2016/04/tombraider.jpg?width=1200&enable=upscale"},
    {nombre:"Need for Speed",precio:200,genero:"simulador",id:7,urlImg:"https://img.youtube.com/vi/9ewiJJe_nYI/maxresdefault.jpg"},
    {nombre:"Counter Strike",precio:80,genero:"accion",id:8,urlImg:"https://rkesport.com/wp-content/uploads/2020/11/cs-go-Counter-Strike-Global-Offensive-page-portada-883x494.jpg"},
    {nombre:"Eurotruck Simulator",precio:70,genero:"simulador",id:9,urlImg:"https://img.autocosmos.com/noticias/fotosprinc/NAZ_c981d9337580484c89fcaf32010d3b41.jpg"},
    {nombre:"Mortal Kombat",precio:270,genero:"accion",id:10,urlImg:"https://i.blogs.es/e3229f/mk11ultimate/450_1000.jpeg"},
    {nombre:"Life is Strange",precio:180,genero:"aventura",id:11,urlImg:"https://i.blogs.es/32e78b/lifeisstrange00/1366_2000.jpg"},
    {nombre:"Doom",precio:400,genero:"accion",id:12,urlImg:"https://images.ctfassets.net/rporu91m20dc/48FOwmEHJwz03qpd42nzwr/4f08db516cdcd51dc44d3c0474484b3b/doom_eternal_bg_date_m_w_launch.jpg?q=70"},
    {nombre:"Dark Souls",precio:200,genero:"accion",id:13,urlImg:"https://cdn.cloudflare.steamstatic.com/steam/apps/374320/capsule_616x353.jpg?t=1628263692"},
    {nombre:"Alien Isolation",precio:300,genero:"terror",id:14,urlImg:"https://i.blogs.es/ab2d76/060814-alien-isolation-tlqns/1366_2000.jpg"},
    {nombre:"Dead Space",precio:150,genero:"terror",id:15,urlImg:"https://media.vandal.net/i/1200x630/7-2021/202172220103598_1.jpg"}];

    

function getJuegos(id) {
    if (id===undefined) {
        return juegos
    }else{
        return juegos.find( juego=> juego.id === id)
}};


let tarea = new Promise((resolve ) => { 
    setTimeout(() => {
        resolve(getJuegos(4));  
    }, 2000);
});


function ItemDetailContainer() {

    let [estado, setEstado] = useState({})

    useEffect(() => {
        tarea.then((resp)=> setEstado(resp))
        },[]) 
    
    return (
        <div>
            <ItemDetail item={estado} />
            </div>
    )
}

export default ItemDetailContainer
