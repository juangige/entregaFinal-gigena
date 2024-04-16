import React, { useContext } from 'react';
import { CartContext } from '../../components/Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { carrito, totalQuantity, removeFromCart } = useContext(CartContext);

  // calcular el total del precio de todos los elementos en el carrito
  const totalPrecio = carrito.reduce((total, item) => total + (item.quantity * item.precio), 0);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Carrito de compras</h2>
      <p className="cart-total">Total de artículos en el carrito: {totalQuantity}</p>
      <p className="cart-total">Total Precio: {totalPrecio.toFixed(2)}</p>
      <ul className="cart-list">
        {carrito.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-cont2">
              <span className="item-name">Nombre: {item.nombre}</span>
              <span className="item-quantity">Cantidad: {item.quantity}</span>
              <span className="item-price">Precio: {item.precio}</span>
              <img src={item.imagenUrl} alt={`Imagen de ${item.nombre}`} className="item-image" />
              {/* Agregar un botón para eliminar el elemento del carrito */}
              <button  onClick={() => removeFromCart(item.id)}>
                <img className='btn-eliminar' src="../../assets/btn_eliminar.svg" alt="Eliminar Item" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

