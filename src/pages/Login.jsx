
// const Login = () => {
//     return (
//         <div>Login</div>
//     )
// }

// export default Login

import { Link } from "react-router-dom";
import image from "../assets/LearnCode Logo Design.png"

import {
    FaEnvelope,
    FaLock,
    FaGoogle,
} from "react-icons/fa";

const Login = () => {

    return (

        <div className="min-h-screen bg-linear-to-br from-gray-600 via-gray-600 to-purple-700 flex items-center justify-center px-4 py-10">

            <div className="w-full lg:max-w-3xl md:max-w-xl sm:max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* ================= LEFT SIDE ================= */}

                <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-gray-700 to-gray-800 text-white p-12 relative overflow-hidden">

                    <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-16 -left-16"></div>

                    <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-24 -right-24"></div>

                    <div className="relative z-10">

                        <h1 className="text-3xl font-extrabold leading-tight">
                            Welcome Back
                        </h1>

                        <p className="mt-6 text-sm text-blue-100 ">
                            Login to access your account,
                            manage your orders, wishlist,
                            and enjoy seamless shopping
                            experience.
                        </p>



                        <img
                            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                            alt="shopping"
                            className="w-72 mt-10 drop-shadow-2xl"
                        />

                    </div>

                </div>



                {/* ================= RIGHT SIDE ================= */}

                <div className="p-8 md:p-12 flex flex-col justify-center">

                    {/* HEADER */}
                    <div className="text-center flex justify-center items-center flex-col gap-2">
                        <Link to="/">
                            <img
                                src={image}
                                alt="register"
                                className="w-12 drop-shadow-2xl rounded-full"
                            />
                        </Link>


                        <h2 className="text-4xl font-extrabold text-gray-800">
                            Login
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Welcome back! Please login
                            to your account.
                        </p>

                    </div>



                    {/* FORM */}

                    <form className="mt-10 space-y-6 ">

                        {/* EMAIL */}

                        <div>

                            <label className="text-sm font-semibold text-gray-700">
                                Email Address
                            </label>

                            <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-4 py-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200 transition">

                                <FaEnvelope className="text-gray-400 text-sm" />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full outline-none px-3 text-sm"
                                />

                            </div>

                        </div>



                        {/* PASSWORD */}

                        <div>

                            <label className="text-sm font-semibold text-gray-700">
                                Password
                            </label>

                            <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-4 py-4 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200 transition">

                                <FaLock className="text-gray-400 text-sm" />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full outline-none px-3 text-sm"
                                />

                            </div>

                        </div>



                        {/* OPTIONS */}

                        <div className="flex items-center justify-between text-sm">

                            <label className="flex items-center gap-2 text-gray-600">

                                <input type="checkbox" />

                                Remember me

                            </label>

                            <button
                                type="button"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Forgot Password?
                            </button>

                        </div>



                        {/* LOGIN BUTTON */}

                        <button
                            className="w-full bg-black hover:bg-gray-600 text-white py-4 rounded-2xl font-semibold text-sm shadow-lg hover:shadow-xl transition duration-300"
                        >
                            Login
                        </button>



                        {/* DIVIDER */}

                        <div className="flex items-center gap-4">

                            <div className="flex-1 h-px bg-gray-300"></div>

                            <span className="text-gray-400 text-sm">
                                OR
                            </span>

                            <div className="flex-1 h-px bg-gray-300"></div>

                        </div>



                        {/* GOOGLE BUTTON */}

                        <button
                            type="button"
                            className="w-full border border-gray-300 hover:bg-gray-100 py-4 rounded-2xl font-medium text-sm flex items-center justify-center gap-3 transition duration-300"
                        >

                            <FaGoogle className="text-red-500" />

                            Continue with Google

                        </button>

                    </form>



                    {/* FOOTER */}

                    <p className="text-center text-sm text-gray-500 mt-8">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="text-blue-600 font-semibold ml-1 hover:underline"
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );
};

export default Login;