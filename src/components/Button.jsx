import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/cartSlice";
import { FaShoppingCart } from "react-icons/fa";


const Button = ({ data }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {

        if (data) {
            dispatch(addToCart(data));
            alert(
                `Added ${data.quantity} item(s) to cart`
            );
        }
    };
    return (
        <button onClick={handleAddToCart} className="px-3 py-2 flex justify-center items-center gap-2  w-full bg-black text-white text-xs text-[10px]  rounded-md  hover:bg-gray-800 transition" >
            <FaShoppingCart /> Add To Cart
        </button >

    )
}

export default Button