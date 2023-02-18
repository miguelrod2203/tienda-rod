import { BsFillCartFill } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge'
import './CartWidget.css'


export const CartWidget = () => {

    return (
        <div className="carrito">
            <a href="#Carrito">
                < BsFillCartFill /> <Badge bg="success">0</Badge>
            </a>
        </div>
    )
}