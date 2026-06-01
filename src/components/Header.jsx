import { FaShoppingCart, FaUserCircle } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { setSearch } from "../store/reducers/productSlice"

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const { search } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)


    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* LOGO  */}
                    <Link to="/" className="text-2xl font-extrabold text-gray-600 tracking-wide">
                        Learn<span className="text-green-600">Code</span>
                    </Link>

                    {/* NAV LINKS  */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLink to="/" className={({ isActive }) => ` transition duration-300 ${isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => ` transition duration-300 ${isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => ` transition duration-300 ${isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}>Contact</NavLink>



                    </div>

                    {/* SEARCH BAR  */}
                    <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-full w-80">
                        <FiSearch className="text-gray-500 text-lg" />
                        <input type="search" placeholder="Search products..." className="bg-transparent outline-none px-2 w-full text-sm"
                            value={search}
                            onChange={(e) => dispatch(setSearch(e.target.value))}
                        />
                    </div>

                    {/* ICONS  */}
                    <div className="flex items-center gap-5">
                        {/* CART  */}
                        <Link to="/cart" className="relative">
                            <FaShoppingCart className="text-xl text-gray-700 hover:text-green-600 transition duration-300" />
                            {cartItems.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 py-0.05 rounded-full">
                                {
                                    // cartItems.reduce((acc, item) => acc + item.quantity, 0)
                                    cartItems?.length
                                }
                            </span>}
                        </Link>
                        {/* USER  */}

                        {
                            user ? <NavLink to="/profile" className="text-xl text-gray-700 hover:text-green-600 transition duration-300">
                                <FaUserCircle />
                            </NavLink> : <NavLink to="/login" className={({ isActive }) => ` transition duration-300 ${isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}>
                                Login
                            </NavLink>
                        }



                    </div>
                </div>

            </div>


        </nav>
    )
}

export default Header
