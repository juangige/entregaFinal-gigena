import React from 'react'

export default function ItemListContainer({greeting}) {

    const greStyle = {
        marginTop: '50px',
        textAlign: 'center',
    }

  return (
    <>
     <h2 style={greStyle}>{greeting}</h2> 
    </>
  )
}
