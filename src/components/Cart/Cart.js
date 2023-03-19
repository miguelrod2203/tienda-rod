import { useContext } from 'react'
import { CartContex } from '../../context/CartContext'
import { CartConProductos } from './CartConProductos'
import { CartVacio } from './CartVacio'
import './Cart.css'


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
