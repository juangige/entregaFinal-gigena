import React from 'react'
import './Item.css'

export default function Item({id, nombre, imagenUrl, stock, precio }) {
  return (
<div className='cardContainer'>
            <article className='cardProduct'>
                <header>
                    <h4>{nombre}</h4>
                </header>
                <div className='imageContainer'>
                    <img src={imagenUrl} alt='' />
                </div>
                <div className='infoContainer'>
                    <p className='price'>Precio: ${precio}</p>
                    <p className='stock'>Stock Disponible: {stock}</p>
                </div>
                <button className='detailButton'>Ver Detalle</button>
            </article>
        </div>
  )
}


