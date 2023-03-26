import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Carga } from '../Carga/Carga'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Error404 } from '../Error404/Error404'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [cargando, setCargando] = useState(true)

    const { itemId } = useParams()

    useEffect(() =>{
        
        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then(doc => {
                setItem( {...doc.data(), id: doc.id} )
            })

            .finally(() => {
            setCargando( false )
        })
        
    }, [itemId])


    return (
        <div className='contenido' >
        {
            cargando 
                ? <Carga /> 
                : item.marca
                    ? <ItemDetail item={item} />
                    : <Error404 />
        }
    </div>
    )
}