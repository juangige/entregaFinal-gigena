import React, { useEffect, useState } from "react";
import { getProductsByCate } from "../../asyncMock";
import { useParams, Link } from "react-router-dom";
import './hardware.css';

export default function Hardware() {
    const [productos, setProductos] = useState([]);
    const { cateName } = useParams();

    useEffect(() => {
        getProductsByCate(cateName) // Llama a la función getProductsByCate con la categoría obtenida de los parámetros de la URL
            .then((productos) => setProductos(productos))
            .catch(error => console.error(error));
    }, [cateName]);

    return (
        <>
            <div>
                <h1>Categoria: {cateName}</h1>
            </div>

            <div className="contCards">
                {productos.map(producto => (
                    <article key={producto.id} className='cardProduct'>
                        <header>
                            <h4>{producto.nombre}</h4>
                        </header>

                        <div className='imageContainer'>
                            <img src={producto.imagenUrl} alt='' />
                        </div>

                        <div className='infoContainer'>
                            <p className='price'>Precio: ${producto.precio}</p>
                            <p className='stock'>Stock Disponible: {producto.stock}</p>
                        </div>

                        <button className='detailButton'>
                            <Link to={`/product/${producto.id}`}>
                                Ver Detalle
                            </Link>
                        </button>
                    </article>
                ))}
            </div>
        </>
    );
}
