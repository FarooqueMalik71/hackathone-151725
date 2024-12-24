import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoPlayOutline } from "react-icons/io5";
import MeetOurTeam from "./MeetOurTeam";

const Page = () => {
    return (
        <section className="bg-white">
            <Header />
            <div className=" mx-4 sm:mx-8 md:mx-16 lg:mx-[150px]">

                {/* Section 1: Hero Section */}
                <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center">
                    {/* Text Section */}
                    <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
                        <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">About Company</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                        <p className="text-gray-600 mb-6">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-blue-600 transition">
                            Get Quote Now
                        </button>
                    </div>

                    {/* Image Section */}
                    <div
                        className="w-full lg:w-1/2 h-[450px] md:h-[450px] bg-cover bg-center mt-8 lg:mt-0"
                        style={{ backgroundImage: "url('/images/technology-1.png')" }}
                    ></div>
                </div>


                {/* Section 2: Problem Solving Section */}
                <div className="py-8 md:py-12">
                    <div className="container mx-auto px-4 gap-0 flex flex-col md:flex-row items-center justify-center">
                        <div className="md:w-1/2 mb-6  md:mb-0">
                            <h4 className="text-red-500 font-bold mb-2">Problems Trying</h4>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            </h3>
                        </div>
                        <div className="md:w-1/2 text-gray-600">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                        </div>
                    </div>
                </div>

                {/* Section 3: Stats Section */}
                <div className="py-12 md:py-28">
                    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">15K</h3>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">150K</h3>
                            <p className="text-gray-600">Monthly Visitors</p>
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">15</h3>
                            <p className="text-gray-600">Countries Worldwide</p>
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">100+</h3>
                            <p className="text-gray-600">Top Partners</p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Video Section */}
                <div className="pic w-full h-auto bg-cover bg-center relative px-4 py-8 md:px-16 md:py-16 flex items-center justify-center">
                    <div
                        className="relative flex items-center justify-center bg-cover rounded-[20px] w-full max-w-[989px] h-[340px] md:h-[540px]"
                        style={{ backgroundImage: "url('/images/bg-cover.png')" }}
                    >
                        <div className="absolute inset-0"></div>
                        <div>
                            <button className="w-12 md:w-16 h-12 md:h-16 bg-[#23A6F0] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition">
                                <IoPlayOutline />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section 5: Meet Our Team Section */}
                <div className="meetSce w-full py-8 md:py-12 px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                    <p className="text-[#737373] mb-6">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                    </p>
                </div>
                <MeetOurTeam />



            </div>

            <Footer />
        </section>


    );
};

export default Page;
