import React from 'react'
import Item from '../Item/Item.jsx'
import './ItemList.css'

export default function ItemList({productos}) {
  return (
    <>
    <div className='display-cont'>
      {productos.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
    </>
  )
}



