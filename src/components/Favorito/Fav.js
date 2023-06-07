import { useContext } from 'react'
import { FavoritoContext } from '../../context/FavoritoContext'
import { FavVacio } from './FavVacio'
import { FavConProductos } from './FavConProductos'

import './Fav.css'


export const Fav = () => {

    const { favorito } = useContext(FavoritoContext)

    if (favorito.length === 0) {
        return (
            <FavVacio />
        )
    }

    return (
        <FavConProductos />
    )
}