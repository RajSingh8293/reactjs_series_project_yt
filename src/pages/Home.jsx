import { useDispatch, useSelector } from 'react-redux'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { useEffect, useMemo } from 'react'
import { fetchProductsData, setSelectedCategory, setSort } from '../store/reducers/productSlice'

import Card from '../components/Card'
import Loader from '../components/Loader'

const Home = () => {


    const dispatch = useDispatch()
    const { products,
        categories,
        search,
        selectedCategory,
        sort,
        loading,
        error, } = useSelector(state => state.products)




    useEffect(() => {
        dispatch(fetchProductsData())
    }, [dispatch])

    const filteredProducts = useMemo(() => {
        let updatedProducts = [...products]

        // category filter
        if (selectedCategory !== "all") {
            updatedProducts = updatedProducts.filter((item) => item.category === selectedCategory)
        }
        // search
        if (search) {
            updatedProducts = updatedProducts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
        }

        // sort filter 
        if (sort === "low") {
            updatedProducts.sort((a, b) => a.price - b.price)
        }
        if (sort === "high") {
            updatedProducts.sort((a, b) => b.price - a.price)
        }
        if (sort === "az") {
            updatedProducts.sort((a, b) => a.title.localeCompare(b.title))
        }
        if (sort === "za") {
            updatedProducts.sort((a, b) => b.title.localeCompare(a.title))
        }

        return updatedProducts


    }, [products, selectedCategory, sort, search])



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
            <Hero />

            <div className='p-10'>
                {filteredProducts.length > 1 && <div className='flex flex-wrap justify-end items-center gap-5 mb-10'>
                    {/* CATEGORY */}
                    <select value={selectedCategory}
                        onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
                        className='border p-2 text-xs rounded-md'

                    >
                        <option value="all" >All Categories</option>
                        {categories?.map((cat, index) =>
                            <option key={index} value={cat}>{cat}</option>
                        )}

                    </select>
                    {/* SORT  */}
                    <select value={sort}
                        onChange={(e) => dispatch(setSort(e.target.value))}
                        className='border p-2 text-xs rounded-md'

                    >
                        <option value="" >Sort By</option>
                        <option value="low" >Price : Low to High</option>
                        <option value="high" >Price : High to Low</option>
                        <option value="az" >Name : A to Z</option>
                        <option value="za" >Name : Z to A</option>


                    </select>


                </div>}

                <div className='flex gap-5 items-center justify-center flex-wrap'>
                    {filteredProducts.length > 0 ?
                        filteredProducts?.map((data) =>
                            <Card key={data.id} data={data} />
                        )
                        :
                        < h1 className='text-2xl font-bold'>
                            Products not found
                        </h1>
                    }

                </div>
            </div>
        </Layout >
    )
}

export default Home