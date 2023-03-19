import { BsFillCartFill } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge'
import { useContext } from "react";
import { CartContex } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './CartWidget.css'

export const CartWidget = () => {
    
    const { totalCantidad } = useContext(CartContex)

    return (
        <div className="carrito">
            <Link to={"/cart"}>
                < BsFillCartFill /> <Badge bg="success">{ totalCantidad() }</Badge>
            </Link>
        </div>
        
    )
}