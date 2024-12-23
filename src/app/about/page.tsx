import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoPlayOutline } from "react-icons/io5";
import MeetOurTeam from "../components/MeetOurTeam";

const Page = () => {
    return (
        <section className="bg-white mx-15">
            <Header />
            {/* Section 1: Hero Section */}
            <div className="container mx-auto px-4 py-16 md:w-[1050px] md:h-[545px]  flex flex-col lg:flex-row items-center">
                <div className="md:w-[650px] text-center lg:text-left">
                    <h3 className="text-blue-500 text-sm font-bold uppercase mb-2">About Company</h3>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-gray-600 mb-6">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                        Get Quote Now
                    </button>
                </div>
                <div className="w-full h-[25rem] md:w-[786px] md:h-[35rem] mt-10 lg:mt-0 relative  ">
                    <div className="immage"></div>
                </div>

            </div>

            {/* Section 2: Problem Solving Section */}
            <div className="bg-gray-100 py-12 mt-10">
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



            <div className="pic w-full h-[540px] bg-cover bg-center relative px-226 py-112 flex items-center justify-center ">

                <div
                    className="relative flex items-center justify-center bg-cover rounded-[20px] w-[989px] h-[540px]"
                    style={{ backgroundImage: "url('/images/bg-cover.png')" }}
                >
                    <div className="absolute inset-0"></div>
                    <div>
                        <button className="w-16 h-16 relative bg-[#23A6F0] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition">
                            <IoPlayOutline />
                        </button>
                    </div>
                </div>
            </div>





            <div className=" w-full h-[540px] relative px-226 py-112 flex items-center justify-center ">
                <div>

                    <div className="md:w-[650px] text-center">

                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                        <p className="text-[#737373] mb-6">
                            Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics
                        </p>


                    </div>
                </div>

            </div>

<MeetOurTeam/>



            <Footer />
        </section>

    );
};

export default Page;
