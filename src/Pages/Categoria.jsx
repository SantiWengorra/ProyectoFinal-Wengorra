import { useParams } from "react-router-dom";
import ItemList from "../components/ItemListContainer/ItemComponents/ItemList";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

function Categoria() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "products");
        getDocs(itemCollection)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            });
    }, []);

    const productosFiltrados = products.filter(product => product.categoryId === categoryId);

    return (
        <div>
            <h2 className="text-primary font-weight-bold p-2 mt-3">Categoría {categoryId}:</h2>
            <ItemList items={productosFiltrados} />
        </div>
    );
}

export default Categoria;
