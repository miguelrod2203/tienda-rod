import { useContext } from "react"
import { FavoritoContext } from "../../context/FavoritoContext"
import { Link } from "react-router-dom"
import { BsFillHeartFill } from "react-icons/bs";
import '../LikeButton/LikeButton.css'
import './Fav.css'

export const FavConProductos = (producto) => {

    const { favorito, productInFavorito, removeFromFavorito } = useContext(FavoritoContext)

    return (
        <div className="container-favorito">
            <h1 className="titulos animate__animated animate__backInLeft">Bienvenidos a Rod Shop</h1>
            <p className="sub-titulos animate__animated animate__backInRight">Aquí están tus productos favoritos.</p>

            <div className='contenido-favorito'>
                <div className='contenido_favorito'>

                    {
                        favorito.map((producto) => (
                            <div key={producto.id}>

                                <div className="card_producto" key={producto.id}>

                                    <div className="imagen_producto">
                                        <div className="contenedor-like">
                                            <div className="like">
                                                <BsFillHeartFill 
                                                    className={`contenedor-like ${productInFavorito(producto.id) ? "active" : ""}`}
                                                    onClick={() => removeFromFavorito(producto.id)} 
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

                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}









