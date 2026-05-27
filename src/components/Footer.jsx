// import Button from "./Button"


// const Footer = () => {
//     const subscribe = () => {
//         alert(`I have already Subscribeed`)
//     }
//     return (
//         <div>
//             {/* <Button /> */}
//             <h1>Footer</h1>
//             <Button name="Subscribe" handleClick={subscribe} />
//         </div>
//     )
// }

// export default Footer


import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <footer className="bg-gray-950 text-gray-300 mt-20">

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* LOGO + DESCRIPTION */}

                    <div>

                        <h1 className="text-3xl font-extrabold text-white mb-5">
                            LearnCode
                        </h1>

                        <p className="text-gray-400 leading-5">
                            Discover amazing products with
                            modern shopping experience,
                            fast delivery, secure payment,
                            and premium quality items.
                        </p>



                        {/* SOCIAL ICONS */}

                        <div className="flex gap-4 mt-6">

                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-blue-600 transition duration-300 p-3 rounded-full"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-pink-600 transition duration-300 p-3 rounded-full"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-sky-500 transition duration-300 p-3 rounded-full"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-red-600 transition duration-300 p-3 rounded-full"
                            >
                                <FaYoutube />
                            </a>

                            <a
                                href="#"
                                className="bg-gray-800 hover:bg-blue-500 transition duration-300 p-3 rounded-full"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>



                    {/* QUICK LINKS */}

                    <div>

                        <h2 className="text-xl font-bold text-white mb-6">
                            Quick Links
                        </h2>

                        <ul className="space-y-1">

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-white transition duration-300"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className="hover:text-white transition duration-300"
                                >
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/categories"
                                    className="hover:text-white transition duration-300"
                                >
                                    Categories
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-white transition duration-300"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>



                    {/* CUSTOMER SERVICE */}

                    <div>

                        <h2 className="text-xl font-bold text-white mb-6">
                            Customer Service
                        </h2>

                        <ul className="space-y-1">

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Help Center
                            </li>

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Shipping Info
                            </li>

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Returns
                            </li>

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Privacy Policy
                            </li>

                            <li className="hover:text-white transition duration-300 cursor-pointer">
                                Terms & Conditions
                            </li>

                        </ul>

                    </div>



                    {/* NEWSLETTER */}

                    <div>

                        <h2 className="text-xl font-bold text-white mb-6">
                            Newsletter
                        </h2>

                        <p className="text-gray-400 mb-5 leading-5">
                            Subscribe to get updates about
                            new products and special offers.
                        </p>



                        <div className="flex flex-col gap-4">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 text-white text-sm p-3 rounded-lg outline-none border border-gray-700 focus:border-blue-500"
                            />

                            <button
                                className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white text-xs p-3 rounded-lg font-semibold"
                            >
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>



                {/* BOTTOM SECTION */}

                <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        © 2026 LearnCode. All Rights Reserved.
                    </p>

                    <div className="flex gap-6 text-sm text-gray-500">

                        <span className="hover:text-white cursor-pointer transition duration-300">
                            Privacy
                        </span>

                        <span className="hover:text-white cursor-pointer transition duration-300">
                            Terms
                        </span>

                        <span className="hover:text-white cursor-pointer transition duration-300">
                            Security
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;