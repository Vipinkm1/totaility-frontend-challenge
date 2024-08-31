import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'

import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
const {cartItems, removeFromCart}= useCart()
const [quantities, setQuantities] = useState(
  cartItems.map(()=> 1)
)

const navigate =  useNavigate()

//  total cost state
const [totalCost , setTotalCost] = useState(0)
useEffect(() => {
  const newTotalCost = cartItems.reduce((total, item, index) => {
    const price = parseFloat(item.productPrice.replace('$', '')) || 0;
    const quantity = quantities[index] || 0;
    return total + price * quantity;
  }, 0);
  setTotalCost(newTotalCost);
}, [cartItems, quantities]);


const productlength = (productDescription) => {
  return productDescription.length > 20 ? productDescription.slice(0, 20) + "..." : productDescription
}
const handleIncrement = (index) => {
  setQuantities((prevQuantities) => {
    const newQuantities = [...prevQuantities];
    newQuantities[index] = (newQuantities[index] || 1) + 1;
    return newQuantities;
  });
};

const handleDecrement = (index) => {
  setQuantities((prevQuantities) => {
    const newQuantities = [...prevQuantities];
    if ((newQuantities[index] || 1) > 1) {
      newQuantities[index] -= 1;
    }
    return newQuantities;
  });
};
const handleRemove = (index) => {
  removeFromCart(index);
};
//  redirect the page in the checkout process
const handleCheckoutProcess = () => {
  navigate('/checkout')
}
  return ( 
       <>
      <Navbar />
      <div className='cart-page-border'>
        <h1 className='center'>Your Cart Page</h1>
        <div className='cart-container'>
        <div className='container-1-wrapper'>
        {cartItems.map((item, index)=>(
          <div className='container-1' key = {index}>
            <div className='description'>
              <div className=''>
                <img className='img-width-size' src={item.propertyImage} />
              </div>
              <div className=''>
                <p>Product title: {item.productTitle}</p>
                <p>Product Description: {productlength(item.productDescription)}</p>
                <div className='flex-des'>
                  <p>Price: {item.productPrice}</p>
                  <p>Location: {item.location}</p>
                  <p>Bedrooms: {item.Bedrooms}</p>
                  <p> Date: 54464</p>
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
        </div>
          <div className='container-width'>
            <div className=' cost-container'>
              <p>Total Cost:</p>
              {/*  show here the total cost of the each item */}
              <p>${totalCost.toFixed(2)}</p>
            </div>
            <div className='checkout-container'></div>
            <button className='check-btn' onClick={handleCheckoutProcess}>Checkout</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default CartPage