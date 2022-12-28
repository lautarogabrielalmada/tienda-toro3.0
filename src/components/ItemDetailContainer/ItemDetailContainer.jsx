import { useEffect, useState } from "react";
import {getProductById} from "../../Mock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";




const ItemDetailContainer = () =>{

const [Productos, setProductos] = useState([]) //Si ponemos el array [] funciona porque no te pide map
const [loading, setLoading] = useState(true)

const {productId} = useParams("")


    
    useEffect(()=>{
        getProductById(productId)
               .then((respuesta)=> setProductos(respuesta)) //hago la llamada a la api obtengo los productos lo guardo en el estado
               .catch(err => console.log(err))
               .finally(()=>setLoading(false))
       },[productId])

      

    return(

        //Obtener datos de un producto y mostrarlo
        <section>
        {
        loading
        ?
        <h2 class ="cargando">...</h2>
        :
        <div>
          <h2 class="productos_titulo">Detalle del producto</h2>
          <div class="productos_lista">
              <ItemDetail prod = {Productos}/> 
          </div>
        </div>
        }
     </section>

       
       )
}

//Si el detalle es el que tiene que ir cambiando segun el producto cuando tenemos un solo objeto el mock devuelve 1 array con 1 solo elemento

export default ItemDetailContainer;