import React,{useContext} from 'react'
import { DataContext } from '../../context/Dataprovider'
import ProductosItem from './ProductoItem'
const ProductosLista = () => {

    const value=useContext(DataContext)
    const [productos]=value.productos
  return (
    <>
    <h1 className="title">PRODUCTOS</h1>
    <div className="productos">
        {
            productos.map(producto =>(
                <ProductosItem 
                key={producto.id} 
                id={producto.id} 
                title={producto.title} 
                price={producto.price} 
                image={producto.image} 
                category={producto.category} 
                cantidad={producto.cantidad}/>
            ))
        }
        
    </div>
    </>
  )
}

export default ProductosLista
