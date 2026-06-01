
import { FaRegStar, FaStar } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const Card = ({ data }) => {
    return (
        <div className='w-44 h-80 bg-white rounded-sm overflow-hidden shadow-xl group flex flex-col'>
            {/* Image Section  */}
            <div className='bg-gray-100 flex items-center justify-center p-5 h-40 overflow-hidden shrink-0'>
                <img src={data?.image} alt={data?.title} className='h-24 object-contain group-hover:scale-110 transition-transform duration-300' />
            </div>
            {/* Content Section  */}

            <div className='p-3 flex flex-col justify-between flex-1'>
                <div>
                    <NavLink to={`/product/${data?.id}`} className="text-gray-800 text-xs overflow-hidden">
                        {data?.title.slice(0, 35)}
                    </NavLink>

                    {/* Rating Section  */}
                    <div className='flex items-center gap-1 mt-1'>
                        <div className='flex text-green-600 text-xs gap-0.5'>
                            {/* Filled Stars  */}
                            {Array.from({ length: Math.round(data?.rating?.rate) }, (_, i) => (
                                <FaStar key={`filled-${i}`} />
                            ))}
                            {/* Empty Stars  */}
                            {Array.from({ length: 5 - Math.round(data?.rating?.rate) }, (_, i) => (
                                <FaRegStar key={`empty-${i}`} />
                            ))}
                        </div>
                        <span className='text-xs text-gray-500'>
                            ({data?.rating?.rate})
                        </span>
                    </div>
                </div>
                {/* Price + Button  */}
                <div className='mt-0.5'>
                    <p className='font-bold text-green-600'>
                        ${data?.price}
                        <span className='text-sm font-bold text-gray-400 line-through ml-1.5'>
                            ${(data.price * 1.2).toFixed(0)}
                        </span>
                    </p>
                    <Button data={{ ...data, quantity: 1 }} />
                </div>
            </div>
        </div>
    )
}

export default Card