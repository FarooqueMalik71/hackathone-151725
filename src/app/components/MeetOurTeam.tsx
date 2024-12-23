import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const MeetOurTeam = () => {
  return (
    <div className="aboutSec1 grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center py-12">
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
  <a href="#" className="text-blue-500 hover:text-blue-700">
    <FiFacebook size={20} />
    </a>
    <a href="#" className="text-blue-700 hover:text-blue-900">
      <FiInstagram size={20} />
    </a>
    <a href="#" className="text-blue-400 hover:text-blue-600">
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
  <a href="#" className="text-blue-500 hover:text-blue-700">
    <FiFacebook size={20} />
    </a>
    <a href="#" className="text-blue-700 hover:text-blue-900">
      <FiInstagram size={20} />
    </a>
    <a href="#" className="text-blue-400 hover:text-blue-600">
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

    <a href="#" className="text-blue-500 hover:text-blue-700">
    <FiFacebook size={20} />
    </a>
    <a href="#" className="text-blue-700 hover:text-blue-900">
      <FiInstagram size={20} />
    </a>
    <a href="#" className="text-blue-400 hover:text-blue-600">
      <FiTwitter size={20} />
    </a>
  </div>
</div>

    </div>
  );
};

export default MeetOurTeam;
