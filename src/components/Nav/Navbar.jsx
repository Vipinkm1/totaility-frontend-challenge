import React from 'react'
import { BsCartPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Navbar = () => {
  //  show the count value on the count
 const {getTotalItem} = useCart()
  return (
    //  show the navbar section 
    <div className='navbar'>
        <div className='nav-item'>
        <Link to='/' className='nav-logo'>
            <p className='logo-name'>Property</p>
        </Link>
        <Link to ='/cartpage' className='nav-logo'>
          <BsCartPlus className='cart'/><span className='item-count'>{getTotalItem()}</span>
        </Link>
        </div>
    </div>
  )
}
export default Navbar