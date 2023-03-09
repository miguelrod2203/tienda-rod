import './ItemListContainer.css'
import { useEffect, useState } from "react"
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Carga } from '../Carga/Carga'
import { useParams } from 'react-router-dom'



export const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {
            
        pedirDatos() 
        .then((response) => {
            if (categoriaId) {
                setProductos( response.filter(productos => productos.categoria === categoriaId))
            } else {
                setProductos( response )
            }
            
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
                cargando ? <Carga /> : <ItemList productos={productos} />
            }
        </div>
        

    )
}
