import React from 'react'
import Portada from '../../context/images/inicio.jpg'
import {Link} from 'react-router-dom'
const Inicio = () => {
  return (
    <div className="inicio">
        <Link to="/"><h1 className="title">Inicio</h1></Link>
        <Link to="/productos"><h1 className="title">Productos</h1></Link>
        <img src={Portada} alt="inicio"></img>
    </div>
  )
}

export default Inicio
