import './Contador.css'
import { useState } from 'react'
import { BsTrash,BsCartCheck } from "react-icons/bs";


export const Contador = () => {

    const [counter, setCounter] = useState(0)
    const StockProducto = 11

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
            <h2>Carpa verde</h2>
            <p style={{fontSize: `120px`}}>⛺</p>
            <h4>{`Stock: ${StockProducto - counter}`}</h4>
            <br/>
            <div className='btn btn-group'>
                <button className=" btn btn-danger" onClick={handleRestar}> <BsTrash/></button>
                <button className=" btn btn-secundary" disabled>{counter}</button>
                <button className=" btn btn-success" onClick={handleSumar}><BsCartCheck/></button>
            </div>
        </div>
        
    )
}

