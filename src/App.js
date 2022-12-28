import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"


import { BrowserRouter, Routes, Route } from "react-router-dom" //permite conectar la aplicacion con el navegador tambien se ponen las routes y route
import CartProvider from "./context/CartContext"

const App = () => {
    const bienvenida = "Bienvenidos a la tienda Electronica Toro";

    return(
        <BrowserRouter>
            <CartProvider>
            <header>
                <NavBar/>
            </header>

            <main>

                

                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={bienvenida}/>}></Route> 
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route> 
                    <Route path="/detail/:productId" element={<ItemDetailContainer/>}></Route> 
                </Routes>

            </main>
        

            </CartProvider>
       
        </BrowserRouter>
    );
}

export default App;