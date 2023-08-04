import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/Dataprovider'



const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = useState()
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;
    const tooglefalse = () => {
        setMenu(false)
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";


    const resta=id=>{
        carrito.forEach((item)=>{
            if(item.id===id){
                item.cantidad === 1 ? item.cantidad=1 : item.cantidad -=1
            }
            setCarrito([...carrito])
        })
    }

    const suma=id=>{
        carrito.forEach((item)=>{
            if(item.id===id){
                item.cantidad +=1
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto=id =>{
        if(window.confirm("Are you sure you want to remove")){
            
            carrito.forEach((item,index)=>{
                if(item.id===id){
                    item.cantidad=1
                    carrito.splice(index,1)
                }
                
            })
            setCarrito([...carrito])
        }
        
    }
    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito</h2>

                {
                    carrito.length === 0 ? <h2 style={{textAlign: 'center'}}>Carrito Vacio</h2>:
                    <>
                    {
                    carrito.map((item) => (
                        <div className="carrito__center">
                            <div className="carrito__item" key={item.id}>
                                <img src={item.image.default} alt=""></img>
                                <div >
                                    <h3>{item.title}</h3>
                                    <p className="price">{item.price}</p>
                                </div>
                                <div>
                                    <box-icon name="up-arrow" type="solid" onclick={() =>suma(item.id)}></box-icon>
                                    <p className="cantidad">{item.cantidad}</p>
                                    <box-icon name="down-arrow" type="solid" onclick={() =>resta(item.id)}></box-icon>
                                </div>
                                <div className="remove__item" onClick={()=> removeProducto(item.id)}>
                                    <box-icon name="trash"></box-icon>
                                </div>
                            </div>

                        </div>
                    ))
                }
                    </>
                }
                <div className="carrito__footer">
                    <h3>Total: ${total}</h3>
                    <button type="button" className=""></button>
                </div>

            </div>
        </div>
        
    )
}


export default Carrito
