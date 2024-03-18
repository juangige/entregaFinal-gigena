import React, { useEffect, useState } from "react";
import { getProductsByCate } from "../../asyncMock";
import { useParams, Link } from "react-router-dom";
import './notebooks.css';

export default function Notebooks() {
    const [productos, setProductos] = useState([]);
    const { cateName } = useParams();

    useEffect(() => {
        getProductsByCate(cateName) // llamamos a la funcion getProductsByCate con la categoria obtenida de los parametros de la URL
            .then((productos) => setProductos(productos))
            .catch(error => console.error(error));
    }, [cateName]);

    return (
        <>
            <div>
                <h1>Categoria: {cateName}</h1>
            </div>

            <section className="contCards">

            {productos.map(producto => (
                <Item 
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                imagenUrl={producto.imagenUrl}
                stock={producto.stock}
                precio={producto.precio}
                />
                ))}

            </section>
        </>
    );
}