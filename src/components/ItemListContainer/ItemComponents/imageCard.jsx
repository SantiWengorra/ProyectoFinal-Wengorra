/* eslint-disable react/prop-types */
function ImageCard({img}) {
    return <>
    <img
        src={img}
        className="ofc card-img-top border-bottom border-secondary-subtle"
        style={{ width: '100%', height: '250px' }}
        alt="Imagen Producto"
    />
    </>
}

export default ImageCard;