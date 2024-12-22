import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
const Page = () => {
    return (
        <section className="bg-white mx-15">
            <Header />
            {/* Section 1: Hero Section */}
            <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">About Company</h3>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-gray-600 mb-6">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                        Get Quote Now
                    </button>
                </div>
                <div className="w-full h-[25rem] md:w-[786px] md:h-[50rem] mt-10 lg:mt-0 relative  ">
                    <div className="immage"></div>
                </div>

            </div>

            {/* Section 2: Problem Solving Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <h4 className="text-red-500 font-bold mb-2">Problems Trying</h4>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        </h3>
                    </div>
                    <div className="md:w-1/2 text-gray-600">
                        Problems trying to resolve the conflict between the two major realms of
                        Classical physics: Newtonian mechanics.
                    </div>
                </div>
            </div>

            {/* Section 3: Stats Section */}
            <div className="py-16">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold text-gray-800">15K</h3>
                        <p className="text-gray-600">Happy Customers</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-gray-800">150K</h3>
                        <p className="text-gray-600">Monthly Visitors</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-gray-800">15</h3>
                        <p className="text-gray-600">Countries Worldwide</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-gray-800">100+</h3>
                        <p className="text-gray-600">Top Partners</p>
                    </div>
                </div>
            </div>


            <Footer />
        </section>

    );
};

export default Page;
