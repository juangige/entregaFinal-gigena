import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'
import './NavStyle.css'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
    <>
    
    <nav className='contNav sidenav' data-mdb-hidden='false'>

    <div>
      <Link to="/"><h1 className='titleStyle'>JTech</h1></Link>
    </div>
    
    <div className='contButtons '>
      <button className='ButtonStyle'>
        <Link to={'/pages/hardware'}>Hardware</Link>
        </button>
      <button className='ButtonStyle'>
      <Link to={'/pages/perifericos'}>Perifericos</Link>
        </button>
      <button className='ButtonStyle'>
      <Link to={'/pages/monitores'}>Monitores</Link>
        </button>
      <button className='ButtonStyle'>
      <Link to={'/pages/notebooks'}>Notebooks</Link>
        </button>
    </div>
    <CartWidget />
    

    </nav>
    </>
  )
}

export default NavBar
