import { useState, useContext, useEffect } from 'react'
import { CartContex } from '../../context/CartContext'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import './FormularioPago.css'
import { useNavigate } from 'react-router-dom';

export const FormularioPago = () => {

    const [formularioEnviado, setFormularioEnviado] = useState (false);
    const { totalCompra, vaciarCarrito } = useContext(CartContex)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate("/productos")
    }

    useEffect(() => {
        if (formularioEnviado) {
            mostrarAlerta()
        }    
    })

    const mostrarAlerta = () => {        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra finalizada',
            text: 'Gracias por preferirnos, si lo deseas puedes seguir comprando.',
            showConfirmButton: false,
            timer: 5000
        })
    }

	return (
		<>
            <Formik
                initialValues={{
                    nombre: '',
                    telefono: '',
                    correo: '',
                    direccion: '',
                    metodo: '' 
                }}
                validate={(valores) => {
                    let errores = {};

                    // validacion de nombre
                    if(!valores.nombre){
                        errores.nombre = ' Por favor ingresa un nombre'
                    } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre = ' El nombre no puede incluir valores numericos'
                    }

                    // validacion de telefono
                    if(!valores.telefono){
                        errores.telefono = ' Por favor ingresa un numero telefonico'
                    } else if(!/^\d{7,14}$/.test(valores.telefono)){
                        errores.telefono = ' El telefono debe contener de 7 a 14 numeros'
                    }

                    // validacion de correo
                    if(!valores.correo){
                        errores.correo = ' Por favor ingresa un correo'
                    } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo = ' Correo Invalido'
                    }

                    // validacion de direccion
                    if(!valores.direccion){
                        errores.direccion = ' Por favor ingresa una direccion'
                    } else if(!/^[a-zA-Z0-9\s-_]{4,96}$/.test(valores.direccion)){
                        errores.direccion = ' Detalla mejor tu direccion'
                    }

                    // validacion de metodo de pago
                    if(!valores.metodo){
                        errores.metodo = ' Debes seleccionar un metodo de pago'
                    } 

                    return errores
                }}

                onSubmit = {(valores, { resetForm }) => {
                    resetForm();
                    console.log('formulario enviado');
                    setFormularioEnviado(true);
                    vaciarCarrito();  
                    setTimeout(inicio => {
                        handleVolver();
                    }, 5500);
                }}

                >   
                    {( { errors } ) => (
                        
                        <div className='contenedorFormulario'>
                            <div className="valorDeCompra">
                                <p><b id="total">Total a pagar: {totalCompra().toFixed(2)} CLP</b></p>
                            </div>

                            <Form className="formulario">
                            
                                <div>
                                    <label htmlFor="nombre">Nombre</label>
                                    <Field
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Ingrese su Nombre" 
                                    />
                                    <ErrorMessage name="nombre" component={() => (<div className='error' >{errors.nombre}</div>)}/>
                                </div>

                                <div>
                                    <label htmlFor="telefono">Telefono</label>
                                    <Field
                                        type="text"
                                        id="telefono"
                                        name="telefono"
                                        placeholder="Ingrese su teléfono" 
                                    />
                                    <ErrorMessage name="telefono" component={() => (<div className='error' >{errors.telefono}</div>)}/>
                                </div>

                                <div>
                                    <label htmlFor="correo">Correo</label>
                                    <Field
                                        type="text"
                                        id="correo"
                                        name="correo"
                                        placeholder="correo@correo.com" 
                                    />
                                    <ErrorMessage name="correo" component={() => (<div className='error' >{errors.correo}</div>)}/>
                                </div>

                                <div>
                                    <label htmlFor="direccion">Direccion</label>
                                    <Field
                                        type="text"
                                        id="direccion"
                                        name="direccion"
                                        placeholder="Region, Comuna, Calle, Casa" 
                                    />
                                    <ErrorMessage name="direccion" component={() => (<div className='error' >{errors.direccion}</div>)}/>
                                </div>

                                <div>
                                    <label htmlFor="direccion">Métodos de Pago</label>
                                    <Field name="metodo" as="select">
                                        <option value="">Métodos de Pago</option>
                                        <option value="Transferencia">Transferencia</option>
                                        <option value="Debito">Debito</option>
                                        <option value="Credito">Crédito </option>
                                        <option value="PayPal">PayPal</option></Field>
                                    <ErrorMessage name="metodo" component={() => (<div className='error' >{errors.metodo}</div>)}/>
                                </div>

                                <div>
                                    <label htmlFor="direccion">Observacion</label>
                                    <Field name="Observacion" as="textarea" placeholder="Condición de envío u otro" />
                                </div>



                                <button type="submit">Enviar</button>
                            </Form>
                        </div>
                    )}
                
            </Formik>
		</>
	);
}
