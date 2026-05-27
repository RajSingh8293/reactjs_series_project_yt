import { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        try {
            setLoading(true)

            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider