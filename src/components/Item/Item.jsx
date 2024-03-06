import React from 'react'
import './Item.css'

export default function Item({id, nombre, imagenUrl, stock, precio }) {
  return (
<section className='cardContainer'>
        <article className="cardProduct">
            <header>
                <h4>{nombre}</h4>
            </header>
            <div>
                <img src={imagenUrl} alt="" />
            </div>
            <div>
                <p>
                    Precio: ${precio}
                </p>
            </div>
            <div>
                <p>
                    Stock Disponible: {stock}
                </p>
            </div>
        </article>
</section>
  )
}


