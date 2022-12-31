
import React,{useEffect, useState} from "react" //use effect para controlar la llamada y use state para guardar los datos 
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";





const ItemListContainer=({greeting})=>{



const [Productos, setData] = useState([])

const {categoryId} = useParams()

useEffect(()=>{ 

    const querydb = getFirestore();
    const queryCollection = collection(querydb,"productos");

    if(categoryId){
    const queryFilter = query(queryCollection,where("category","==",categoryId))
    getDocs(queryFilter)
        .then(res => setData(res.docs.map(productos =>({id: productos.id, ...productos.data()}))))
    }else{
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(productos =>({id: productos.id, ...productos.data()}))))
    }
   
},[categoryId])
   

    return(
        <div>
       <section className="section1_bienvenidos">
        <h2>{greeting}</h2>
       </section>

       <section>
         
          <div >
            <h2 class="productos_titulo">Productos</h2>
            <div class="productos_lista">
                <ItemList prod = {Productos}/> 
            </div>
          </div>
        
       </section>
       </div>
    );

}

//Como es hijo itemList de listcontainer se obtiene por props en este caso prod productos

export default ItemListContainer;