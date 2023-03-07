
// aqui va mi seccion ver mas

export const ItemDetail = ( { item } ) => {

    return (
        <div className="card_producto" key={item.id}>
            <div>
                <h2>{item.modelo}</h2>
            </div>
          
            <div className="contenido_ver_mas">
                
                <div className="col-md-4 imagen">
                    <img src={item.imagen}  alt={item.modelo} title={item.modelo}/>
                </div>
                <div className="col-md-4 detalle_producto" >
                    <p>Codigo: 2023/03-{item.id}</p>
                    <p>Marca: {item.marca}</p>
                    <p>Precio: {item.precio} CLP</p>
                    <p>Color: {item.color}</p>
                    <p>Categoria: {item.categoria}</p>
                </div>
                <div className="col-md-4 detalle_producto" >
                    <p>Dimensiones: {item.dimensiones}</p>
                    <p>Capacidad: {item.capacidad}</p>
                    <p>Peso: {item.peso}</p>
                    <p>Disponibles: {item.stock} unidades</p>

                </div>
            </div>
            <div className="boton_volver d-grid float-end ">
                <a href="../index.html" className="btn justify-content-md-center btn-outline-primary">
                    Volver
                </a>
            </div>

        </div>
    )
}