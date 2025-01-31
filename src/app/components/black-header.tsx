import { FiFacebook, FiInstagram, FiMail, FiPhone , FiTwitter, FiYoutube } from "react-icons/fi";
import Link from "next/link";



export default function BlackHeader() {
    return (
        <div>
            <div>
            <div className="bg-[#252B42] py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm px-4">
          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FiPhone />
              <span>(225) 555-0118</span>   
            </div>
            <div className="flex items-center gap-2">
              <FiMail />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          {/* Promotion & Social Media */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us and get a chance to win 80% off</p>
            <div className="flex gap-3">
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
      </div>                    
            </div>
        </div>
    )
}