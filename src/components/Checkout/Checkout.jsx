import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import './Checkout.css'

const Checkout = () => {
    const { carrito, clearCart } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [pedidoId, setPedidoId] = useState("")


    const comprar = async (data) => {
        const totalPrecio = carrito.reduce((total, item) => total + (item.quantity * item.precio), 0);
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalPrecio.toFixed(2),
            date: new Date(),
        };
    
        // logica para enviar el pedido
        const pedidosRef = collection(db, "pedidos");
    
        try {
            const docRef = await addDoc(pedidosRef, pedido);
            setPedidoId(docRef.id);
            clearCart(); // vaciar carrito al finalizar compra
    
            // Actualizar el stock de cada producto comprado en la base de datos
            for (const producto of carrito) {
                const productoRef = doc(db, 'productos', producto.id);
                const productoSnapshot = await getDoc(productoRef);
    
                if (productoSnapshot.exists()) {
                    const nuevoStock = productoSnapshot.data().stock - producto.quantity;
                    await updateDoc(productoRef, { stock: nuevoStock });
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    if(pedidoId) {
        return (
            <div className="order-confirmation">
                <h1 className="order-title">¡Gracias por tu compra!</h1>
                <p className="order-info">Número de pedido: {pedidoId}</p>
            </div>
        );
        
    }

    return (
        <>
            <div className="form-container">
            <h1>Finalizar Pedido</h1>
            <form onSubmit={handleSubmit(comprar)}>
                <div>
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" id="nombre" {...register("nombre", { required: true })} className="form-input" />
                    {errors.nombre && <span className="form-error">Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" {...register("email", { required: true })} className="form-input" />
                    {errors.email && <span className="form-error">Este campo es requerido</span>}
                </div>
                <div>
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="tel" id="telefono" {...register("telefono", { required: true })} className="form-input" />
                    {errors.telefono && <span className="form-error">Este campo es requerido</span>}
                </div>
                <button type="submit" className="form-button">Comprar</button>
            </form>
        </div>
        </>
    );
};

export default Checkout;
