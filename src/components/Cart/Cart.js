import { useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import './Cart.css'



export const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContex)

    return (
        <div className='contenidoCarrito'>
            <h2>tu compra</h2>
            <hr/>

            {
                cart.map((producto) => (
                    <div key={producto.id}>
                        <h4>{producto.modelo}</h4>
                        <img src={producto.imagen} alt={producto.modelo}/>
                        <p>Precio: {producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <button onClick={() => eliminarDelCarrito(producto.id)} className='btn btn-primary'>eliminar</button>

                    </div>
                ))
            }
            <h5>total: {totalCompra().toFixed(2)}</h5>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            
        </div>
    )
}