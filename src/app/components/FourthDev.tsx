import React from 'react'


import personimg from "../images/shop-hero.png"



import Image from "next/image";
import SecPersonimg from "../images/asian-woman-man.png";
import { IoIosArrowForward } from "react-icons/io";

function FourthDev() {
  return (
    <div>
      <div className="fourth-section">
        <div className="fourth-text">
          <span>SUMMER 2020</span>
          <h1>Vita Classic Product</h1>
          <p>
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="fourth-btns">
            <button className="four-price-btn">$16.48</button>
            <button className="four-cart-btn">
              ADD TO CART<IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="fourth-image">
          <Image
            className="personimg"
            src={personimg}
            alt="person-image"
          ></Image>
        </div>
      </div>

      <div className="fifth-section">
        <div className="fifth-image">
          <Image
            className="secperson"
            src={SecPersonimg}
            alt="person-image"
          ></Image>
        </div>

        <div className="fifth-text">
          <span>SUMMER 2020</span>
          <h1>Part of the Neural Universe</h1>
          <p>
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="fifth-btns">
            <button className="fifth-price-btn">BUY NOW</button>
            <button className="fifth-cart-btn">READ MORE </button>
          </div>
        </div>
      </div>








    </div>
  )
}

export default FourthDev