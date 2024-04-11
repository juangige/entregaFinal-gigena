import React, { useContext } from 'react'
import Cart from '../../assets/nav-cart.png'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

export default function CartWidget() {

    const { totalQuantity } = useContext(CartContext)

    const imgCarrito = {
        width: '30px',
        marginRight: '20px',
        color: '#ffff',
    }

  return (
    <>
      <div>
        <Link to='../../pages/cart'>
        <img style={imgCarrito} src={Cart} alt="CartWidget" /> 
        </Link>
        <span>{ totalQuantity }</span>
      </div>

    </>
    
  )
}

