import { addDoc, getFirestore, collection } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import Swal from "sweetalert2";
import "./cart.css";

const Cart = () => {

    const {cart, totalPrice} = useCartContext();


const order = {
    buyer:{
        name:"Jose",
        email:"jose@gmail.com",
        phone:"1164350226",
        adress:"asdd"

    },
    items:cart.map(productos => ({id:productos.id, nombre: productos.nombre, precio: productos.precio, quantity: productos.quantity})),
    total:totalPrice(),
}

const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db,"orders");

    addDoc(ordersCollection, order)
    .then(({id})=> console.log(id))

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Su compra fue realizada con exito!',
        showConfirmButton: false,
        timer: 1500
      })

}

    if(cart.length === 0){
        return(
            <>
            <p>No hay elementos en el carrito</p>
            <Link to="/">Hacer compras</Link>
            </>
        )
    }


    return(
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p>total: $ {totalPrice()}</p>

        <button className="emitir-compra" onClick={handleClick} swak>Emitir compra</button>
        </>
    )
}

export default Cart;