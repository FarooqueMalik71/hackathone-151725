"use client";
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Product } from 'types/productTypes'
import { getCartItems } from '../actions/action'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';


const Checkout = () => {

    const [cartItems, setCartItams] = useState<Product[]>([])
    const [discount, setDescount] = useState<number>(0)

    const [formValuse, setFormValues] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: ''
    })
    const [formErrors, setFormErrors] = useState({
        FirstName: false,
        LastName: false,
        email: false,
        phone: false,
        address: false,
        city: false,
        zipCode: false,
    })
    useEffect(() => {
        setCartItams(getCartItems())
        const appliedDiscount = localStorage.getItem('appliedDiscount')
        if (appliedDiscount) {
            setDescount(Number(appliedDiscount))
        }
    }, [])



    const subTotal = cartItems.reduce((total, item) => total + item.price * item.inventory, 0)


    const handaleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormValues({
            ...formValuse,
            [e.target.id]: e.target.value
        })

    }


    const validateForm = () => {
        const errors = {
            FirstName: false,
            LastName: false,
            email: false,
            phone: false,
            address: false,
            city: false,
            zipCode: false
        }

        if (formValuse.FirstName === '') {
            errors.FirstName = true
        }
        if (formValuse.LastName === '') {
            errors.LastName = true
        }
        if (formValuse.email === '') {
            errors.email = true
        }
        if (formValuse.phone === '') {
            errors.phone = true
        }
        if (formValuse.address === '') {
            errors.address = true
        }
        if (formValuse.city === '') {
            errors.city = true
        }
        if (formValuse.zipCode === '') {
            errors.zipCode = true
        }

        setFormErrors(errors)
        return !Object.values(errors).some((error) => !error)
    }



    const handaleplaceOrder = () => {



        if (validateForm()) {
           
            localStorage.removeItem('cart')
            localStorage.removeItem('appliedDiscount')
            setCartItams([])
        }
      
    }
 

    return (
        <div className='min-h-screen bg-gray-50'>
            <Header />
            <div className="bg-gray-100 py-4 shadow-md mb-4  ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex gap-2 py-4 items-center">
                        <a href="/cart" className="text-blue-500 hover:text-blue-700 transition text-sm">Cart</a>
                        <span className="text-gray-700 font-semibold">Checkout</span>
                    </nav>
                </div>
            </div>

            <div className="container  mx-auto p-4 flex justify-center items-center ">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className='border-2 p-4 mb-4' >  <h1 className='flex text-2xl  font-semibold justify-center '>Order Summary</h1>
                            </div>

                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <div key={item._id} className="flex justify-between items-center mb-4">
                                        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
                                            {item.productImage && (
                                                <Image src={urlFor(item.productImage).url()}
                                                    alt="product image" width={500} height={500} className="priority w-16 lg:w-24 h-16 lg:h-24 object-cover rounded" />
                                            )}
                                            <div className="ml-4">
                                                <h3 className="text-lg font-medium">{item.productName}</h3>
                                                <p className="text-gray-600">Quantity: {item.inventory}</p>
                                            </div>
                                        </div>
                                        <p className="text-lg font-semibold">${item.price * item.inventory}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-600">Your cart is empty</div>
                            )}

                            <div className="mt-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">Subtotal</h3>
                                    <p className="text-sm font-semibold">${subTotal.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">Discount</h3>
                                    <p className="text-sm font-semibold">${discount.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold">Total</h3>
                                    <p className="text-lg font-semibold">${(subTotal - discount).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 ">
                            <div className='border-2 ' >  <h1 className='flex text-lg font-semibold justify-center '>Billing Information</h1></div>
                            <form className="mt-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label> First Name :</label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        placeholder="First Name"
                                        className={`border p-2 rounded-lg  ${formErrors.FirstName ? 'border-red-500' : 'border-gray-300'}`}
                                        value={formValuse.FirstName}
                                        onChange={handaleInputChange}
                                    />
                                    <label> Last Name :</label>
                                    <input
                                        type="text"
                                        id="LastName"
                                        placeholder="Last Name"
                                        className={`border p-2 rounded-lg ${formErrors.LastName ? 'border-red-500' : 'border-gray-300'}`}
                                        value={formValuse.LastName}
                                        onChange={handaleInputChange}
                                    />

                                    <label>Email :</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className={`border p-2 rounded-lg ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        value={formValuse.email}
                                        onChange={handaleInputChange}
                                    />
                                    <label>Phone :</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Phone"
                                        className={`border p-2 rounded-lg ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                        value={formValuse.phone}
                                        onChange={handaleInputChange}
                                    />
                                    <label>Address :</label>
                                    <input
                                        type="text"
                                        id="address"
                                        placeholder="Address"
                                        className={`border p-2 rounded-lg ${formErrors.address ? 'border-red-500' : 'border-gray-300'}`}
                                        value={formValuse.address}
                                        onChange={handaleInputChange}
                                    />

                                    <label>City :</label>

                                    <input
                                        type="text"
                                        id="city"
                                        placeholder="City"
                                        className={`border p-2 rounded-lg ${formErrors.city ? 'border-red-500' : 'border-gray-300'}`}
                                        value={formValuse.city}
                                        onChange={handaleInputChange}
                                    />
                                    <label>Zip Code :</label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        placeholder="Zip Code"
                                        className={`border p-2 rounded-lg ${formErrors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                                        value={formValuse.zipCode}
                                        onChange={handaleInputChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={handaleplaceOrder}
                                className="bg-blue-500  text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};


export default Checkout