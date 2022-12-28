import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./itemCart.css";



const ItemCart = ({product}) => {

   const {removeProduct} = useCartContext();

    return(
        <div>
            <img src={product.img} alt={product.detalle} />

            <div>
                <p>Titulo:{product.nombre}</p>
                <p>Cantidad:{product.stock}</p>
                <p>Precio u.:{product.precio}</p>
                <p>SubTotal:{product.stock * product.precio}</p>
                <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
            </div>


        </div>
    )
}

export default ItemCart;