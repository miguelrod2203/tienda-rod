import { Volver } from '../Volver/Volver'


export const FavVacio = () => {

    return (
        <div className='fav-vacio'>
            <div>
                <img src='../../imagenes/bannersinfavorito.jpg' alt='favvacio' />
            </div>
            <div className='botonVolver'>
                <Volver />
            </div>

        </div>
    )
}