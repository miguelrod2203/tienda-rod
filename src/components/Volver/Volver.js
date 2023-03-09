import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BsFillReplyAllFill } from "react-icons/bs";
import './Volver.css'



export const Volver = () => {

    const navigate = useNavigate()

    const handelVolver = () => {
        navigate(-1)
    }

    return (
        <div className="boton_volver d-grid float-start">
            <Button  variant="outline-primary" className="btn justify-content-md-center" onClick={handelVolver}>
                <BsFillReplyAllFill />Volver
            </Button>
        </div>
    )
}