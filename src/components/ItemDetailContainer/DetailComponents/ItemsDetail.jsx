/* eslint-disable react/prop-types */
import ItemsCount from "./ItemsCount";

function ItemsDetail({item, onAdd}) {
    return (<>
        <section className="container my-5">
            <article className="row">
                <div className="col-md-6">
                    <img 
                    src={item.img} 
                    alt={item.prod} 
                    className="img-fluid rounded shadow ofc"
                    style={{ width: '100%', height: '100%', maxHeigh: '100%' }} />
                </div>
                <div className="col-md-6">
                    <h1 className="display-4">{item.prod}</h1>
                    <p className="lead">{item.detalles}</p>
                    <p className="h4 text-primary">Precio: ${item.precio}</p>
                    <div className="d-flex flex-row">
                    <ItemsCount stock={item.stock} onAdd={onAdd}/>
                    </div>
                </div>
            </article>
        </section>
        </>
    )
}

export default ItemsDetail;