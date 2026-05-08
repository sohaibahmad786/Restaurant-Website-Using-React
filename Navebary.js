import React, { useState } from 'react'
import './Resturent.css'
import { Link } from 'react-router-dom'

const Navebary = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className='navebaar'>

      <div>
        <h1>MARWAT RESTURENT</h1>
      </div>

      <div
        className='menu-icon'
        onClick={() => setMenuOpen(!menuOpen)}
      >☰</div>

      <div className={`btns ${menuOpen ? 'active' : ''}`}>

        <button onClick={closeMenu}>
          <Link
            to={'/'}
            style={{ textDecoration: "none", color: "black" }}
          >
            HOME
          </Link>
        </button>

        <button onClick={closeMenu}>
          <Link
            to={'/story'}
            style={{ textDecoration: "none", color: "black" }}
          >
            Our Story
          </Link>
        </button>

        <button onClick={closeMenu}>
          <Link
            to={'/book_table'}
            style={{ textDecoration: "none", color: "black" }}
          >
            Book Table
          </Link>
        </button>

        <button onClick={closeMenu}>
          <Link
            to={'/chef'}
            style={{ textDecoration: "none", color: "black" }}
          >
            Our Chef
          </Link>
        </button>

        <button onClick={closeMenu}>
          <Link
            to={'/gallery'}
            style={{ textDecoration: "none", color: "black" }}
          >
            GALLERY
          </Link>
        </button>

      </div>

    </div>
  )
}

export default Navebary
