import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'




import ShopDev1 from './shopDev1';
import ShopDev2 from './shopDev2';

// images
import Image from "next/image";
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'





function page() {
  return (
    <div className="homepage py-2 px-2">
      <Header />
      <ShopDev1 />
      <ShopDev2 />

      <div className="companies  grid grid-rows-1 place-content-center md:grid-cols-6 md:h-auto">
        <Image src={logo1} alt="logo-1" className="logoimg" ></Image>
        <Image src={logo2} alt="logo-2" className="logoimg" ></Image>
        <Image src={logo3} alt="logo-3" className="logoimg" ></Image>
        <Image src={logo4} alt="logo-4" className="logoimg" ></Image>
        <Image src={logo5} alt="logo-5" className="logoimg" ></Image>
        <Image src={logo6} alt="logo-6" className="logoimg" ></Image>
      </div>


      <Footer />
    </div>
  )
}

export default page