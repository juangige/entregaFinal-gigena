import React, { useState } from "react";
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { Link } from "react-router-dom";

export default function ItemDetail({ id, nombre, descripcion, precio, stock, imagenUrl }) {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const [mostrarTerminarCompra, setMostrarTerminarCompra] = useState(false);

    const handdleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad);
        if (cantidad > 0) {
            setMostrarTerminarCompra(true);
        }
    };

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
                <div className="containerBtn">
                    {mostrarTerminarCompra ? (
                        <Link to='/pages/cart' className="add-to-cart-button">Terminar Compra</Link>
                    ) : (
                        <ItemCount id={id} nombre={nombre} initial={1} stock={stock} precio={precio} onAdd={handdleOnAdd} />
                    )}
                </div>
            </article>
        </div>
    )
}


