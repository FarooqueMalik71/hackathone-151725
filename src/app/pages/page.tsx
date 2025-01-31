import GreenHeader from "../components/green-header";
import Header from "../components/Header";


export default function Pages() {
    return (
        <div className="relative"> 
            <div className="w-full font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#737373]">
                <GreenHeader />
                <Header />  
                <div className="py-6 bg-[#FAFAFA] relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6">
                        <div className="flex items-center gap-3">



                            <div className="font-Montserrat font-bold text-sm sm:text-base text-[#252B42]">
                                Home
                            </div>
                            <img src="./images/vectorErow.png" alt="arrow" className="w-4 h-4" />
                            <h6 className="font-Montserrat font-bold text-sm sm:text-base text-[#BDBDBD]">
                                Pages
                            </h6>
                        </div>
                    </div>
                </div>


                {/* Product Section */}
                <div className="container relative mx-auto px-4 py-12 flex flex-col sm:flex-row gap-8 font-Montserrat">
                    {/* Left Section - Image Slider */}
                    <div className="flex-1">
                        <div className="relative">
                            <img
                                src="./images/singlepro1.jpg"
                                alt="Product Image"
                                className="rounded-lg md:w-full w-full object-cover"
                            />
                            {/* Arrows */}
                            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Thumbnails */}
                        <div className="flex mt-4 gap-3 sm:gap-4 overflow-x-auto">
                            <img
                                src="./images/singalThamb1.jpg"
                                alt="Thumbnail 1"
                                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500 w-20 h-20 sm:w-24 sm:h-24"
                            />
                            <img
                                src="./images/singalThamb2.jpg"
                                alt="Thumbnail 2"
                                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500 w-20 h-20 sm:w-24 sm:h-24"
                            />
                        </div>
                    </div>

                    {/* Right Section - Product Details */}
                    <div className="flex-1">
                        {/* Product Title and Rating */}
                        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                            Floating Phone
                        </h1>
                        <div className="flex items-center mt-2">
                            <span className="flex items-center text-yellow-400">
                                {[...Array(4)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                    >
                                        <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                                    </svg>
                                ))}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 text-gray-300"
                                >
                                    <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                                </svg>
                            </span>
                            <p className="ml-2 text-sm sm:text-base text-gray-500">(10 Reviews)</p>
                        </div>

                        {/* Price and Availability */}
                        <p className="text-xl sm:text-2xl font-Montserrat font-semibold text-black mt-4">
                            $1,139.33
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 mt-2">
                            Availability:{" "}
                            <span className="text-[#23A6F0] font-medium">In Stock</span>
                        </p>

                        {/* Description */}
                        <p className="text-gray-700 mt-4">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
                            consequent sent nostrum met.
                        </p>

                        {/* Color Options */}
                        <div className="mt-6">
                            <h3 className="text-sm sm:text-base font-semibold text-gray-700">Color:</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
                                <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
                                <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
                                <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex items-center gap-4 flex-col sm:flex-row">
                            <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600 w-full sm:w-auto">
                                Select Options
                            </button>
                            <div className="flex items-center gap-4 mt-4 sm:mt-0">
                                <img
                                    src="./images/heart.png"
                                    alt="heart"
                                    className="w-6 h-6 cursor-pointer"
                                />
                                <img src="./images/cart.png" alt="cart" className="w-6 h-6 cursor-pointer" />
                                <img src="./images/eye.png" alt="eye" className="w-6 h-6 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Cards */}
                <div className="flex justify-center items-center gap-10">
                    <span className="font-Montserrat font-semibold text-sm sm:text-base text-[#737373]">
                        Description
                    </span>
                    <span className="font-Montserrat font-semibold text-sm sm:text-base text-[#737373]">
                        Additional Information
                    </span>
                    <span className="font-Montserrat font-semibold text-sm sm:text-base text-[#737373]">
                        Reviews
                        
                    </span>
                    <span className="w-full absolute p-4 border border-[#ECECEC]"></span>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-8 md:py-12 items-center justify-center">
                    {/* Image Section */}
                    <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg overflow-hidden">
                        <img
                            src="./images/singalpro2.png"
                            alt="Product"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col lg:flex-row w-full lg:w-[65%] space-y-8 lg:space-y-0 gap-8">
                        {/* Text Block */}
                        <div className="w-full md:w-[332px] space-y-4 flex flex-col">
                            <h2 className="text-[20px] md:text-[24px] font-Montserrat font-bold text-gray-800">
                                The quick fox jumps over
                            </h2>
                            <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                                sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                                venial consequent sent nostrum met.
                            </p>
                        </div>

                        {/* List Section */}
                        <div className="space-y-6 flex flex-col gap-6">
                            {/* First List */}
                            <div>
                                <h3 className="text-[20px] md:text-[24px] font-semibold font-Montserrat text-gray-800 mb-[10px] md:mb-[20px]">
                                    the quick fox jumps over
                                </h3>
                                <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                                    <li className="flex items-center gap-2">
                                        <img src="./images/vectorErow.png" alt="Arrow" width={12} height={12} />
                                        The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="./images/vectorErow.png" alt="Arrow" width={12} height={12} />
                                        The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="./images/vectorErow.png" alt="Arrow" width={12} height={12} />
                                        The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="./images/vectorErow.png" alt="Arrow" width={12} height={12} />
                                        The quick fox jumps over the lazy dog
                                    </li>
                                </ul>
                            </div>

                            {/* Second List */}
                            <div>
                                <h3 className="text-[20px] md:text-[24px] font-semibold font-Montserrat text-gray-800 mb-[10px] md:mb-[20px]">
                                    the quick fox jumps over
                                </h3>
                                <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                                    <li className="flex items-center gap-2">
                                        <img src="./images/vectorErow.png" alt="Arrow" width={12} height={12} />
                                        The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="./images/vectorErow.png" alt="Arrow" width={12} height={12} />
                                        The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="./images/vectorErow.png" alt="Arrow" width={12} height={12} />
                                        The quick fox jumps over the lazy dog
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <img src="./images/vectorErow.png" alt="Arrow" width={12} height={12} />
                                        The quick fox jumps over the lazy dog
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div >
        </div>

    );
}
