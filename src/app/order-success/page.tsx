import React from 'react'
import Header from '../components/Header'

function order() {
  return (
    <div>
      <Header />
  <div className="min-h-screen bg-gray-50">
    <div className="flex flex-col justify-center items-center text-center py-20">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-500 mb-4">Order Success!</h1>
        <h3 className="text-xl text-gray-700">Thank you for your purchase.</h3>
        <p className="text-gray-500 mt-2">Your order has been placed successfully and is being processed.</p>
      </div>
    </div>
    </div>



    </div>
  )
}

export default order