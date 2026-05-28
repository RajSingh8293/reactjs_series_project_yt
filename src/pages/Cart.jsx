import { useDispatch, useSelector } from "react-redux";

import {
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
} from "../store/reducers/cartSlice";

import {
    FaTrash,
    FaPlus,
    FaMinus,
} from "react-icons/fa";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Cart = () => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(
        (state) => state.cart
    );



    // TOTAL PRICE

    const totalPrice = cartItems.reduce(
        (acc, item) =>
            acc + item.price * item.quantity,
        0
    );



    return (
        <Layout>

            <div className="min-h-screen bg-gray-100 py-10 px-4">

                <div className="max-w-6xl mx-auto">

                    <h1 className="text-3xl font-bold text-gray-800 mb-8">
                        Shopping Cart
                    </h1>



                    {
                        cartItems.length === 0 ? (

                            <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

                                <h2 className="text-2xl font-bold text-gray-700">
                                    Your Cart is Empty
                                </h2>
                                <Link to="/" className="mt-2 text-blue-600 hover:underline">Go Back To Home</Link>

                            </div>

                        ) : (

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                                {/* CART ITEMS */}

                                <div className="lg:col-span-2 space-y-5">

                                    {
                                        cartItems.map((item) => (

                                            <div
                                                key={item.id}
                                                className="bg-white rounded-xl shadow-lg p-5 flex flex-col sm:flex-row gap-5 items-center"
                                            >

                                                {/* IMAGE */}

                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-28 h-28 object-contain"
                                                />



                                                {/* DETAILS */}

                                                <div className="flex-1">

                                                    <Link to={`/product/${item.id}`} className="font-bold text-gray-800 line-clamp-2 hover:text-gray-700">
                                                        {item.title}
                                                    </Link>

                                                    <p className="text-blue-600 font-bold mt-2">
                                                        ${item.price}
                                                    </p>



                                                    {/* QUANTITY */}

                                                    <div className="flex items-center gap-3 mt-4">

                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    decreaseQty(item.id)
                                                                )
                                                            }
                                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                                                        >
                                                            <FaMinus className="text-xs" />
                                                        </button>

                                                        <span className="font-semibold">
                                                            {item.quantity}
                                                        </span>

                                                        <button
                                                            onClick={() =>
                                                                dispatch(
                                                                    increaseQty(item.id)
                                                                )
                                                            }
                                                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                                                        >
                                                            <FaPlus className="text-xs" />
                                                        </button>

                                                    </div>

                                                </div>



                                                {/* REMOVE */}

                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            removeFromCart(item.id)
                                                        )
                                                    }
                                                    className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition duration-300"
                                                >

                                                    <FaTrash />

                                                </button>

                                            </div>

                                        ))
                                    }
                                    <button className="border border-black text-black hover:bg-black hover:text-white px-5 py-2.5 rounded-md text-sm font-medium transition duration-300" onClick={() => dispatch(clearCart())}>
                                        Clear
                                    </button>

                                </div>



                                {/* SUMMARY */}

                                <div className="bg-white rounded-xl shadow-lg p-6 h-fit">

                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Order Summary
                                    </h2>



                                    <div className="mt-6 space-y-4">

                                        <div className="flex justify-between text-gray-600">

                                            <span>Total Items</span>

                                            <span>
                                                {
                                                    cartItems.reduce(
                                                        (acc, item) =>
                                                            acc + item.quantity,
                                                        0
                                                    )
                                                }
                                            </span>

                                        </div>



                                        <div className="flex justify-between text-lg font-bold text-gray-800">

                                            <span>Total Price</span>

                                            <span>
                                                ${totalPrice.toFixed(2)}
                                            </span>

                                        </div>

                                    </div>



                                    <button
                                        className="w-full mt-8 bg-black hover:bg-gray-700 text-white py-3 rounded-xl font-semibold shadow-lg transition duration-300"
                                    >
                                        Proceed To Checkout
                                    </button>

                                </div>

                            </div>

                        )
                    }

                </div>

            </div>
        </Layout>


    );
};

export default Cart;