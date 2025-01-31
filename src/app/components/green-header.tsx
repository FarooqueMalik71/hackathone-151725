// import Image from "next/image"
import Link from "next/link";
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiTwitter, FiYoutube } from "react-icons/fi";

export default function GreenHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#23856D]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <FiPhone />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <FiMail />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-3 text-white">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FiYoutube />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
}