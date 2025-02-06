"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    city: false,
    zipCode: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = Object.keys(formValues).reduce((acc, key) => {
      acc[key] = formValues[key as keyof typeof formValues] === "";
      return acc;
    }, {} as Record<string, boolean>);

    setFormErrors({
      firstName: errors.firstName || false,
      lastName: errors.lastName || false,
      email: errors.email || false,
      phone: errors.phone || false,
      address: errors.address || false,
      city: errors.city || false,
      zipCode: errors.zipCode || false
    });
    return !Object.values(errors).some((error) => error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("cart");
      localStorage.removeItem("appliedDiscount");
      router.push("/order-success");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-gray-100 py-4 shadow-md mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-2 py-4 items-center">
            <a href="/cart" className="text-blue-500 hover:text-blue-700 transition text-sm">
              Cart
            </a>
            <span className="text-gray-700 font-semibold">Checkout</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto p-4 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
          <div className="mt-6 border-2 p-4 rounded-lg shadow-sm">
            <h1 className="text-lg font-semibold text-center">Billing Information</h1>
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(formValues).map((key) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </label>
                    <input
                      type={key === "email" ? "email" : "text"}
                      id={key}
                      placeholder={key.replace(/([A-Z])/g, " $1").trim()}
                      className={`border p-2 rounded-lg w-full ${key in formErrors && formErrors[key as keyof typeof formErrors] ? "border-red-500" : "border-gray-300"}`}
                      value={formValues[key as keyof typeof formValues]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>
            </form>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;