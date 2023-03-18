import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BsEmojiHeartEyes } from "react-icons/bs";
import './IrAComprar.css'



export const IrAComprar = () => {

    const navigate = useNavigate()

    const handelAComprar = () => {
        navigate("/cart")
    }

    return (
        <div className="boton_a_comprar d-grid">
            <Button  variant="outline-success" className="btn justify-content-md-center" onClick={handelAComprar}>
                Ir a Comprar <BsEmojiHeartEyes />
            </Button>
        </div>
    )
}