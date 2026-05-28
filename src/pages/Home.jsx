
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect, useMemo, useState } from "react";
import { fetchProducts, setSelectedCategory, setSort } from "../store/reducers/productSlice";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Loader from "../components/Lodaer";

const Home = () => {

    const { products, categories, loading, error, search,
        selectedCategory,
        sort, } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    console.log(" products :", products);
    console.log(" categories :", categories);




    // useEffect(() => {
    //     dispatch(fetchProducts())
    // }, [dispatch])


    // ================= STATES =================

    // const [selectedCategory, setSelectedCategory] =
    useState("all");

    // const [search, setSearch] = useState("");

    // const [sort, setSort] = useState("");



    // ================= FETCH PRODUCTS =================

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);



    // ================= FILTER + SORT =================

    const filteredProducts = useMemo(() => {

        let updatedProducts = [...products];

        // ===== CATEGORY FILTER =====

        if (selectedCategory !== "all") {
            updatedProducts = updatedProducts.filter(
                (item) =>
                    item.category === selectedCategory
            );
        }

        // ===== SEARCH FILTER =====

        if (search) {
            updatedProducts = updatedProducts.filter(
                (item) =>
                    item.title
                        .toLowerCase()
                        .includes(search.toLowerCase())
            );
        }

        // ===== SORTING =====

        if (sort === "low") {
            updatedProducts.sort(
                (a, b) => a.price - b.price
            );
        }

        if (sort === "high") {
            updatedProducts.sort(
                (a, b) => b.price - a.price
            );
        }

        if (sort === "az") {
            updatedProducts.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }

        if (sort === "za") {
            updatedProducts.sort((a, b) =>
                b.title.localeCompare(a.title)
            );
        }

        return updatedProducts;

    }, [products, selectedCategory, search, sort]);


    if (loading) {
        return <Loader />
    }
    if (error) {
        return (<div>
            <p>{error}</p>
        </div>)
    }

    return (
        // <div className=" flex justify-between items-center gap-4 flex-wrap p-16">

        //     {

        //         products?.map((data) =>
        //             <Card key={data.id} data={data} />
        //         )
        //     }
        // </div>

        <Layout>
            <Hero />
            <div className="p-10">

                {/* ================= FILTER SECTION ================= */}

                {filteredProducts.length > 1 && <div className="flex flex-wrap items-center justify-end gap-4 mb-10">
                    {/* CATEGORY */}

                    <select
                        value={selectedCategory}
                        onChange={(e) =>
                            dispatch(setSelectedCategory(
                                e.target.value
                            ))
                        }
                        className="border p-2 text-xs rounded-md"
                    >

                        <option value="all">
                            All Categories
                        </option>

                        {categories?.map((cat, index) => (
                            <option
                                key={index}
                                value={cat}
                            >
                                {cat}
                            </option>
                        ))}
                    </select>



                    {/* SORT */}

                    <select
                        value={sort}
                        onChange={(e) =>
                            dispatch(setSort(e.target.value))
                        }
                        className="border p-2 text-xs rounded-md"
                    >

                        <option value="">
                            Sort By
                        </option>

                        <option value="low">
                            Price: Low to High
                        </option>

                        <option value="high">
                            Price: High to Low
                        </option>

                        <option value="az">
                            Name: A-Z
                        </option>

                        <option value="za">
                            Name: Z-A
                        </option>

                    </select>

                </div>}



                {/* ================= PRODUCTS ================= */}

                <div className="flex justify-center gap-6 flex-wrap">

                    {filteredProducts.length > 0 ? (

                        filteredProducts.map((data) => (
                            <Card
                                key={data.id}
                                data={data}
                            />
                        ))

                    ) : (

                        <h1 className="text-2xl font-bold">
                            No Products Found
                        </h1>

                    )}

                </div>

            </div>
        </Layout>
    )
}

export default Home