import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'
import './NavStyle.css'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
    <>
    
    <nav className='contNav sidenav' data-mdb-hidden='false'>

    <div>
        <a href="../"><h1 className='titleStyle'>JTech</h1></a>
      
    </div>
    <div className='contButtons '>
      <button className='ButtonStyle'>
        <Link to={'/hardware'}>Hardware</Link>
        </button>
      <button className='ButtonStyle'>
      <Link to={'/perifericos'}>Perifericos</Link>
        </button>
      <button className='ButtonStyle'>
      <Link to={'/monitores'}>Monitores</Link>
        </button>
      <button className='ButtonStyle'>
      <Link to={'/notebooks'}>Notebooks</Link>
        </button>
    </div>
    <CartWidget />
    

    </nav>
    </>
  )
}

export default NavBar
