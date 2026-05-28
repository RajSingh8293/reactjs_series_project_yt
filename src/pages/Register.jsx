import { Link } from "react-router-dom";
import image from '../assets/LearnCode Logo Design.png'

import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaGoogle,
} from "react-icons/fa";
import { useState } from "react";
import { CiWarning } from "react-icons/ci";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("")


    // HANDLE INPUT CHANGE

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    // HANDLE SUBMIT

    const handleSubmit = (e) => {

        e.preventDefault();

        // PASSWORD MATCH CHECK

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (!formData.name || !formData.email || !formData.password) {
            setError("Please fill all input fields")
            return
        }
        console.log(formData);
        // API CALL HERE
        localStorage.setItem("user", JSON.stringify(formData));
        alert("Account Created Successfully");
    };

    return (

        <div className="min-h-screen bg-linear-to-br from-gray-600 via-gray-600 to-purple-700 flex items-center justify-center px-4 py-10">

            <div className="w-full lg:max-w-3xl md:max-w-xl sm:max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* ================= LEFT SIDE ================= */}

                <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-gray-700 to-gray-800 text-white p-12 relative overflow-hidden">

                    <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-16 -left-16"></div>

                    <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-24 -right-24"></div>

                    <div className="relative z-10">

                        <h1 className="text-5xl font-extrabold leading-tight">
                            Join Us
                        </h1>

                        <p className="mt-6 text-lg text-indigo-100 leading-8">
                            Create your account and start
                            exploring premium products,
                            exclusive offers, and fast
                            shopping experience.
                        </p>



                        <img
                            src={image}
                            alt="register"
                            className="w-72 mt-10 drop-shadow-2xl rounded-full"
                        />
                        {/* <img
                            src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                            alt="register"
                            className="w-72 mt-10 drop-shadow-2xl"
                        /> */}

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
                            Create Account
                        </h2>

                        <p className="text-gray-500 ">
                            Register and enjoy your
                            shopping journey.
                        </p>

                    </div>

                    {
                        error && (

                            <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl shadow-sm flex items-start gap-3 animate-pulse">

                                {/* ICON */}

                                <div className="bg-red-100 p-2 rounded-full">
                                    <CiWarning />
                                </div>



                                {/* MESSAGE */}

                                <div>

                                    <h3 className="font-semibold text-sm">
                                        Something went wrong
                                    </h3>

                                    <p className="text-sm mt-1">
                                        {error}
                                    </p>

                                </div>

                            </div>

                        )
                    }

                    {/* FORM */}

                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 space-y-5"
                    >

                        {/* NAME */}

                        <div>

                            <label className="text-sm font-semibold text-gray-700">
                                Full Name
                            </label>

                            <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-4 py-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-200 transition">

                                <FaUser className="text-gray-400 text-sm" />

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full outline-none px-3 text-sm"
                                />

                            </div>

                        </div>



                        {/* EMAIL */}

                        <div>

                            <label className="text-sm font-semibold text-gray-700">
                                Email Address
                            </label>

                            <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-4 py-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-200 transition">

                                <FaEnvelope className="text-gray-400 text-sm" />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
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

                            <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-4 py-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-200 transition">

                                <FaLock className="text-gray-400 text-sm" />

                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                    className="w-full outline-none px-3 text-sm"
                                />

                            </div>

                        </div>



                        {/* CONFIRM PASSWORD */}

                        <div>

                            <label className="text-sm font-semibold text-gray-700">
                                Confirm Password
                            </label>

                            <div className="flex items-center border border-gray-300 rounded-2xl mt-2 px-4 py-4 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-200 transition">

                                <FaLock className="text-gray-400 text-sm" />

                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm password"
                                    className="w-full outline-none px-3 text-sm"
                                />

                            </div>

                        </div>



                        {/* BUTTON */}

                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-700 text-white py-4 rounded-2xl font-semibold text-sm shadow-lg hover:shadow-xl transition duration-300"
                        >
                            Create Account
                        </button>



                        {/* DIVIDER */}

                        <div className="flex items-center gap-4">

                            <div className="flex-1 h-px bg-gray-300"></div>

                            <span className="text-gray-400 text-sm">
                                OR
                            </span>

                            <div className="flex-1 h-px bg-gray-300"></div>

                        </div>



                        {/* GOOGLE */}

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

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-indigo-600 font-semibold ml-1 hover:underline"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );
};

export default Register;