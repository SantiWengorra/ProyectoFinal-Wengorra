/* eslint-disable react/prop-types */
import DropDownContent from "./DropDownContent";
import { Link } from "react-router-dom";

function Dropdown({ categories }) {
    return (
        <section className="dropdown-content d-flex justify-content-center bg-light">
            <div className="d-flex flex-column text-center">
                <Link className="text-primary hover-underline" to="./"><b>INICIO</b></Link>
                {categories.map(categoria => (
                    <DropDownContent
                        key={categoria.id}
                        categoryId={categoria.id}
                    />
                ))}
            </div>
        </section>
    );
}

export default Dropdown;
