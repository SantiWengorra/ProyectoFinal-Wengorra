import { useEffect, useState } from "react"
import ItemList from "./ItemComponents/ItemList"
import {getDocs, collection, getFirestore} from "firebase/firestore"
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "products")
        getDocs(itemCollection)
        .then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            )
        })
    }, [])

    return (
        <div>
            <ItemList items={products}/>
        </div>
    )
}

export default ItemListContainer;