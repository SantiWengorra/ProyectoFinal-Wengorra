/* eslint-disable react/prop-types */
import { useState } from "react";

function ItemsCount({stock, onAdd}) {
    const [contador, setContador] = useState(1);

    return (<>
        <section className="d-flex align-items-center mt-3">
            <button className="btn btn-primary btn-lg" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            <button 
                className="btn btn-outline-secondary me-2 ml-2"
                onClick={() => setContador(contador - 1)}
                disabled={contador === 1}
            >-</button>
            <span className="mx-2">{contador}</span>
            <button 
                className="btn btn-outline-secondary ms-2"
                onClick={() => setContador(contador + 1)}
                disabled={contador === stock}
            >+</button>
        </section>
        </>
    );
}

export default ItemsCount;