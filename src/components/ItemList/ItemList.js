import { Item } from "../Item/Item"


export const ItemList = ( { productos } ) => {

    return (
        
        <div className="contenido_producto">
            { productos.map((producto)=>( 
                
                <Item producto={producto} key={producto.id} />

                )
            )}
        </div>
    )
}