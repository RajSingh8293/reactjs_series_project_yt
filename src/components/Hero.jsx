import { Link } from "react-router-dom";

import {
    FaArrowRight,
    FaStar
} from "react-icons/fa";

const Hero = () => {

    return (

        <section className="bg-linear-to-br from-blue-50 via-white to-indigo-100 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* ================= LEFT CONTENT ================= */}

                    <div>

                        {/* BADGE */}

                        <div className="inline-flex items-center gap-2 bg-blue-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">

                            <FaStar className="text-yellow-400" />

                            Best Online Shopping Experience

                        </div>



                        {/* HEADING */}

                        <h1 className="text-lime-200xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mt-6">

                            Discover Modern
                            <span className="text-green-600 mx-2">
                                Fashion
                            </span>

                            & Lifestyle
                            Products

                        </h1>



                        {/* BUTTONS */}

                        <div className="flex flex-wrap gap-4 mt-8">

                            <Link
                                to="/products"
                                className="bg-black hover:bg-gray-700 text-white px-5 py-2 rounded-md font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition duration-300"
                            >

                                Shop Now

                                <FaArrowRight />

                            </Link>



                            <button
                                className="border-2 border-gray-300 hover:border-black hover:text-black px-5 py-2 rounded-md font-semibold transition duration-300"
                            >
                                Explore More
                            </button>

                        </div>





                    </div>



                    {/* ================= RIGHT IMAGE ================= */}

                    <div className="relative flex justify-center">

                        {/* BACKGROUND CIRCLES */}

                        <div className="absolute w-md h-112 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

                        <div className="absolute bottom-0 w-87 h-87 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>



                        {/* MAIN IMAGE CARD */}

                        <div className="relative z-10 bg-white/70 backdrop-blur-lg rounded-[40px] shadow-2xl p-8">

                            <img
                                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop"
                                alt="fashion"
                                className="w-full max-w-md h-80 object-cover rounded-3xl"
                            />



                            {/* FLOATING CARD */}

                            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-5">

                                <p className="text-gray-500 text-sm">
                                    Special Offer
                                </p>

                                <h3 className="text-2xl font-bold text-green-600">
                                    Up To 50% OFF
                                </h3>

                            </div>



                            {/* FLOATING REVIEW */}

                            <div className="absolute top-6 -right-6 bg-white shadow-xl rounded-2xl px-5 py-4">

                                <div className="flex text-yellow-400 gap-1">

                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />

                                </div>

                                <p className="text-sm text-gray-600 mt-1">
                                    15k+ Happy Customers
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
};

export default Hero;