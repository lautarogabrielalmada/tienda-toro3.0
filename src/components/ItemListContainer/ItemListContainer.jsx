
import React,{useEffect, useState} from "react" //use effect para controlar la llamada y use state para guardar los datos 
import { useParams } from "react-router-dom"
import { getFetch, getProductByCategory } from "../../Mock"
import ItemList from "../ItemList/ItemList"





const ItemListContainer=({greeting})=>{



const [Productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

const {categoryId} = useParams()

useEffect(()=>{ 
    //Se hace el llamado a la api solo cuando se monte y que despuyes no lo haga mas 
    if(categoryId){
        getProductByCategory(categoryId)
        .then((respuesta)=> setProductos(respuesta)) //hago la llamada a la api obtengo los productos lo guardo en el estado
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }else{
        getFetch
        .then((respuesta)=> setProductos(respuesta)) //hago la llamada a la api obtengo los productos lo guardo en el estado
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }

   
},[categoryId])
   

    return(
        <div>
       <section className="section1_bienvenidos">
        <h2>{greeting}</h2>
       </section>

       <section>
          {
          loading
          ?
          <h2 class ="cargando">...</h2>
          :
          <div >
            <h2 class="productos_titulo">Productos</h2>
            <div class="productos_lista">
                <ItemList prod = {Productos}/> 
            </div>
          </div>
          }
       </section>
       </div>
    );

}

//Como es hijo itemList de listcontainer se obtiene por props en este caso prod productos

export default ItemListContainer;