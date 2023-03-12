import { Volver } from '../Volver/Volver'
import './Error404.css'


export const Error404 = () => {


    return (
        <div className="contenedorError">
            <div className='imagenError'>
                <img src="../../imagenes/error404.jpg" alt="error" title='error'/>
                <div className='botonVolverError'>
                    <Volver />
                </div>
            </div>
        </div>
    )
}