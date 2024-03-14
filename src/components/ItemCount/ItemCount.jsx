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
    <div className='item-count-container'>
            <div className='quantity-container'>
                <button className='quantity-button' onClick={decrement}>
                    -
                </button>
                <h3 className='quantity-display'>{cantidad}</h3>
                <button className='quantity-button' onClick={increment}>
                    +
                </button>
            </div>
            <button
                className='add-to-cart-button'
                onClick={() => onAdd(cantidad)}
                disabled={!stock}
            >
                Agregar al carrito
            </button>
        </div>
  )
}
