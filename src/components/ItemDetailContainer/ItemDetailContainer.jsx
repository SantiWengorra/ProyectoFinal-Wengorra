/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import ItemDetail from "./DetailComponents/ItemsDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import CartContext from "../../context/CartContext";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { productId } = useParams();
    const { addItem } = useContext(CartContext);
    const onAdd = (q) => {
        addItem(item, q);
    }

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "products", productId);
        getDoc(docRef)
            .then((snapshot) => {
                setItem({
                    id: snapshot.id,
                    ...snapshot.data(),
                });
            });
    }, []);

    return (
        <div>
            <ItemDetail item={item} onAdd={onAdd}/>
        </div>
    );
}

export default ItemDetailContainer;
