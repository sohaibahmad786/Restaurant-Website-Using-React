import React from 'react'
import './Resturent.css'
import { Link } from 'react-router-dom'

const Navebary = () => {
  return (
    <div className='navebaar'>
       <div>
        <h1>MARWAT RESTURENT</h1>
       </div>
       <div className='btns'>
        <button><Link to={'/'} style={{textDecoration:"none"}}>HOME</Link></button>
        {/* <button><Link to={'/about'} style={{textDecoration:"none", color:"black"}}>Our Story</Link></button> */}
        <button><Link to={'/story'} style={{textDecoration:"none"}}>Our Story</Link></button>
        <button><Link to={'/book_table'} style={{textDecoration:"none"}}>Book Table</Link></button>
        <button><Link to={'/chef'} style={{textDecoration:"none"}}>Our Chef</Link></button>
        <button><Link to={'gallery'} style={{textDecoration:"none"}}>GALLERY</Link></button>
       </div>
    </div>
  )
}

export default Navebary