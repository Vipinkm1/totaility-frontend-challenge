import React, { useState } from 'react'
import Navbar from '../Nav/Navbar'

import { useCart } from '../CartContext';

const CartPage = () => {
const {cartItems, removeFromCart}= useCart()
const [quantities, setQuantities] = useState(
  cartItems.map(()=> 1)
)
const handleIncrement = (index) => {
  const newQuantities = [...quantities];
  newQuantities[index] += 1;
  setQuantities(newQuantities)
}

const handleDecrement = (index) => {
  const newQuantities = [...quantities];
  if (newQuantities[index] > 1) {
    newQuantities[index] -= 1;
    setQuantities(newQuantities);
  }
};

const handleRemove = (index) => {
  removeFromCart(index);
};
const calculateFinalTotal = () => {
  const total = parseFloat(calculateTotalPrice());
  const discount = parseFloat(calculateDiscount());
  return (total - discount).toFixed(2);
};
  return (
    <>
      <Navbar />
      <div className='cart-page-border'>
        <h1 className='center'>Your Cart Page</h1>
        <div className='cart-container'>
        {cartItems.map((item, index)=>(
          <div className='container-1' key = {index}>
            <div className='description'>
              <div className=''>
                <img className='img-width-size' src={item.propertyImage} />
              </div>
              <div className=''>
                <p>Product title: {item.productTitle}</p>
                <p>Product title: {item.productDescription}</p>
                <div className='flex-des'>
                  <p>Price: ${item.productPrice}</p>
                  <p>Location: {item.location}</p>
                  <p>Bedrooms: {item.Bedrooms}</p>
                  <p>Created Date: 54464</p>
                </div>
                <div className='button-flex'>
                <div className='button'>
                  <button className='inc'onClick={() => handleIncrement(index)}>+</button>
                  <span>{quantities[index]}</span>
                  <button className='inc'onClick={() => handleDecrement(index)}>-</button>
                  </div>
                 <div className='remove'>
                  <button className='remove-button' onClick={() => handleRemove(index)}>Remove</button>
                 </div>
                </div>
              </div>
           
            </div>
          
          </div>
        ))}
          <div className='container-width'>
            <div className=' cost-container'>
              <p>Total Cost</p>
              <p>${calculateFinalTotal}</p>
            </div>
            <div className='checkout-container'></div>
            <button className='check-btn'>Checkout</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default CartPage