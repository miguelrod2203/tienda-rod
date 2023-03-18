import { useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import './Cart.css'
import { CartConProductos } from './CartConProductos'
import { CartVacio } from './CartVacio'



export const Cart = () => {

    const { cart } = useContext(CartContex)

    if (cart.length === 0) {
        return (
            <CartVacio />
        )
    }

    return (
        <CartConProductos />
    )
}
