import './ItemCount.css'
import { Button } from "react-bootstrap"
import { BsFillCartPlusFill } from "react-icons/bs";


export const ItemCount = ( { item, cantidad, setCantidad, handleAgregar } ) => {

    const StockProducto = item.stock

    const handleSumar = () => {
        if (cantidad < StockProducto){
            setCantidad(cantidad + 1)
        } else {
            alert('Stock maximo producto alcanzado.')
        }       
    }

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1) 
        } else {
            alert('No se admiten valores negativos.')
        } 
    }

    return (
        <div className="contenedorContador">
            <div>
                <p><b>Sub total : {item.precio * cantidad} CLP</b></p>
            </div>
            <div className='btn btn-group'>

                <button 
                    className={cantidad <= 1 ? " btn btn-danger" : " btn btn-primary"} 
                    onClick={handleRestar}>
                        - 
                </button>

                <button className=" btn btn-secundary" disabled>{cantidad}</button>

                <button 
                    className={cantidad === StockProducto ? " btn btn-danger" : " btn btn-success"} 
                    onClick={handleSumar}>
                        + 
                </button>

            </div>
            <div className="boton_agregar d-grid">
                <Button  variant="outline-success" className="btn justify-content-md-center" onClick={handleAgregar}>
                    Agregar al carrito <BsFillCartPlusFill />
                </Button>
            </div>
        </div>
        
    )
}

