import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'


export const NavBar = () => {

    return(
        <header className='header'>
            <Navbar expand="md" sticky="top" >
                <Container>
                    <a href='#Inicio'>
                        <img src="./imagenes/logo.png" className="d-inline-block align-top" alt="logo" title='Rod Shop'/>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#Inicio">Inicio</Nav.Link>
                            <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
                            <Nav.Link href="#Carpas">Carpas</Nav.Link>
                            <Nav.Link href="#Colchones">Colchones</Nav.Link>
                            <Nav.Link href="#Coolers">Coolers</Nav.Link>
                            <Nav.Link href="#Sacos">Sacos</Nav.Link>
                            <Nav.Link href="#Mochilas">Mochilas</Nav.Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}