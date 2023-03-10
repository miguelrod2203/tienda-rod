
import { BsFacebook, BsInstagram, BsTwitter, BsTelephoneForward } from "react-icons/bs";
import './Footer.css'


export const Footer = () => {

    return (
        <footer className="footer">               
                <div className="redes-sociales">
                    
                    <ul>
                        <p>Redes Sociales</p>
                        <li>
                            <BsFacebook /> <a target="_blank" href="https://www.facebook.com/">Facebook</a>
                        </li>
                        <li><BsInstagram /> <a target="_blank" href="https://www.instagram.com/">Instagram</a>
                        </li>
                        <li><BsTwitter /> <a target="_blank" href="https://twitter.com/?lang=es">Twitter</a>
                        </li>    
                    </ul>
                </div>

                <div className="nosotros">

                    <ul>
                        <p>Informacion Adicional</p>
                        <li>E-commerce React JS</li>
                        <li>Miguel Rodriguez</li>
                        <li>RodShop-2023 | D. Reservados</li>
                    </ul> 
                </div>

                <div className="ubicacion">
                    <div>
                        <ul>
                            <p>Ubicacion</p>
                            <li>San Diego 516, Santiago.</li>
                            <li>Región Metropolitana.</li>
                            <li><BsTelephoneForward /> +569255555555</li>
                        </ul> 
                    </div>
                </div>
            </footer>
        
    )
}