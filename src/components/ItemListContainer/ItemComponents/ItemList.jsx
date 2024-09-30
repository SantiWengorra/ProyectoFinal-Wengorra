/* eslint-disable react/prop-types */
import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        <section className="container-fluid row row-cols-1 row-cols-md-3 no-copy">
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </section>
    );
}

export default ItemList