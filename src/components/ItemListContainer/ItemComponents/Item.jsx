/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ImageCard from "./imageCard";
import InfoProd from "./InfoProd"

const Item = ({ item }) => {
    return (
        <div className="col">
            <div className="card m-2" style={{ width: '100%', height: '500px' }}>
                <ImageCard img={item.img}/>
                <InfoProd item={item}/>
                <b className="h4 text-primary card-body text-center font-weight-bold d-flex align-items-center justify-content-center">${item.precio}</b>
                <Link className="text-light btn btn-primary" to={`../item/${item.id}`}>Ver Detalle</Link>
            </div>
        </div>            
    );
}

export default Item;
