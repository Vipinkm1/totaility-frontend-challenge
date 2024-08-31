import React from 'react'
import { BsCartPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Navbar = () => {
  const {cartCount} = useCart
 

  return (
    //  show the navbar section 
    <div className='navbar'>
        <div className='nav-item'>
        <div className='nav-logo'>
            <p className='logo-name'>Property</p>
        </div>
        <Link to ='/cartpage' className='nav-logo'>
          <BsCartPlus className='cart'/><span className='item-count'>{cartCount}</span>
        </Link>
        </div>
    </div>
  )
}

export default Navbar