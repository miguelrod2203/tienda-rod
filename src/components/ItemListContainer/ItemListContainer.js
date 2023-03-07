import './ItemListContainer.css'
import { useEffect, useState } from "react"
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'
import { Carga } from '../Carga/Carga'



export const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
            
        pedirDatos() 
        .then((response) => {
            setProductos( response )
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setCargando( false )
        })

    },[])


    return (
        <div className='contenedor' >
            {
                cargando ? <Carga /> : <ItemList productos={productos} />
            }
        </div>
        

    )
}
