import './ItemListContainer.css'
import { useEffect, useState } from "react"
// import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Carga } from '../Carga/Carga'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore" 
import { db } from '../../firebase/config'



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

        .finally(() => {
            setCargando( false )
        })
        

    },[categoriaId])


    return (
        <div className='contenedor' >
            {
                cargando 
                    ? <Carga /> 
                    : <ItemList productos={productos} />
            }
        </div>
        

    )
}


// pedirDatos() 
// .then((response) => {
//     if (categoriaId) {
//         setProductos( response.filter(productos => productos.categoria === categoriaId))
//     } else {
//         setProductos( response )
//     }
    
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     setCargando( false )
// })