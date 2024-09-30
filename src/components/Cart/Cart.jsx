import Form from "./Form";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function Cart() {
    const { removeItem, clear, cart, total } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        email: "",
        address: ""
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        const localError = {};
        if (!buyer.name) {
            localError.name = "El nombre es obligatorio";
        }
        if (!buyer.surname) {
            localError.surname = "El Apellido es obligatorio";
        }
        if (!buyer.email) {
            localError.email = "El email es obligatorio";
        }
        if (!buyer.address) {
            localError.address = "La dirección es obligatoria";
        }
        if (Object.keys(localError).length === 0) {
            addOrder();
        } else {
            setError(localError);
        }
    };

    const addOrder = () => {
        const purchase = {
            buyer,
            items: cart,
            total,
            date: new Date(),
        };
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        
        addDoc(orderCollection, purchase)
            .then(res => {
                setOrderId(res.id)
                clear();
            })
            .catch(error => console.log(error));
    };

    const closeAlert = () => {
        setOrderId("");
    };

    if (cart.length === 0) {
        return (<>
            {orderId && (
                <div className="alert alert-success position-relative" role="alert">
                    <button onClick={closeAlert} className="close position-absolute" style={{ top: '10px', right: '10px' }} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="alert-heading">¡Gracias por su compra!</h4>
                    <p>ID de la orden: <strong>{orderId}</strong></p>
                </div>
            )}
            <div className="container mt-5">
                <h2 className="text-primary">Tu Carrito</h2>
                <div className="cart-empty">
                    <h4>No hay productos en el carrito</h4>
                </div>
            </div>
            </>
        );
    } else {
        return (<>
            <div className="container mt-5">
                <h2 className="text-primary">Tu Carrito</h2>
                <div className="cart-items">
                    <ul className="list-group">
                        {cart.map(item => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row">
                                    <img 
                                        src={item.img} 
                                        alt={item.prod} 
                                        style={{ width: '100px', height: 'auto', borderRadius: '5px', marginRight: '10px', objectFit: 'cover', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'}} 
                                    />
                                    <div className="ml-2">
                                        <h5>{item.prod}</h5>
                                        <p>Cantidad: {item.q}</p>
                                        <p>Precio: ${item.precio}</p>
                                    </div>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="btn btn-danger">Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <h4 className="mt-3">Total: ${total}</h4>
                    <button onClick={clear} className="btn btn-danger mt-2">Vaciar Carrito</button>
                    <Form buyer={buyer} handleChange={handleChange} submit={submit} error={error} />
                </div>
            </div>
        </>
        );
    }
}

export default Cart;
