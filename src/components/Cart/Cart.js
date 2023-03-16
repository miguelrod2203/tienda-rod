import { useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import './Cart.css'
import { CartConProductos } from './CartConProductos'



export const Cart = () => {

    const { cart } = useContext(CartContex)

    if (cart.length === 0) {
        <div>
            <h2>Tu Carrito esta vacio.</h2>
            <br/>
        </div>
    }

    return (
        <CartConProductos />
    )
}
