import { useState, useEffect } from 'react'
import { pedirItemPorId } from '../../helpers/pedirDatos'
import { Carga } from '../Carga/Carga'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


export const ItemDetailContainer = ( { itemId } ) => {

    const [item, setItem] = useState(null)
    const [cargando, setCargando] = useState(true)
    console.log(item)

    useEffect(() =>{
        pedirItemPorId(itemId)
            .then((data) => {
                setItem(data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setCargando( false )
            })
        
    }, [itemId])


    return (
        <div className='contenido' >
        {
            cargando ? <Carga /> : <ItemDetail item={item} />
        }
    </div>
    )
}