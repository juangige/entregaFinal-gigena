import React, { createContext, useState } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // calcular la cantidad total de productos en el carrito
    const totalQuantity = carrito.reduce((acc, item) => acc + item.quantity, 0);

    // vaciar carrito al finalizar compra
    const clearCart = () => {
        setCarrito([]);
    };

    const addToCart = (item, quantity) => {
        const existingItemIndex = carrito.findIndex(cartItem => cartItem.id === item.id);
        
    
        if (existingItemIndex !== -1) {
            const updatedCart = [...carrito];
            updatedCart[existingItemIndex].quantity += quantity;
            setCarrito(updatedCart);
        } else {
            setCarrito([...carrito, { ...item, quantity }]);
        }
    };
    
    const removeFromCart = (itemId) => {
        // logica para eliminar un elemento del carrito
        const updatedCart = carrito.filter(item => item.id !== itemId);
        setCarrito(updatedCart);
      };

   

    return (
        <CartContext.Provider value={{ carrito, addToCart, totalQuantity, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
