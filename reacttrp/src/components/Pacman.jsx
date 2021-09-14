import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";



function Pacman() {
    return (
        <div>
            <div><h1> LOADING GAME </h1><br /> <PacmanLoader color={"yellow"} size={100}/> </div>            
        </div>
    )
}

export default Pacman
