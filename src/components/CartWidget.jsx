import React from 'react'
import Cart from '../assets/cart.png'

export default function CartWidget() {

    const imgCarrito = {
        width: '30px',
    }

  return (
    <>
      <div>
        <img style={imgCarrito} src={Cart} alt="CartWidget" />
        0
      </div>
    </>
  )
}

