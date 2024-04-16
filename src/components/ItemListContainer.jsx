import React, { useEffect, useState } from 'react'
import { getProducts, getProductsById } from '../asyncMock'
import ItemList from '../components/ItemList/ItemList.jsx'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../components/Firebase/Firebase.js' 

export default function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])   


    useEffect(() =>{

      const productosRef = collection(db, "productos");

      getDocs(productosRef)
      .then((resp) =>{
        

        setProductos(

          resp.docs.map((doc) =>{
            return { ...doc.data(), id: doc.id }
          })

        )
      })

    }, [])

    const styleGreeting = {
      display: 'flex',
      justifyContent: 'center',
      margin: 20,
      fontSize: 35,
    }

  return (
    <>
     <h2 style={styleGreeting}>{greeting}</h2> 
     <ItemList productos={productos} />
    </>
  )
}
