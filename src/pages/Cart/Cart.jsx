import React, { useContext } from 'react';
import { CartContext } from '../../components/Context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import btnEliminar from '../../assets/eliminar_btn.png';

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
              <span className="item-name">{item.nombre}</span>
              <span className="item-quantity">Cantidad: {item.quantity}</span>
              <span className="item-price">Precio: {item.precio}</span>
              <img src={item.imagenUrl} alt={`Imagen de ${item.nombre}`} className="item-image" />
              {/* boton eliminar producto del carrito */}
              <button className='btn-eliminar-cont' onClick={() => removeFromCart(item.id)}>
                <img className='btn-eliminar' src={btnEliminar} alt="Eliminar Item" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {carrito.length > 0 && (
        <Link to='/Checkout' className="finalizar-compra-btn">
        Finalizar Compra
      </Link>
      )}
    </div>
  );
};

export default Cart;

