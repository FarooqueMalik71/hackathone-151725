import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div>



<div className="home-hero ">
        <div className="hometext">
          <span>SUMMER 2020</span>
          <h1>NEW COLLECTION</h1>
          <p>
            We know how large objects will act, <br />
            but things on a small scale.
          </p>

          <Link href="/shop">
          <button >SHOP NOW</button>
    </Link>

          
        </div>
      </div>

      <div className="second-section">
        <span>EDITORS PICK</span>
        <p>Problems trying to resolve the conflict between </p>
        <div>
          <div className="product-grid">
            <div className="pro-col-1">
              <button>MEN</button>
            </div>


            <div className="pro-col-2">
              <button>WOMEN</button>
            </div>

            <div className="pro-col-3">
              <div className="pro-row-1">
                <button>ACCESSORIES</button>
              </div>
              <div className="pro-row-2">
                <button>KIDS</button>
              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  )
}

export default Hero