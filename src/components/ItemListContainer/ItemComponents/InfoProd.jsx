/* eslint-disable react/prop-types */
function InfoProd({item}) {
    return <>
            <div className="card-body d-flex flex-column text-center heightBase">
            <h5 className="text-truncate" style={{ height: '100px' }}>{item.prod}</h5>
            <p style={{maxHeight:"auto", overflow: 'scroll', overflowX: "hidden", overflowY: "auto" }}>{item.detalles}</p>
            </div>
    </>
}

export default InfoProd;