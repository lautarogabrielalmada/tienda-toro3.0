import Card from 'react-bootstrap/Card';
import React, {useState} from "react"
import ItemCount from "../ItemCount/ItemCount";
import {useCartContext} from "../../context/CartContext";

const ItemDetail = ({prod}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();


  const handleOnAdd = (quantity) =>{
    setGoToCart(true);
    addProduct(prod,quantity);
   }

    return (
        <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Text>
            $ {prod.precio}
            
          
          </Card.Text>
          <Card.Text>
           
            {prod.detalle}
           
          </Card.Text>
          <Card.Text>
           
           
            {prod.categoria}
          </Card.Text>
          <ItemCount stock={prod.stock} onAdd={handleOnAdd}/> 
        </Card.Body>
      </Card>
      </div>
      

    );
  }
  
  export default ItemDetail