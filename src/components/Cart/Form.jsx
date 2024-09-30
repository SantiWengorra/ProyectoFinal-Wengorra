/* eslint-disable react/prop-types */
const Form = ({ buyer, handleChange, submit, error }) => {
    return (
        <form className="m-4" onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    name="name"
                    placeholder="Nombre" 
                    value={buyer.name} 
                    onChange={handleChange} 
                />
                {error.name && <div className="text-danger">{error.name}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="apellido" 
                    name="surname"
                    placeholder="Apellido" 
                    value={buyer.surname} 
                    onChange={handleChange} 
                />
                {error.surname && <div className="text-danger">{error.surname}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    placeholder="Email" 
                    value={buyer.email} 
                    onChange={handleChange} 
                />
                {error.email && <div className="text-danger">{error.email}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="direccion" 
                    name="address"
                    placeholder="Dirección" 
                    value={buyer.address} 
                    onChange={handleChange} 
                />
                {error.address && <div className="text-danger">{error.address}</div>}
            </div>
            <button className="btn btn-success">Crear Orden</button>
        </form>
    );
};

export default Form;
