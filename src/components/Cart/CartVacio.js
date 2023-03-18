import { Volver } from '../Volver/Volver'


export const CartVacio = () => {

    return (
        <div className='carrito-vacio'>
            <div>
                <img src='../../imagenes/carritovacio1.jpg' alt='carritovacio' />
            </div>
            <div className='botonVolver'>
                <Volver />
            </div>

        </div>
    )
}