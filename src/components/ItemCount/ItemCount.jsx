import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {

const [count, setCount] = useState(0)

const decrement=()=>{
    if(count > 1){
        setCount(prev => prev -1)
    }
}

const increment = () =>{
    if(count < stock){
        setCount(prev => prev + 1)
    }
}

return(
    <div>
        <p>
        {count}
        </p>

        <button className="restar-carrito" onClick={decrement}>-</button>
        <button className="sumar-carrito" onClick={increment}>+</button>
       
        <button className="agregar-carrito" onClick={() => onAdd(count)} disabled={!count}>Agregar al carrito</button>
        
    </div>
)

}

export default ItemCount