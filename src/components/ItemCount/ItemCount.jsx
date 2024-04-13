import React, { useContext, useState } from 'react';
import './ItemCount.css';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

export default function ItemCount({ stock, initial, id, nombre, precio, imagenUrl }) {
    const { addToCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(initial);
    const [mostrarTerminarCompra, setMostrarTerminarCompra] = useState(false);

    const increment = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const decrement = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    const handleAddToCart = () => {
        addToCart({ id, nombre, precio, imagenUrl }, cantidad);
        setMostrarTerminarCompra(true);
    };
    
    

    return (
        <div className='item-count-container'>
            <div className='quantity-container'>
                <button className='quantity-button' onClick={decrement}>
                    -
                </button>
                <h3 className='quantity-display'>{cantidad}</h3>
                <button className='quantity-button' onClick={increment}>
                    +
                </button>
            </div>
            <button
                className='add-to-cart-button'
                onClick={handleAddToCart}
                disabled={!stock}
            >
                Agregar al carrito
            </button>
            {mostrarTerminarCompra && (
               <Link to={'../../pages/cart'}>
               <button className='add-to-cart-button'>
                    Terminar Compra
                </button>
               </Link>
            )}
        </div>
    );
}

