import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getFirestore, doc, getDoc} from "firebase/firestore";




export const ItemDetailContainer = () =>{

const [Productos, setData] = useState([]) //Si ponemos el array [] funciona porque no te pide map


const {productId} = useParams("")


    
    useEffect(()=>{

        const querydb = getFirestore();
        const queryDoc = doc (querydb,"productos",productId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))

       },[productId]) 

      

    return(

        //Obtener datos de un producto y mostrarlo
        <section>
        <div>
          <h2 class="productos_titulo">Detalle del producto</h2>
          <div class="productos_lista">
              <ItemDetail prod = {Productos}/> 
          </div>
        </div>
        
     </section>

       
       )
}

//Si el detalle es el que tiene que ir cambiando segun el producto cuando tenemos un solo objeto el mock devuelve 1 array con 1 solo elemento

export default ItemDetailContainer;