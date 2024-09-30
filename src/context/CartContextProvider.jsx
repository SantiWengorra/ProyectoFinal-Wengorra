/* eslint-disable react/prop-types */
import { useState } from "react"
import CartContext from "./CartContext"

const CartContextProvider = ({children}) => {
    //Crear Funciones:
    const [cart, setCart] = useState([])
    
    const addItem = (item, q) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
    
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].q += q;
                return updatedCart;
            } else {
                return [
                    ...prevCart,
                    {
                        ...item,
                        q: q
                    }
                ];
            }
        });
    };

    const removeItem = (id) => {
        setCart(
            cart.filter((el) => el.id !== id)
        )
    }

    const clear = () => {
        setCart([])
    }

    const total = cart.reduce((tot, item) => tot + item.precio * item.q, 0);

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        total
    }

    return <>
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    </>
}
export default CartContextProvider;