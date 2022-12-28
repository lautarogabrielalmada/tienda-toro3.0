
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{

    const {totalProducts} = useCartContext();

    return(
        <>
            <Link to={"/cart/cartId"}><i class="bi bi-bag"></i></Link>
            <span>{totalProducts() || ""}</span>
        </>
    );
}

export default CartWidget;