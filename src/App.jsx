import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Main";
import Productos from "./Pages/Productos";
import Error from "./Pages/Error";
import Categoria from "./Pages/Categoria";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
    return (<>
    <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path={`/item/:productId`} element={<Productos/>} />
        <Route path={`/category/:categoryId`} element={<Categoria/>} />
        <Route path={`/cart`} element={<Cart/>} />
        <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
    )
}

export default App;