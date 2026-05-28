import { useSelector } from "react-redux";
import Layout from "../components/Layout"

import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaEdit,
    FaShoppingBag,
    FaHeart,
    FaSignOutAlt,
} from "react-icons/fa";
import Loader from "../components/Lodaer";

const Profile = () => {
    const { loading } = useSelector((state) => state.products)

    // GET USER FROM LOCAL STORAGE

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (loading) {
        return <Loader />
    }
    return (

        <Layout>
            <div className="min-h-screen bg-linear-to-br from-gray-100 via-white to-blue-50 py-10 px-4">

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* ================= LEFT PROFILE CARD ================= */}

                    <div className="bg-white rounded-3xl shadow-xl p-8 h-fit">

                        {/* PROFILE IMAGE */}

                        <div className="flex flex-col items-center">

                            <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white text-5xl font-bold shadow-xl">

                                {user.name ?
                                    user?.name
                                        ?.charAt(0)
                                        ?.toUpperCase()
                                    :
                                    < img className="overflow-hidden rounded-full" src="https://picsum.photos/200" alt="" />
                                }



                            </div>



                            {/* NAME */}

                            <h2 className="text-2xl font-bold text-gray-800 mt-5">
                                {user?.name || "Guest User"}
                            </h2>



                            {/* EMAIL */}

                            <p className="text-gray-500 mt-1 text-sm">
                                {user?.email || "No Email"}
                            </p>



                            {/* BUTTON */}

                            <button className="mt-6 bg-black hover:bg-gray-700 text-white px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2 shadow-lg transition duration-300">

                                <FaEdit />

                                Edit Profile

                            </button>

                        </div>



                        {/* MENU */}

                        <div className="mt-10 space-y-3">

                            <button className="w-full flex items-center gap-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-5 py-4 rounded-2xl transition duration-300">

                                <FaShoppingBag />

                                My Orders

                            </button>



                            <button className="w-full flex items-center gap-3 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 px-5 py-4 rounded-2xl transition duration-300">

                                <FaHeart />

                                Wishlist

                            </button>



                            <button className="w-full flex items-center gap-3 bg-red-50 hover:bg-red-100 text-red-600 px-5 py-4 rounded-2xl transition duration-300">

                                <FaSignOutAlt />

                                Logout

                            </button>

                        </div>

                    </div>



                    {/* ================= RIGHT DETAILS ================= */}

                    <div className="lg:col-span-2 space-y-8">

                        {/* ACCOUNT DETAILS */}

                        <div className="bg-white rounded-3xl shadow-xl p-8">

                            <div className="flex items-center justify-between">

                                <h2 className="text-2xl font-bold text-gray-800">
                                    Account Details
                                </h2>

                                <button className="text-blue-600 font-semibold hover:underline">
                                    Edit
                                </button>

                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                                {/* NAME */}

                                <div className="bg-gray-50 p-5 rounded-2xl">

                                    <div className="flex items-center gap-3 text-blue-600">

                                        <FaUser />

                                        <h3 className="font-semibold">
                                            Full Name
                                        </h3>

                                    </div>

                                    <p className="text-gray-700 mt-3 text-sm">
                                        {user?.name || "No Name"}
                                    </p>

                                </div>



                                {/* EMAIL */}

                                <div className="bg-gray-50 p-5 rounded-2xl">

                                    <div className="flex items-center gap-3 text-indigo-600">

                                        <FaEnvelope />

                                        <h3 className="font-semibold">
                                            Email Address
                                        </h3>

                                    </div>

                                    <p className="text-gray-700 mt-3 text-sm">
                                        {user?.email || "No Email"}
                                    </p>

                                </div>



                                {/* PHONE */}

                                <div className="bg-gray-50 p-5 rounded-2xl">

                                    <div className="flex items-center gap-3 text-green-600">

                                        <FaPhone />

                                        <h3 className="font-semibold">
                                            Phone Number
                                        </h3>

                                    </div>

                                    <p className="text-gray-700 mt-3 text-sm">
                                        +91 9876543210
                                    </p>

                                </div>



                                {/* ADDRESS */}

                                <div className="bg-gray-50 p-5 rounded-2xl">

                                    <div className="flex items-center gap-3 text-red-500">

                                        <FaMapMarkerAlt />

                                        <h3 className="font-semibold">
                                            Address
                                        </h3>

                                    </div>

                                    <p className="text-gray-700 mt-3 text-sm">
                                        Tokyo, Japan
                                    </p>

                                </div>

                            </div>

                        </div>



                        {/* RECENT ACTIVITY */}

                        <div className="bg-white rounded-3xl shadow-xl p-8">

                            <h2 className="text-2xl font-bold text-gray-800">
                                Recent Activity
                            </h2>



                            <div className="mt-6 space-y-4">

                                <div className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl">

                                    <div>

                                        <h3 className="font-semibold text-gray-800">
                                            Order Placed
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Your order #12345 has been placed.
                                        </p>

                                    </div>

                                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                        Success
                                    </span>

                                </div>



                                <div className="flex items-center justify-between bg-gray-50 p-5 rounded-2xl">

                                    <div>

                                        <h3 className="font-semibold text-gray-800">
                                            Wishlist Updated
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            You added a new item to wishlist.
                                        </p>

                                    </div>

                                    <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
                                        Wishlist
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </Layout>

    );
};

export default Profile;