import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const { prodId } = useParams();
    const [producto, setProducto] = useState()

    useEffect(() => {
        setProducto(getProductsById(prodId));
      }, [prodId]);
    

    return (
        <>
        <div>
        <ItemDetail {...producto} />
        </div>
        </>
    )
}