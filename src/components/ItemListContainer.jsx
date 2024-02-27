import React from 'react'

export default function ItemListContainer({greeting}) {

    const greStyle = {
        textAlign: 'center',
    }

  return (
    <>
     <h2 style={greStyle}>{greeting}</h2> 
    </>
  )
}
