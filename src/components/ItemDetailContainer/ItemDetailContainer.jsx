import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock.jsx";
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState()

    useEffect(() =>{
        getProductsById('7')
        .then(response => {
            setProducto(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <>
        <div>
        <ItemDetail {...producto} />
        </div>
        </>
    )
}