import { Button } from "react-bootstrap"
import './BannerInicio.css'
import { useNavigate } from "react-router-dom"


export const BannerInicio = () => {

    const navigate = useNavigate()

    const handelAllProductos = () => {
        navigate("/productos")
    }


    return (
        <div className="contenedorBanner">
            <div className='imagenBanner'>
                <img src="../../imagenes/banner.jpg" alt="banner" title='banner'/>
                <div className='textoBanner'>
                    <h4>Rod Shop</h4>
                    <p>Productos para camping de primera calidad.</p>
                </div>
                <div className='botonAllProductos'>
                    <Button  variant="outline-success" className="btn justify-content-md-center" onClick={handelAllProductos}>
                        Ver todos los productos
                    </Button>
                </div>
            </div>
        </div>
    )
}