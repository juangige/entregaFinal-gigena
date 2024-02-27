import React from 'react'
import Cart from '../assets/nav-cart.png'

export default function CartWidget() {

    const imgCarrito = {
        width: '30px',
        marginRight: '20px',
        color: '#ffff',
    }

  return (
    <>
      <div>
        <img style={imgCarrito} src={Cart} alt="CartWidget" />
        <span>0</span>
      </div>
    </>
  )
}

