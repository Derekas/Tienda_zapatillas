import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Inicio from './Inicio/index'
import ProductosLista from './Productos/index'
import ProductoDetalles from './Productos/ProductoDetalles'
const Paginas = () => {
  return (
    <section>
        <Switch>
            <Route path="/" exact component={Inicio}/>
            <Route path="/productos" exact component={ProductosLista}/>
            <Route path="/producto/:id" exact component={ProductosLista}/>
        </Switch>
    </section>
  )
}
export default Paginas
