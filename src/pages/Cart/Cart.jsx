import React, { useContext } from 'react';
import { CartContext } from '../../components/Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { carrito, totalQuantity } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Carrito de compras</h2>
      <p className="cart-total">Total de artículos en el carrito: {totalQuantity}</p>
      <ul className="cart-list">
        {carrito.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-cont2">
              <span className="item-name">Nombre: {item.nombre}</span>
              <span className="item-quantity">Cantidad: {item.quantity}</span>
              <span className="item-price">Precio: {item.precio}</span>
              {/* Imprime la URL de la imagen para verificar */}
              {console.log('URL de la imagen:', item.imagenUrl)}
              <img src={item.imagenUrl} alt={`Imagen de ${item.nombre}`} className="item-image" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;


