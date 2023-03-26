import './ItemListContainer.css'
import { useEffect, useState } from "react"
import { ItemList } from '../ItemList/ItemList'
import { Carga } from '../Carga/Carga'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore" 
import { db } from '../../firebase/config'
import { Error404 } from '../Error404/Error404'



export const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
        setCargando( true )

        const productosRef = collection(db, "productos")
        const q = categoriaId
                    ? query(productosRef, where("categoria", "==", categoriaId))
                    : productosRef

        getDocs(q)
        .then((resp) => {
            setProductos ( resp.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            }) )
        })
        
        .catch((error) => {
            console.log(error)
        })

        .finally(() => {
            setCargando( false )
        })
        

    },[categoriaId])


    return (
        <div className='contenedor' >
            {
                cargando 
                    ? <Carga /> 
                    : productos.length === 0
                        ? <Error404 />
                        : <ItemList productos={productos} />
            }
        </div>
        

    )
}


