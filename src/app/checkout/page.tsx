"use client";
// import { nanoid } from "nanoid"; // Import nanoid for generating unique keys
import React, { useState } from "react";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import { getCartItems } from "../actions/action";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

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
      acc[key as keyof typeof formErrors] = formValues[key as keyof typeof formValues] === "";
      return acc;
    }, { ...formErrors });

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  function calculateTotal() {
    const cartItems = getCartItems();
    console.log("Retrieved Cart Items:", cartItems);

    if (!cartItems || cartItems.length === 0) {
      console.error("🚨 Cart is empty or not loading correctly!");
      return 0;
    }

    return cartItems.reduce((total, item) => {
      const itemQuantity = item.quantity || 1;
      if (!item.price) {
        console.error("🚨 Missing price for item:", item);
        return total;
      }
      return total + item.price * itemQuantity;
    }, 0);
  }

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      console.error("🚨 Form validation failed!");
      alert("Please fill out all fields correctly.");
      return;
    }

    const total = calculateTotal();
    console.log("✅ Final Calculated Total Price:", total);

    const cartItems = getCartItems();
    if (!cartItems || cartItems.length === 0) {
      alert("🚨 Your cart is empty! Add items before placing an order.");
      return;
    }

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: Number(formValues.phone),
      address: formValues.address,
      city: formValues.city,
      zipCode: formValues.zipCode,
      cartItems: cartItems.map(item => ({
      _type: "reference",
      _ref: item._id,
      _key: item._id, // Adding the missing key
      })),
      totalPrice: total,
      discount: 0,
      orderDate: new Date().toISOString(),
    };


    console.log("🚀 Sending Order Data:", orderData);
    try {
      await client.create(orderData);
      localStorage.removeItem("cart");
      localStorage.removeItem("appliedDiscount");
      Swal.fire("Order Placed", "Thank you for your purchase.", "success");
      router.push("/order-success");
    } catch (err) {
      console.error("🚨 Failed to create order:", err);
      alert("Failed to place order. Please try again.");
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
                      className={`border p-2 rounded-lg w-full ${formErrors[key as keyof typeof formErrors] ? "border-red-500" : "border-gray-300"}`}
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
