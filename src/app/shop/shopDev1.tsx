import React from 'react';
import Image from 'next/image';
// Icons
import { IoIosArrowForward } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { FiList } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function ShopPage() {
    return (
        <div className="bg-white py-6 px-4">
            <section className="product-page container mx-auto">
                <div className="category mb-6">
                    <h4 className="text-2xl font-semibold">Shop</h4>
                    <span className="cat-list text-gray-600">
                        Home <IoIosArrowForward className="text-gray-400 inline" /> Shop{" "}
                    </span>
                </div>
                
                {/* Category Cards */}
                <div className="cate-cards text-center text-white  flex flex-wrap justify-center gap-6">
                    <div className="cat-card w-full h-[10rem] md:h-[10rem] lg:h-[60%] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-transform transform hover:scale-105"
                        style={{ backgroundImage: "url('./images/category1.jpg')", width: "200px", height: "200px", backgroundSize: "cover" }}
                    >
                        <h4 className="text-xl font-medium text-center">CLOTHS <br /> <span className="text-sm text-gray-500 text-center">5 Items</span></h4>
                    </div>
                    <div className="cat-card w-full h-[12rem] md:h-[20rem] lg:h-[60%] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-transform transform hover:scale-105"
                        style={{ backgroundImage: "url('./images/category2.jpg')", width: "200px", height: "200px", backgroundSize: "cover" }}
                    >
                        <h4 className="text-xl font-medium text-center">CLOTHS <br /> <span className="text-sm text-gray-500 text-center">5 Items</span></h4>
                    </div>
                    <div className="cat-card w-full h-[12rem] md:h-[20rem] lg:h-[60%] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-transform transform hover:scale-105"
                        style={{ backgroundImage: "url('./images/category3.jpg')", width: "200px", height: "200px", backgroundSize: "cover" }}
                    >
                        <h4 className="text-xl font-medium text-center">CLOTHS <br /> <span className="text-sm text-gray-500 text-center">5 Items</span></h4>
                    </div>
                    <div className="cat-card w-full h-[12rem] md:h-[20rem] lg:h-[60%] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-transform transform hover:scale-105"
                        style={{ backgroundImage: "url('./images/category4.jpg')", width: "200px", height: "200px", backgroundSize: "cover" }}
                    >
                        <h4 className="text-xl font-medium text-center">CLOTHS <br /> <span className="text-sm text-gray-500 text-center">5 Items</span></h4>
                    </div>
                    <div className="cat-card w-full h-[12rem] md:h-[20rem] lg:h-[60%] bg-cover bg-center bg-no-repeat flex items-end justify-start p-6 transition-transform transform hover:scale-105"
                        style={{ backgroundImage: "url('./images/category5.jpg')", width: "200px", height: "200px", backgroundSize: "cover" }}
                    >
                        <h4 className="text-xl font-medium text-center">CLOTHS <br /> <span className="text-sm text-gray-500 text-center">5 Items</span></h4>
                    </div>
                </div>
                {/* Filters */}
                <div className="filters flex flex-col lg:flex-row justify-between items-center mt-8 gap-6">
                    <div className="ft-first text-sm text-gray-600">Showing all 12 results</div>

                    <div className="ft-middle flex items-center space-x-4">
                        Views:
                        <div className="ft-btn-1 bg-gray-200 p-2 rounded-full">
                            <PiSquaresFourFill />
                        </div>
                        <div className="ft-btn-2 bg-gray-200 p-2 rounded-full">
                            <FiList />
                        </div>
                    </div>

                    <div className="ft-third flex space-x-4">
                        <button className="ft-pop-btn bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                            <span>Popularity</span><IoIosArrowDown />
                        </button>
                        <button className="ft-blue-btn bg-blue-600 text-white px-4 py-2 rounded-lg">
                            Filter
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShopPage;
