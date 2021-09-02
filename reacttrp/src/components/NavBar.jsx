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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} alt="Logo Ecomerce" style={styles}  />
  <div className="container-fluid" >
    
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active" aria-current="page" >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to={"/genero/terror"} className="nav-link" >Terror</Link>
        </li>
        <li className="nav-item">
          <Link to={"/genero/accion"} className="nav-link" >Acción</Link>
        </li>
        <li className="nav-item">
          <Link to={"/genero/aventura"} className="nav-link" >Aventura</Link>
        </li>
        <li className="nav-item">
          <Link to={"/genero/simulacion"} className="nav-link" >Simulación</Link>
        </li>
      </ul>
      <form className="d-flex" />
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        </div>
        <CartWidget />
  </nav>

        </div>
    )
}



export default NavBar
