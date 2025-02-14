import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import Image from "next/image";
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'



const MeetOurTeam = () => {
  return (
    <div className="meet2n">



      <div className="aboutSec1 grid grid-cols-1 md:grid-cols-3 gap-[3.5rem] place-items-center py-20">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/team-1-user-1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>


        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/team-1-user-2.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>


        {/* Team Member 3 */}
        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
          <div
            className="mb-4 relative flex items-center justify-center bg-cover w-[200px] h-[200px] rounded-full"
            style={{
              backgroundImage: "url('/images/team-1-user-3.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <h2 className="text-lg font-semibold mb-2">Username</h2>
          <h3 className="text-sm text-gray-500 mb-4">Profession</h3>
          <div className="flex gap-4">

            <a href="#" className="text-blue-600 hover:text-blue-700">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="text-red-700 hover:text-blue-900">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-600">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>

      </div>


      <div className="meetsec2 flex bg-gray-100 flex-col w-full m-[0.25rem]  items-center justify-center  p-2 rounded-lg shadow-lg">

        <div>
          <h1 className="font-bold text-3xl text-center">
            Big Companies Are Here
          </h1>

          <div className="text-center text-sm text-gray-500 p-5">
            <p>Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
        </div>







        <div className="companies grid grid-rows-1 md:grid-cols-6 md:h-auto">
          <Image src={logo1} alt="logo-1" className="logoimg" ></Image>
          <Image src={logo2} alt="logo-2" className="logoimg" ></Image>
          <Image src={logo3} alt="logo-3" className="logoimg" ></Image>
          <Image src={logo4} alt="logo-4" className="logoimg" ></Image>
          <Image src={logo5} alt="logo-5" className="logoimg" ></Image>
          <Image src={logo6} alt="logo-6" className="logoimg" ></Image>
        </div>

      </div>




    </div>
  );
};

export default MeetOurTeam;
