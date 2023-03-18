import { useContext, useState } from "react"
import { CartContex } from "../../context/CartContext"
import { IrAComprar } from "../IrAComprar/IrAComprar"
import { ItemCount } from "../ItemCount/ItemCount"
import { Volver } from "../Volver/Volver"



export const ItemDetail = ( { item } ) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContex)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }
        
        agregarAlCarrito(newItem)
    }

    return (
        <div key={item.id}>
            <div>
                <h2>{item.modelo}</h2>
            </div>
          
            <div className="contenido_ver_mas">
                
                <div className="col-md-4 imagen">
                    <img src={item.imagen}  alt={item.modelo} title={item.modelo}/>
                </div>
                <div className="col-md-4 detalle_producto" >
                    <p>Codigo: 2023/03-{item.id}</p>
                    <p>Marca: {item.marca}</p>
                    <p>Precio: {item.precio} CLP</p>
                    <p>Color: {item.color}</p>
                    <p>Categoria: {item.categoria}</p>
                    <p>Dimensiones: {item.dimensiones}</p>
                    <p>Capacidad: {item.capacidad}</p>
                    <p>Peso: {item.peso}</p>
                    <p>Disponibles: {item.stock } und</p>
                </div>
                <div className="col-md-4 detalle_producto" >

                    {
                        isInCart(item.id)
                            ? <IrAComprar />
                            :
                            <ItemCount item ={item} cantidad={cantidad} setCantidad={setCantidad} handleAgregar={handleAgregar} />
                    } 
                    <br/>
                    <Volver />
                </div>
                
            </div>

            

        </div>
    )
}