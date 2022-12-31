import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./itemCart.css";
import Card from 'react-bootstrap/Card';



const ItemCart = ({product}) => {

   const {removeProduct} = useCartContext();

    return(
       // <div>
       //     <img src={product.img} alt={product.detalle} />

       //     <div>
       //         <p>Titulo:{product.nombre}</p>
       //         <p>Cantidad:{product.stock}</p>
        //        <p>Precio u.:{product.precio}</p>
        //        <p>SubTotal:{product.stock * product.precio}</p>
        //        <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
        //    </div>


      //  </div>

    <div >
    <Card className="card-cart-view" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.img} alt={product.detalle} />
    <Card.Body>

        <Card.Title>{product.nombre}</Card.Title>

        <Card.Text>
        Cantidad: {product.quantity}
        
        
        </Card.Text>

        <Card.Text>
        
        <p>Precio u. : ${product.precio}</p>
        
        </Card.Text>

        <Card.Text>
        <p>SubTotal: ${product.quantity * product.precio}</p>
        </Card.Text>
        <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
    </Card.Body>
    </Card>
    </div>

    )
}

export default ItemCart;