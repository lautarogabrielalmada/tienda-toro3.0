
import React, {useContext} from "react" 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



const Item = ({prod}) => {

const nombre = useContext(CartContext);
console.log("Item",nombre);

  return (

<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={prod.img} />
<Card.Body>
  <Card.Title>{prod.nombre}</Card.Title>
  <Card.Text>
    {prod.categoria}
  </Card.Text>
  <Card.Text>
    {prod.categoria}
  $ {prod.precio}
  </Card.Text>
  
</Card.Body>
<Button variant="dark"><Link className="hola" to={`/detail/${prod.id}`}>Ver detalle</Link></Button>
</Card>



  );
}

export default Item