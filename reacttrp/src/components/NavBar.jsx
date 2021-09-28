import React from 'react'
import CartWidget from './CartWidget'
import logo from './Media/logo.png'
import { Link } from 'react-router-dom'


let styles = {
    width: 120,
    height: 100
}


function NavBar() {
return (

  <div>
      <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} alt="Logo Ecomerce" style={styles}  />
      <div className="container-fluid" >
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
        <li className="nav-item active">
          <Link to={'/'} className="nav-link text-danger active" aria-current="page" >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to={"/genero/terror"} className="nav-link text-danger" >Terror</Link>
        </li>
        <li className="nav-item">
          <Link to={"/genero/accion"} className="nav-link text-danger" >Acción</Link>
        </li>
        <li className="nav-item">
          <Link to={"/genero/aventura"} className="nav-link text-danger" >Aventura</Link>
        </li>
        <li className="nav-item">
          <Link to={"/genero/simulador"} className="nav-link text-danger" >Simulación</Link>
        </li>
      </ul>
      </div>
      <CartWidget />
      </nav>
  </div>
)
}



export default NavBar
