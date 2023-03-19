import './ItemCount.css'
import { Button } from "react-bootstrap"
import { BsFillCartPlusFill } from "react-icons/bs";
import { toast } from 'react-toastify';


export const ItemCount = ( { item, cantidad, setCantidad, handleAgregar } ) => {

    const StockProducto = item.stock

    const handleSumar = () => {
        if (cantidad < StockProducto){
            setCantidad(cantidad + 1)
        } else {
            toast.warn('Stock máximo.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                style: {
                    background: "#f1f1f1",
                    width: "30vh",
                    borderRadius: "10px",
                    fontSize: ".75rem",
                    padding: "5px"
                  }                
            });
        }       
    }

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1) 
        } else {
            toast.warn('No se admiten valores negativos.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "light",
                style: {
                    background: "#f1f1f1",
                    width: "30vh",
                    borderRadius: "10px",
                    fontSize: ".75rem",
                    padding: "5px"
                  }                
            });
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

