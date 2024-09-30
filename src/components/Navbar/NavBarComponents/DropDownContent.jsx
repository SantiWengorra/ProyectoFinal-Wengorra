/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function DropDownContent({ categoryId }) {
    return (
        <div className="DropD">
            <Link className="text-dark hover-underline" to={`/category/${categoryId}`}>
                {categoryId}
            </Link>
        </div>
    );
}

export default DropDownContent;
