// import { NavLink } from "react-router-dom"

// const Header = () => {
//     return (
//         <div>

//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About</NavLink>
//             <NavLink to="/contact">Contact</NavLink>
//             <NavLink to="/login">Login</NavLink>
//             <NavLink to="/profile">Profile</NavLink>
//         </div>
//     )
// }

// export default Header


import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/reducers/productSlice";

const Header = () => {
    const dispatch = useDispatch();

    const { search } = useSelector(
        (state) => state.products
    );
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex items-center justify-between">

                    {/* LOGO */}

                    <Link
                        to="/"
                        className="text-2xl font-extrabold text-gray-600 tracking-wide"
                    >
                        {/* <img src={logo} alt="" /> */}
                        Learn<span className="text-green-600">Code</span>
                    </Link>



                    {/* NAV LINKS */}

                    <div className="hidden md:flex items-center gap-8">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-sm transition duration-300 
                                ${isActive
                                    ? "text-green-600"
                                    : "text-gray-700 hover:text-green-600"}`
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                `text-sm transition duration-300 
                                ${isActive
                                    ? "text-green-600"
                                    : "text-gray-700 hover:text-green-600"}`
                            }
                        >
                            Products
                        </NavLink>

                        <NavLink
                            to="/categories"
                            className={({ isActive }) =>
                                `text-sm transition duration-300 
                                ${isActive
                                    ? "text-green-600"
                                    : "text-gray-700 hover:text-green-600"}`
                            }
                        >
                            Categories
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-sm transition duration-300 
                                ${isActive
                                    ? "text-green-600"
                                    : "text-gray-700 hover:text-green-600"}`
                            }
                        >
                            Contact
                        </NavLink>

                    </div>



                    {/* SEARCH BAR */}

                    <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-full w-80">

                        <FiSearch className="text-gray-500 text-lg" />

                        <input
                            type="search"
                            placeholder="Search products..."
                            className="bg-transparent outline-none px-2 w-full text-sm"
                            value={search}
                            onChange={(e) =>
                                dispatch(
                                    setSearch(e.target.value)
                                )
                            }
                        />
                    </div>



                    {/* ICONS */}

                    <div className="flex items-center gap-5">

                        {/* CART */}

                        <Link
                            to="/cart"
                            className="relative"
                        >
                            <FaShoppingCart className="text-xl text-gray-700 hover:text-green-600 transition duration-300" />

                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 py-0.05 rounded-full">
                                2
                            </span>
                        </Link>



                        {/* USER */}

                        <Link to="/profile">
                            <FaUserCircle className="text-xl text-gray-700 hover:text-green-600 transition duration-300" />
                        </Link>

                    </div>

                </div>

            </div>

        </nav>
    );
};

export default Header;