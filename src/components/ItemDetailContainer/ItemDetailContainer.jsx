import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/Firebase.js";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        
        const docRef = doc(db, "productos", id)

        getDoc(docRef)
        .then((resp) => {
            
            setProducto(
                { ...resp.data(), id: resp.id}
            )
        })
      }, [id]);
    

    return (
        <>
        <div>
        <ItemDetail {...producto} />
        </div>
        </>
    )
}