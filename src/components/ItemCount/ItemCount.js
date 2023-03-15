import './ItemCount.css'
import { Button } from "react-bootstrap"
import { BsFillCartPlusFill } from "react-icons/bs";


export const ItemCount = ( { item, cantidad, setCantidad, handleAgregar } ) => {

    const StockProducto = item.stock

    const handleSumar = () => {
        if (cantidad < StockProducto){
            setCantidad(cantidad + 1)
        } else {
            alert('Te has acabado el Stock de este producto.')
        }       
    }

    const handleRestar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1) 
        } else {
            alert('No puedes tener valores negativos.')
        } 
    }



    return (
        <div className="contenedorContador">
            <div>
                <p><b>Sub total : {item.precio * cantidad} CLP</b></p>
            </div>
            <div className='btn btn-group'>
                <button className=" btn btn-danger" onClick={handleRestar}> - </button>
                <button className=" btn btn-secundary" disabled>{cantidad}</button>
                <button className=" btn btn-success" onClick={handleSumar}> + </button>
            </div>
            <div className="boton_agregar d-grid">
                <Button  variant="outline-success" className="btn justify-content-md-center" onClick={handleAgregar}>
                    Agregar al carrito <BsFillCartPlusFill />
                </Button>
            </div>
        </div>
        
    )
}

