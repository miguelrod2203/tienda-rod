import './Contador.css'
import { useState } from 'react'


export const Contador = ( { item } ) => {

    const [counter, setCounter] = useState(1)
    const StockProducto = item.stock

    const handleSumar = () => {
        if (counter < StockProducto){
            setCounter(counter + 1)
        } else {
            alert('Te has acabado el Stock de este producto.')
        }       
    }

    const handleRestar = () => {
        if (counter > 0) {
            setCounter(counter - 1) 
        } else {
            alert('No puedes tener valores negativos.')
        } 
    }


    return (
        <div className="container">
            <div>
                <p><b>Sub total : {item.precio * counter} CLP</b></p>
            </div>
            <div className='btn btn-group'>
                <button className=" btn btn-danger" onClick={handleRestar}> - </button>
                <button className=" btn btn-secundary" disabled>{counter}</button>
                <button className=" btn btn-success" onClick={handleSumar}> + </button>
            </div>
        </div>
        
    )
}

