import React, { useState } from 'react'
import Navbar from '../Nav/Navbar'

const CheckOut = () => {
    //  form state action
    const [form, setform] = useState({
        fullname: '',
        email: '',
        contact: '',
        address: '',
        pincode: '',
        bankname: '',
        ifscCode: '',
        banknumber: ''
    })
    // target the value
    const handleChange = (e) => {
        const { name, value } = e.target;
        setform(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    //     handle form submit
    const handleSubmitForm = (e) => {
        e.preventDefault()
        setform(form)
        console.log('form is submit', form)
        alert('Form is submit')
        setform({
            fullname: '',
            email: '',
            contact: '',
            address: '',
            pincode: '',
            bankname: '',
            ifscCode: '',
            banknumber: ''
        })
    }
    return (
        <>
            <Navbar />
            <div className=' .cart-page-border'>
                <h2 className='booking-detail'> Booking Detail</h2>
                <div className='form-item-border'>
                    <div className='form-item'>
                        <form onSubmit={handleSubmitForm}>
                            <div className='form'>
                                <lable>Full Name: </lable>
                                <input type="text" name='fullname' value={form.fullname} onChange={handleChange} placeholder='Enter full name' />
                            </div>
                            <div className='form'>
                                <lable>Email: </lable>
                                <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter email' />
                            </div>
                            <div className='form'>
                                <lable>Contact: </lable>
                                <input type="text" name='contact' value={form.contact} onChange={handleChange} placeholder='Enter contact number' />
                            </div>
                            <div className='form'>
                                <lable>Address: </lable>
                                <input type="text" name='address' value={form.address} onChange={handleChange} placeholder='Enter address' />
                            </div>
                            <div className='form'>
                                <lable>Pin Code: </lable>
                                <input type="text" name='pincode' value={form.pincode} onChange={handleChange} placeholder='Enter pincode' />
                            </div>
                            <div className='form'>
                                <lable>Bank Name: </lable>
                                <input type="text" name='bankname' value={form.bankname} onChange={handleChange} placeholder='Enter bankname' />
                            </div>
                            <div className='form'>
                                <lable>IFSC Code: </lable>
                                <input type="text" name='ifscCode' value={form.ifscCode} onChange={handleChange} placeholder='Enter ifsc code' />
                            </div>
                            <div className='form'>
                                <lable>Bank Number: </lable>
                                <input type="text" name='banknumber' value={form.banknumber} onChange={handleChange} placeholder='Enter bank number' />
                            </div>
                            <button className='submit-now'>Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut