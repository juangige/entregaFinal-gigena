import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // Calcular la cantidad total de productos en el carrito
    const totalQuantity = carrito.reduce((acc, item) => acc + item.quantity, 0);

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
    

    return (
        <CartContext.Provider value={{ carrito, addToCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
