import { NavLink } from "react-router-dom"

import { FaStar, FaRegStar } from "react-icons/fa6";


const Card = ({ data }) => {

    console.log("data :", data);



    return (
        // <div className="w-40 h-56 shadow-4xl border p-3">
        //     <img src={data.image} alt="" className="h-32" />
        //     <p>Rs.{data.price}</p>
        //     <h2>{data.title.slice(0, 25)}...</h2>
        // </div>
        <div className="w-44 h-72 bg-white rounded-sm overflow-hidden shadow-xl  group flex flex-col ">

            {/* Image Section */}
            <div className="bg-gray-100 flex items-center justify-center p-5 h-40 overflow-hidden shrink-0">
                <img
                    src={data?.image}
                    alt={data?.title}
                    className="h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="p-3 flex flex-col justify-between flex-1">

                <div>
                    <NavLink to={`/product/${data.id}`} className="text-gray-800 text-xs overflow-hidden ">
                        {data.title.slice(0, 40)}...
                    </NavLink>

                    {/* Rating Section */}
                    <div className="flex items-center gap-1 mt-1">
                        <div className="flex text-green-600 text-xs gap-0.5">

                            {/* Filled Stars */}
                            {Array.from({ length: Math.round(data.rating?.rate) }, (_, i) => (
                                <FaStar key={`filled-${i}`} />
                            ))}

                            {/* Empty Stars */}
                            {Array.from(
                                { length: 5 - Math.round(data.rating?.rate) },
                                (_, i) => (
                                    <FaRegStar key={`empty-${i}`} />
                                )
                            )}

                        </div>

                        <span className="text-[11px] text-gray-500 ">
                            ({data.rating?.rate})
                        </span>
                    </div>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between flex-col mt-1">

                    <p className="text-xs">

                        <span className="font-bold  text-green-600">
                            ${data.price}
                        </span>
                        <span className=" text-gray-400 line-through">
                            $
                            {(data?.price * 1.2).toFixed(0)}
                        </span>
                    </p>

                    <button className="bg-black text-white text-xs px-2 py-0.5 rounded-md text-[10px] hover:bg-gray-800 transition">
                        Add To Cart
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Card