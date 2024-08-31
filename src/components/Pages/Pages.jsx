import React, { useState } from 'react'
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
import { useCart } from '../CartContext'




const Pages = () => {
  const [seletedPrice, setSelectedPrice] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedBedrooms, setSelectedBedrooms] = useState('')
  const {addToCart} = useCart()

  //  map function propertyList
  const propertyList = [
    { id: 1, propertyImage: Img1, productTitle: 'Property-1', productDescription: 'Fully furnished, ready to move 4.0 BHK Independent House in Vasant Vihar', productPrice: '$12000', location: 'Delhi', Bedrooms: '4' },
    { id: 1, propertyImage: Img2, productTitle: 'Property-2', productDescription: 'Well designed 5.0 BHK Independent House , 420 Sq. Yards Super Area', productPrice: '$5558', location: 'Gurgon', Bedrooms: '3' },
    { id: 1, propertyImage: Img3, productTitle: 'Property-3', productDescription: 'This spacious Independent House is available for rent and is located at Hauz Khas', productPrice: '$4542', location: 'Banglor', Bedrooms: '2' },
    { id: 1, propertyImage: Img4, productTitle: 'Property-4', productDescription: 'This spacious 2.0 BHK House is available for rent and is located at Block N Extension,', productPrice: '$8948', location: 'Haryana', Bedrooms: '1' },
    { id: 1, propertyImage: Img5, productTitle: 'Property-5', productDescription: 'Spacious and Independent House is available for rent in Mahavir Enclave for rent at a resonable price,', productPrice: '$7654', location: 'Kolkata', Bedrooms: '6' },
    { id: 1, propertyImage: Img6, productTitle: 'Property-6', productDescription: '2.0 BHK Independent House in Uttam Nagar East, Delhi for rent house.', productPrice: '$245', location: 'Mumbai', Bedrooms: '7' },
    { id: 1, propertyImage: Img7, productTitle: 'Property-7', productDescription: 'Independent House is available for rent. This is 4.0 BHK with', productPrice: '$895', location: 'Karnatka', Bedrooms: '8' },
    { id: 1, propertyImage: Img8, productTitle: 'Property-8', productDescription: '1.0 BHK Independent House in Najafgarh, Delhi for rent at a resonable price.', productPrice: '$865', location: 'Punjab', Bedrooms: '9' },
    { id: 1, propertyImage: Img9, productTitle: 'Property-9', productDescription: '7.0 BHK Independent House in Block E, Greater Kailash I, Delhi for rent at a resonable price', productPrice: '$46454', location: 'Agra', Bedrooms: '10' },
    { id: 1, propertyImage: Img10, productTitle: 'Property-10', productDescription: 'Fully furnished, ready to move 8.0 BHK Independent House in Block C', productPrice: '$7855', location: 'Kanpur', Bedrooms: '5' },
    { id: 1, propertyImage: Img11, productTitle: 'Property-11', productDescription: 'Fully furnished, ready to move 8.0 BHK Independent House in Block C', productPrice: '$795', location: 'Jammu', Bedrooms: '11' },
  ]
  //  filter with price range
  const withinPriceRange = (price) => {
    const priceNumber = parseInt(price.replace('$', ''));
    if (seletedPrice === '$1000-$2000') return priceNumber >= 1000 && priceNumber <= 2000;
    if (seletedPrice === '$2500-$5000') return priceNumber >= 2500 && priceNumber <= 5000;
    if (seletedPrice === '$5000-$6000') return priceNumber >= 5000 && priceNumber <= 6000;
    if (seletedPrice === '$6500-$100000') return priceNumber >= 6500 && priceNumber <= 100000;
    return true;
  };
//  filter with the bedrooms
  const withinBedroomRange = (bedrooms) => {
    const bedroomNumber = parseInt(bedrooms);
    if(selectedBedrooms === '1-5') return bedroomNumber >= 1 && bedroomNumber <= 5;
    if(selectedBedrooms === '10-15') return bedroomNumber >= 10 && bedroomNumber <= 15;
    return true
  }
  //  all filter logic
  const filterProperties = propertyList.filter(property => {
    const matchesPrice = seletedPrice ? withinPriceRange(property.productPrice): true;
    const matchesLocation = selectedLocation ? property.location.toLowerCase() === selectedLocation.toLowerCase(): true;
    const matchesBedrooms = selectedBedrooms ? withinBedroomRange(property.Bedrooms) : true;
    return matchesPrice && matchesLocation && matchesBedrooms;
  })
  return (
    <>
      <div className='filter'>
        <div className='filter-price'>
          <select className='select-box' value={seletedPrice} onChange={(e) => setSelectedPrice(e.target.value)} >
            <option value="" selected disabled>Select a price</option>
            <option value='$1000-$2000'>$1000-$2000</option>
            <option value='$2500-$5000'>$2500-$5000</option>
            <option value='$5000-$6000'>$5000-$6000</option>
            <option value='$6500-$100000'>$6500-$100000</option>
          </select>
        </div>
        <div className='filter-price'>
          <select className='select-box' value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
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
        <div className='filter-price'>
          <select className='select-box' value={selectedBedrooms} onChange={(e) => setSelectedBedrooms(e.target.value)}>
            <option value='' selected disabled>Select a bedrooms</option>
            <option value='1-5' >1-5</option>
            <option value='10-15'>10-15</option>
          </select>
        </div>
      </div>
      {/* property list item show here */}
      <div className='pages'>
        {filterProperties.map((propertyItem, id) => (
          <div key={id} className='product-container-flex'>
            <div className='img-container'>
              <img className='img-width' src={propertyItem.propertyImage} />
              <p className='propertyDes'>{propertyItem.productDescription}</p>
              <div className='price-loc'>
                <p>Price: <span className=''>{propertyItem.productPrice}</span></p>
                <p>Location: <span>{propertyItem.location}</span></p>
              </div>
              <div className='bedrooms'>
                <p>Bedrooms: <span>{propertyItem.Bedrooms}</span></p>
              </div>
              <div className='btn-flex'>
                <button className='btn'  onClick={() => addToCart(propertyItem)} >Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Pages