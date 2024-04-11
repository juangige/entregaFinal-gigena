import React, { useEffect, useState } from 'react'
import { getProducts, getProductsById } from '../asyncMock'
import ItemList from '../components/ItemList/ItemList.jsx'

export default function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])   

    useEffect(() =>{
      getProducts()
      .then(response => {
        setProductos(response)
      })
      .catch(error => {
        console.error(error)
      })
    })

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
