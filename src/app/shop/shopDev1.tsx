import React from 'react'

// icons
import { IoIosArrowForward } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { FiList } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";


function shopDev1() {
    return (
        <div>
            <div className="product-page">
                <div className="category">
                    <h4>Shop</h4>

                    <span className="cat-list">
                        Home <IoIosArrowForward className="cate-gray" /> Shop{" "}
                    </span>
                </div>

                <div className="cate-cards">
                    <div className="cat-card1">
                        <h4>CLOTHS</h4>
                        <p>5 Items</p>
                    </div>
                    <div className="cat-card2">
                        <h4>CLOTHS</h4>
                        <p>5 Items</p>
                    </div>
                    <div className="cat-card3">
                        <h4>CLOTHS</h4>
                        <p>5 Items</p>
                    </div>
                    <div className="cat-card4">
                        <h4>CLOTHS</h4>
                        <p>5 Items</p>
                    </div>
                    <div className="cat-card5">
                        <h4>CLOTHS</h4>
                        <p>5 Items</p>
                    </div>
                </div>

                <div className="filters">
                    <div className="ft-first">Showing all 12 results
                    </div>

                    <div className="ft-middle">
                        Views:
                        <div className="ft-btn-1"><PiSquaresFourFill />
                        </div>
                        <div className="ft-btn-2"><FiList />
                        </div>
                    </div>

                    <div className="ft-third">
                        <button className="ft-pop-btn">Popularity <IoIosArrowDown />
                        </button>
                        <button className="ft-blue-btn">Filter</button>
                    </div>
                </div>








            </div>
        </div>
    )
}

export default shopDev1