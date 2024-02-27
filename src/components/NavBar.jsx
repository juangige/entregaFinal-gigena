import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        margin: '20px',
    }

    const titleStyle = {
        fontFamily: '"Kdam Thmor Pro", sans-serif',
        fontWeight: '500'
    }

    const contButtons = {
        display: 'flex',
        gap: '5rem',
    }

    const buttonStyle = {
        padding: '5px',
    }

  return (
    <>
    <nav style={navStyle}>

    <div>
      <h1 style={titleStyle}>JTech</h1>
    </div>
    <div style={contButtons}>
      <button style={buttonStyle}>Hardware</button>
      <button style={buttonStyle}>Perifericos</button>
      <button style={buttonStyle}>Monitores</button>
      <button style={buttonStyle}>Notebooks</button>
    </div>
    <CartWidget />
    

    </nav>
    </>
  )
}

export default NavBar
