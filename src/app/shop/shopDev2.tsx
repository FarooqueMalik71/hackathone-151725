import React from 'react'

function shopDev2() {
    return (
        <div>
            <div className="flex flex-wrap gap-12 py-16 px-20 justify-center">
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="w-60 h-[45rem] flex flex-col items-center justify-between">
                        <div
                            className={`w-full h-full bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105 ${index % 12 === 0 ? 'bg-[url(/images/product1.jpg)]' :
                                index % 12 === 1 ? 'bg-[url(/images/product2.jpg)]' :
                                    index % 12 === 2 ? 'bg-[url(/images/product3.jpg)]' :
                                        index % 12 === 3 ? 'bg-[url(/images/product4.jpg)]' :
                                            index % 12 === 4 ? 'bg-[url(/images/product5.jpg)]' :
                                                index % 12 === 5 ? 'bg-[url(/images/product6.jpg)]' :
                                                    index % 12 === 6 ? 'bg-[url(/images/product7.jpg)]' :
                                                        index % 12 === 7 ? 'bg-[url(/images/product8.jpg)]' :
                                                            index % 12 === 8 ? 'bg-[url(/images/product9.jpg)]' :
                                                                index % 12 === 9 ? 'bg-[url(/images/product10.jpg)]' :
                                                                    index % 12 === 10 ? 'bg-[url(/images/product11.jpg)]' :
                                                                        'bg-[url(/images/product12.jpg)]'}`}
                        ></div>

                        <div className="flex flex-col items-center mt-4 ">
                            <h4 className="text-xl font-extrabold mb-2">Graphic Design</h4>
                            <h6 className="text-sm text-gray-500 mb-2">English Department</h6>
                            <p className="text-sm text-gray-500 mb-2">
                                $16.48 <span className="text-green-500">$6.48</span>
                            </p>

                            <div className="flex gap-2 mt-4 transition-transform transform hover:scale-105">
                                {['#23a6f0', '#23856d', '#e77c40', '#252b42'].map((color, idx) => (
                                    <span key={idx} className={`w-8 h-8 rounded-full`} style={{ backgroundColor: color }}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>



            <nav aria-label="Page navigation example">
               <div className="flex justify-center items-center">
               <ul className="inline-flex space-x-px text-sm">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-400 dark:hover:text-black">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-400 dark:hover:text-black">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-400 dark:hover:text-black">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-gray-700 border border-gray-300 bg-blue-200 hover:bg-blue-300 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-400 dark:hover:text-black">Next</a>
                    </li>

                </ul>
               </div>
            </nav>
        </div>
    )
}

            export default shopDev2
