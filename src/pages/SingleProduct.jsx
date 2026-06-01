import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsData, fetchSingleProduct } from '../store/reducers/productSlice'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Layout from '../components/Layout'
import { FaHeart, FaRegStar, FaShieldAlt, FaStar, FaTruck, FaUndo } from 'react-icons/fa'
import Button from '../components/Button'
import Card from '../components/Card'

const SingleProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { products,
        singleProduct,
        loading,
        error, } = useSelector(state => state.products)

    const [quantity, setQuantity] = useState(1)




    useEffect(() => {
        if (id) {
            dispatch(fetchProductsData())
            dispatch(fetchSingleProduct(id))
        }
    }, [dispatch, id])



    if (loading) {
        return <Loader />
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        )
    }
    return (
        <Layout>
            <div>
                <div className='min-h-screen bg-linear-to-br from-gray-100 via-white to-gray-200 py-6 px-3'>
                    <div className='max-w-5xl mx-auto'>
                        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>

                            <div className='grid grid-cols-1 lg:grid-cols-2  gap-4'>
                                {/* image section  */}
                                <div className='relative bg-linear-to-br from-blue-50 to-gray-100 flex justify-center items-center p-5 min-h-80 '>
                                    {/* discount badge  */}
                                    <div className='absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-semibold shadow]'>
                                        20% OFF
                                    </div>
                                    <button className='absolute top-4 right-4 bg-white p-2.5 rounded-full shadow hover:scale-105 transition duration-300'>
                                        <FaHeart className='text-red-500 text-sm' />
                                    </button>


                                    {/* product image  */}

                                    <img src={singleProduct?.image} alt={singleProduct?.title}
                                        className='w-full max-w-55 object-contain hover:scale-105 transition duration-500'
                                    />

                                </div>

                                <div className='p-5'>
                                    <span className='bg-blue-100 text-blue-700 px-3 py-1
                                     rounded-full text-[10px] font-semibold uppercase tracking-wide'>{singleProduct?.category}</span>
                                    <h1 className='text-xl md:text-2xl font-bold text-gray-800 mt-3 leading-snug'>{singleProduct?.title}</h1>

                                    {/* rating  */}

                                    <div className='flex items-center gap-2 mt-3
                                     flex-wrap'>
                                        <div className='flex text-green-600 text-sm gap-1'>
                                            {Array.from({ length: Math.round(singleProduct?.rating?.rate) }, (_, i) => (
                                                <FaStar key={`filled-${i}`} />
                                            ))}
                                            {/* Empty Stars  */}
                                            {Array.from({ length: 5 - Math.round(singleProduct?.rating?.rate) }, (_, i) => (
                                                <FaRegStar key={`empty-${i}`} />
                                            ))}
                                        </div>

                                        <p className='text-gray-500 text-xs'>
                                            ({singleProduct?.rating?.rate})
                                            {" "}
                                            {singleProduct?.rating?.count}
                                            {" "}
                                            Reviews
                                        </p>
                                    </div>

                                    {/* price  */}
                                    <div className='mt-4 flex items-center gap-3 flex-wrap'>
                                        <h2 className='text-2xl md:text-3xl font-bold text-green-600'>
                                            ${singleProduct?.price}
                                            <span className='text-sm font-bold text-gray-400 line-through ml-1.5'>
                                                ${(singleProduct?.price * 1.2).toFixed(0)}
                                            </span>
                                        </h2>
                                    </div>

                                    {/* descrpition  */}
                                    <p className='text-gray-600 leading-6 text-sm mt-4
                                    '>{singleProduct?.description}</p>

                                    <div className='mt-6'>
                                        <h3 className='text-sm font-semibold text-gray-700 mb-2'>Quantity</h3>
                                        <div className='flex items-center gap-3'>
                                            <button
                                                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                                className='w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-base font-bold'>
                                                -
                                            </button>
                                            <span className='text-base font-semibold w-6 text-center'>{quantity}</span>
                                            <button
                                                onClick={() => setQuantity(quantity + 1)}
                                                className='w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-base font-bold'>
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* buttons */}

                                    <div className='flex flex-wrap gap-3 mt-6'>

                                        <Button data={{ ...singleProduct, quantity: quantity }} />

                                        <button className='border border-black text-black hover:bg-black hover:text-white px-5 py-2.5 rounded-md text-sm font-medium transition duration-300'>
                                            Buy Now
                                        </button>
                                    </div>


                                    {/* features  */}
                                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8'>

                                        <div className='bg-gray-100 p-3 rounded-lg flex flex-col items-center text-center'>
                                            <FaTruck className='text-lg text-blue-600 mb-1' />
                                            <h3 className='font-medium text-xs text-gray-800'>Free Shipping</h3>
                                            <p className='text-gray-500 text-[10px] mt-1'>Orders over $100</p>
                                        </div>
                                        <div className='bg-gray-100 p-3 rounded-lg flex flex-col items-center text-center'>
                                            <FaShieldAlt className='text-lg text-green-600 mb-1' />
                                            <h3 className='font-medium text-xs text-gray-800'>Free Shipping</h3>
                                            <p className='text-gray-500 text-[10px] mt-1'>Orders over $100</p>
                                        </div>
                                        <div className='bg-gray-100 p-3 rounded-lg flex flex-col items-center text-center'>
                                            <FaUndo className='text-lg text-orange-500 mb-1' />
                                            <h3 className='font-medium text-xs text-gray-800'>Free Shipping</h3>
                                            <p className='text-gray-500 text-[10px] mt-1'>Orders over $100
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='mt-14 px-10'>
                    <div className='flex items-center justify-between mb-8'>
                        <div>
                            <h2 className='text-2xl font-bold text-gray-800'>Related Products</h2>
                            <p className='text-gray-500 text-sm mt-1'>You may also like these products</p>
                        </div>
                    </div>


                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                        {
                            products?.filter(
                                (item) => item?.category === singleProduct?.category &&
                                    item?.id !== singleProduct?.id).slice(0, 6).map((item) =>
                                        <Card key={item.id} data={item} />
                                    )

                        }
                    </div>
                </div>



            </div>
        </Layout>
    )
}

export default SingleProduct