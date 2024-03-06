import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(initial)

    const increment = () =>{
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const decrement = () =>{
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

  return (
    <>
    <section className='section-flex'>

      <section className='sectionCarts1'>
        <div className='cartCont'>
            <button className='buttonCart' onClick={decrement}>-</button>
            <h3 className='cantidadCart' > {cantidad} </h3>
            <button className='buttonCart' onClick={increment}>+</button>
        </div>
        <div className='div-btn'>
            <button className='agregarCarritoBtn' onClick={() => onAdd(cantidad)} disabled={!stock}>
            Agregar al carrito
            </button>
        </div>
      </section>

    </section>

    </>
  )
}
