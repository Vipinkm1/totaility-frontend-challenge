import React from 'react'
import { BsCartPlus } from "react-icons/bs";
const Navbar = () => {

  return (
    //  show the navbar section 
    <div className='navbar'>
        <div className='nav-item'>
        <div className='nav-logo'>
            <p className='logo-name'>Property</p>
        </div>
        <div className='filter'>
          <div className='filter-price'>
           <select className='select-box' >
           <option value="" selected disabled>Select a price</option>
          <option value='$1000-$2000'>$1000-$2000</option>
          <option value='$2500-$5000'>$2500-$5000</option>
          <option value='$5000-$6000'>$5000-$6000</option>
          <option value='$6500-$100000'>$6500-$100000</option>
           </select>
          </div>
          <div className='filter-price'>
           <select className='select-box'>
          <option value='' selected disabled>Select a location</option>
          <option value='delhi' >Delhi</option>
          <option value='gurgon'>Gurgon</option>
          <option value='banglor'>Banglor</option>
          <option value='haryana'>Haryana</option>
          <option value='kolkata'>Kolkata</option>
          <option value='mumbai'>Mumbai</option>
          <option value='karnatka'>Karnatka</option>
          <option value='punjab'>Punjab</option>
          <option value='agra'>Agra</option>
          <option value='kanpur'>Kanpur</option>
          <option value='jammu'>Jammu</option>
           </select>
          </div>
        </div>
        <div className='nav-logo'>
          <BsCartPlus/>
        </div>
        </div>
    </div>
  )
}

export default Navbar