import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './hardware.css';
import Item from "../../components/Item/Item";
import { db } from "../../components/Firebase/Firebase";
import { query, where, collection, getDocs } from "firebase/firestore";

export default function Hardware() {
    const [productos, setProductos] = useState([]);
    const { cateName } = useParams();

    useEffect(() => {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("category", "==", cateName));

        const fetchProductosByCate = async () => {
            try {
                const productosSnapshot = await getDocs(q);
                const productosData = productosSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(productosData);
            } catch (error) {
                console.error("Error al obtener productos por categoría:", error);
            }
        };

        fetchProductosByCate();

    }, [cateName]);
    return (
        <>
            <div>
                <h1 className="titleCategory">{cateName}</h1>
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
