import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./itemCart.css";



const ItemCart = ({product}) => {

   const {removeProduct} = useCartContext();

    return(
        <div>
            <img src={product.image} alt={product.detalle} />

            <div>
                <p>Titulo:{product.nombre}</p>
                <p>Cantidad:{product.quantity}</p>
                <p>Precio u.:{product.price}</p>
                <p>SubTotal:{product.quantity * product.price}</p>
                <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
            </div>


        </div>
    )
}

export default ItemCart;