import { createContext, useEffect, useState } from "react";

export const CartContex = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState(init)
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

    // eliminar un producto
    const eliminarDelCarrito = (id) => {
        setCart( cart.filter((producto) => producto.id !== id))
    }

    // vaciar todo el carrito
    const vaciarCarrito = () => {
        setCart([])
      }

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])



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