import { createContext, useState } from "react";

export const CartContex = createContext()



export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([])
    console.log(cart)
  
    const agregarAlCarrito = (item) => {
      setCart( [...cart, item] )
    }
  
    // para no duplicar el contenido del carrito (buscar otra forma)
    const isInCart = (id) => {
      return cart.some((producto) => producto.id === id)
    }
  
    // para tener la cantidad exacta de productos agregados al carrito
    const totalCantidad = () => {
      return cart.reduce((acc, producto) => acc + producto.cantidad, 0)
    }

    // para tener el total a pagar
    const totalCompra = () => {
        return cart.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
      }

    // vaciar todo el carrito
    const vaciarCarrito = () => {
        setCart([])
      }

    // eliminar un producto
    const eliminarDelCarrito = (id) => {
        setCart( cart.filter((producto) => producto.id !== id))
    }

    return (
        <CartContex.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCantidad,
            totalCompra,
            vaciarCarrito,
            eliminarDelCarrito
          }}>
            { children }
        </CartContex.Provider>
    )
}