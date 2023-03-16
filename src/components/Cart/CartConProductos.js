import { useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import { Button } from 'react-bootstrap'
import { BsCartDash, BsCartCheck, BsFillTrashFill } from "react-icons/bs";



export const CartConProductos = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContex)

    return (
        <div className='container-carrito'>

            <div className="header-carrito">
                <div className="row">
                    <div className="col">
                        <h1>
                            Tu Carrito.   
                        </h1>
                    </div>
                </div>
            </div>

        
            <div className='contenido-carrito'>
                <div className='contenedor-carrito'>

                    {
                        cart.map((producto) => (
                            <div key={producto.id}>
                                
                                <div className="row">
                                    <div className="col imagen-carrito">
                                        <img src={producto.imagen} alt={producto.modelo}/>    
                                    </div>
                                
                                    <div className="col producto-carrito"> 
                                        <p>
                                            <b>{producto.modelo}</b><br/>
                                            <b>Precio:</b> {producto.precio} CLP<br/>
                                        </p>  
                                    </div>

                                    <div className="col producto-carrito"> 
                                        <p>
                                            <b>Cantidad:</b> {producto.cantidad} <br/>
                                            <b>Subtotal:</b> {producto.precio * producto.cantidad} CLP<br/>
                                        </p>
                                    </div>

                                    <div className="col eliminar-carrito">
                                        <Button onClick={() => eliminarDelCarrito(producto.id)} variant="outline-danger" className='float-end'> 
                                            <BsFillTrashFill /> 
                                        </Button>
                                    </div>

                                </div>
                            
                                

                                <hr></hr>
                            </div>
                        ))
                    }
                </div>

                <div className="footer-carrito">
                    <div className="row">
                        <p><b id="total">Total a pagar: {totalCompra().toFixed(2)} CLP</b></p>
                    </div>

                    <Button onClick={vaciarCarrito} variant="outline-warning" className='float-start'>Vaciar Carrito <BsCartDash /></Button>
                    <Button variant="outline-success" className='float-end'>Ir a Pagar <BsCartCheck /></Button>
                                                
                </div>
            </div>

        </div>
    )
}