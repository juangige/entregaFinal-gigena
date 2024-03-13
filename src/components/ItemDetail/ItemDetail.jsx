import React from "react";
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'

export default function ItemDetail({id, nombre, descripcion, precio, stock, imagenUrl}) {
    return (
        <div className="cardContainer">
            <article className="cardProduct">
                <header>
                    <h4>{nombre}</h4>
                </header>
                <div className="imageContainer">
                    <img src={imagenUrl} alt="" />
                </div>
                <div className="infoContainer">
                    <p className="price">
                        Precio: ${precio}
                    </p>
                    <p className="stock">
                        Stock Disponible: {stock}
                    </p>
                    <p className="description">
                        Descripcion: {descripcion}
                    </p>
                </div>
                <ItemCount initial={0} stock={10} onAdd={(cantidad) => console.log('Cantidad agregada:', cantidad)} />
            </article>
        </div>
    )
}