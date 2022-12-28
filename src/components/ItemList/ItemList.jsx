import Item from "../Item/Item"

const ItemList = ({prod})=>{

    return(
        prod.map((prod) => <Item key = {prod.id} prod = {prod}/>)

    )
}
//a cada item se le tiene que pasar cada dato de cada producto react identifica como componente al item por lo que el key siempre estan dentro de un MAP

//si no tengo map no hay key

//ItemList componente que se encarga unicamente de listar no debe definir que va a mostrar cada uno de los elementos por lo que se le pasa al item que seria el hijo por lo que se le pasa un prop que seria prod prod entonces el item es cada componente que se pasa, el item list es que item se pasa y item list container es el contenido general

export default ItemList