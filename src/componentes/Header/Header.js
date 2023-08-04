import React,{useContext} from 'react'
import Nike from '../../context/images/Nike.jpg'
import {Link} from 'react-router-dom'
import { DataContext } from '../../context/Dataprovider'
const Header = () => {

    const value= useContext(DataContext)
    const [menu ,setMenu]=value.menu;
    const [carrito,setCarrito]=value.carrito;

    const toogleMenu=() => {
        setMenu(!menu);
    }

  return (
    <header>
        <div className="menu">
            <box-icon name="menu"></box-icon>
        </div>
        <Link to="/">
            <div className="logo">
                <img src={Nike} alt="logo" width="150"/>
            </div>
        </Link>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/productos">Productos</Link>
            </li>
            <div className="cart" onclick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{carrito.length}</span>
            </div>
        </ul>
    </header>
  )
}

export default Header
