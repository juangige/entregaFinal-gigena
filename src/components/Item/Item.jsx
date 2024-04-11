import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'

export default function Item({id, nombre, imagenUrl, stock, precio }) {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/product/${id}`);
      };

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
                <div className='detailBtnConteiner'>
                    <button className='detailButton' onClick={() => handleClick(id)}>
                        Ver Detalle
                    </button>
                </div>
            </article>
        </div>
  )
}


