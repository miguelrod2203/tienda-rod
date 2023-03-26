import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const CartContex = createContext()
const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState(init)
    console.log(cart)
  
    const agregarAlCarrito = (item) => {
      setCart( [...cart, item] )

      toast.success('Producto agregado.', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        style: {
            background: "#f1f1f1",
            width: "30vh",
            borderRadius: "10px",
            fontSize: ".75rem",
            padding: "5px"
          }                
    });
    }
  
    // funcion para no duplicar el contenido del carrito (buscar otra forma)
    const isInCart = (id) => {
      return cart.some((producto) => producto.id === id)
    }
  
    // funcion para tener la cantidad exacta de productos agregados al carrito
    const totalCantidad = () => {
      return cart.reduce((acc, producto) => acc + producto.cantidad, 0)
    }

    // funcion para tener el total a pagar
    const totalCompra = () => {
        return cart.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
      }

    // funcion para eliminar un producto
    const eliminarDelCarrito = (id) => {
        setCart( cart.filter((producto) => producto.id !== id))

        toast.warn('Producto eliminado.', {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
          style: {
              background: "#f1f1f1",
              width: "30vh",
              borderRadius: "10px",
              fontSize: ".75rem",
              padding: "5px"
            }                
      });
    }

    // funcion para vaciar todo el carrito
    const vaciarCarrito = () => {
        setCart([])
      }

    // funcion para mostrat alerta final
    const mostrarAlerta = () => {        
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Compra finalizada',
          text: 'En máximo 5 días hábiles recibirás tu compra.',
          showConfirmButton: false,
          timer: 2000
      })
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
            eliminarDelCarrito,
            mostrarAlerta
          }}>
            { children }
        </CartContex.Provider>
    )
}