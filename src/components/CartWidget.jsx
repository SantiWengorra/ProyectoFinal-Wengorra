import { useContext } from "react";
import CartContext from "../context/CartContext";

function CartWidget() {
    const {cart} = useContext(CartContext);
    return <>
    <div className="d-flex align-items-center ml-auto mr-2">
            <img
                src="https://www.seekpng.com/png/full/986-9868123_supermarket-png.png"
                alt="Carrito de compras"
                className="img-fluid"
                style={{ width: '40px', height: '40px' }}
            />
            <p className="mb-0 ml-2 text-dark">{cart.length}</p>
        </div>
    </>
}

export default CartWidget;