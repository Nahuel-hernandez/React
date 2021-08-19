import React from 'react'

let styles = {
    textDecoration : "underline",
    color : "#FC0000",
    fontFamily:"Courier"
}


function ItemListContainer() {
    const greetins =<h1 style={styles}>Este texto luego sera un catalogo, o tal vez no :O</h1> 

    return (

        <div>
        {greetins}   
        </div>

    )
}

export default ItemListContainer
