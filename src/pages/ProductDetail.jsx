import { useParams } from "react-router-dom"
import Layout from "../components/Layout"


const ProductDetail = () => {

    const { id } = useParams()
    // const id = params.id
    return (
        <Layout>
            <h1>{id}</h1>
            ProductDetail
        </Layout>
    )
}

export default ProductDetail