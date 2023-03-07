import Spinner from 'react-bootstrap/Spinner';
import '../Carga/Carga.css'


export const Carga = () => {

    return (
        <div className='contenedor_carga'>
            <Spinner animation="border" variant="success" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}