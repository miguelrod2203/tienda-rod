import { Link } from "react-router-dom"
import { BsFillHeartFill } from "react-icons/bs";
import { useFavoritoContext } from "../../context/FavoritoContext"
import '../LikeButton/LikeButton.css'


export const Item = ( {producto} ) => {

    const { addToFavorito, productInFavorito, removeFromFavorito } = useFavoritoContext();

    const handleAddFavorito = () => {
        const product = {
            ...producto
        }

        addToFavorito(product);
    }

    const handleRemoveFromFavorito = () => {
        removeFromFavorito(producto.id);
    }

    return (
        <div className="card_producto" key={producto.id}>

            <div className="imagen_producto">
                <div className="contenedor-like">
                    <div className="like">
                        <BsFillHeartFill 
                            className={`contenedor-like ${productInFavorito(producto.id) ? "active" : ""}`} 
                            onClick={!productInFavorito(producto.id) ? handleAddFavorito : handleRemoveFromFavorito}
                        />  
                    </div>
                </div>
                <img src={producto.imagen} alt={producto.modelo} title={producto.modelo} />
                <hr/>
            </div>

            <div className="Informacion_producto">
                <p> 
                    <b>{producto.marca}</b> <br/>
                    {producto.modelo} <br/>
                    Precio: {producto.precio} CLP
                </p>
            </div>

            <div className="boton_verMas d-grid">
                <Link to={`/detail/${producto.id}`} className="btn justify-content-md-center btn-outline-success">Ver Más</Link>
            </div>  

        </div>
    )
}