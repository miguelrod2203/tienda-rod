


export const Item = ( {producto} ) => {

    return (
        <div className="card_producto" key={producto.id}>

            <div className="imagen_producto">
                <img src={producto.imagen} alt={producto.modelo} title={producto.modelo} />
                <hr/>
            </div>

            <div className="Informacion_producto">
                <p> 
                    <b>{producto.marca}</b> <br/>
                    {producto.modelo} <br/>
                    Precio: {producto.precio} CLP
                </p>
            </div>

            <div className="boton_verMas d-grid">
                <button className="btn justify-content-md-center btn-outline-success" id={producto.id}>Ver Más</button>
            </div>  

        </div>
    )
}