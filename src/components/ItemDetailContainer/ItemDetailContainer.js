import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pedirItemPorId } from '../../helpers/pedirDatos'
import { Carga } from '../Carga/Carga'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [cargando, setCargando] = useState(true)

    const { itemId } = useParams()

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