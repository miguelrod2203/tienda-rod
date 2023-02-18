import './ItemListContainer.css'

export const ItemListContainer = ( { greeting } ) => {

    return (
        <article className='contenedor-mensaje'>
            <h2 className='mensaje'>Mensaje: {greeting}</h2>
        </article>
    )
}
