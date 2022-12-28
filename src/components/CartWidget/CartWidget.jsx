
import { useCartContext } from "../../context/CartContext";

const CartWidget = () =>{

    const {totalProducts} = useCartContext();

    return(
        <>
            <i class="bi bi-bag"></i>
            <span>{totalProducts() || ""}</span>
        </>
    );
}

export default CartWidget;