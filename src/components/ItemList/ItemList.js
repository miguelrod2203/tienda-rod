import { Item } from "../Item/Item"


export const ItemList = ( { productos } ) => {

    return (
        <div>
            <h1 className="titulos animate__animated animate__backInLeft">Bienvenidos a Rod Shop</h1>
            <p className="sub-titulos animate__animated animate__backInRight">Te ayudamos con tu próxima aventura.</p>

            <div className="contenido_producto">
                { productos.map((producto)=>( 
                    
                    <Item producto={producto} key={producto.id} />

                    )
                )}
            </div>
        </div>
    )
}