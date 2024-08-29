import React from 'react'
import Img1 from '../../assets/Image1.jpg'
import Img2 from '../../assets/Image2.jpg'
import Img3 from '../../assets/Image3.jpg'
import Img4 from '../../assets/Image4.jpg'
import Img5 from '../../assets/Image5.jpg'
import Img6 from '../../assets/Image6.jpg'
import Img7 from '../../assets/Image7.jpg'
import Img8 from '../../assets/Image8.jpg'
import Img9 from '../../assets/Image9.jpg'
import Img10 from '../../assets/Image10.jpg'
import Img11 from '../../assets/Image11.jpg'

const Pages = () => { 
const propertyList = [
    {id: 1, propertyImage: Img1, productTitle: 'Property-1', productDescription: 'Fully furnished, ready to move 4.0 BHK Independent House in Vasant Vihar', productPrice: '$12000' , location: 'Delhi'},
    {id: 1, propertyImage: Img2, productTitle: 'Property-2', productDescription: 'Well designed 5.0 BHK Independent House , 420 Sq. Yards Super Area ', productPrice: '$5558', location: 'Gurgon'},
    {id: 1, propertyImage: Img3, productTitle: 'Property-3', productDescription: 'This spacious Independent House is available for rent and is located at Hauz Khas', productPrice: '$4542', location: 'Banglor'},
    {id: 1, propertyImage: Img4, productTitle: 'Property-4', productDescription: 'This spacious 2.0 BHK House is available for rent and is located at Block N Extension,', productPrice: '$8948', location: 'Haryana'},
    {id: 1, propertyImage: Img5, productTitle: 'Property-5', productDescription: 'Spacious and Independent House is available for rent in Mahavir Enclave for rent at a resonable price,', productPrice: '$7654', location: 'Kolkata' },
    {id: 1, propertyImage: Img6, productTitle: 'Property-6', productDescription: '2.0 BHK Independent House in Uttam Nagar East, Delhi for rent house.', productPrice: '$245', location: 'Mumbai' },
    {id: 1, propertyImage: Img7, productTitle: 'Property-7', productDescription: 'Independent House is available for rent. This is 4.0 BHK with', productPrice: '$895', location: 'Karnatka' },
    {id: 1, propertyImage: Img8, productTitle: 'Property-8', productDescription: '1.0 BHK Independent House in Najafgarh, Delhi for rent at a resonable price.', productPrice: '$865' ,location: 'Punjab'},
    {id: 1, propertyImage: Img9, productTitle: 'Property-9', productDescription: '7.0 BHK Independent House in Block E, Greater Kailash I, Delhi for rent at a resonable price', productPrice: '$46454', location: 'Agra' },
    {id: 1, propertyImage: Img10, productTitle:'Property-10', productDescription: 'Fully furnished, ready to move 8.0 BHK Independent House in Block C', productPrice: '$7855', location: 'Kanpur' },
    {id: 1, propertyImage: Img11, productTitle: 'Property-11', productDescription: 'Fully furnished, ready to move 8.0 BHK Independent House in Block C', productPrice: '$795', location: 'Jammu' },
]
  return (
    <div className='pages'>
    {propertyList.map((propertyItem, id) => (
        <div key={id} className='product-container-flex'>
        <div className='img-container'>
         <img className='img-width' src={propertyItem.propertyImage}/>
         <p className='propertyDes'>{propertyItem.productDescription}</p>
         <div className='price-loc'>
         <p>Price: <span>{propertyItem.productPrice}</span></p>
         <p>Location: <span>{propertyItem.location}</span></p>
         </div>
        <div className='btn-flex'>
          <button className='btn'>Book Now</button>
        </div>
         </div>
         
    </div>
    ))}
    </div>
  )
}

export default Pages