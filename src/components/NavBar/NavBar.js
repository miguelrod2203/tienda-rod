import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'


export const NavBar = () => {

    return(
        <header className='header'>
            <Navbar expand="md" sticky="top" >
                <Container>
                    <Link to='/'>
                        <img src="./imagenes/logo.png" className="d-inline-block align-top" alt="logo" title='Rod Shop'/>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link to="/">Inicio</Link>
                            <Link to="/productos/Accesorios">Accesorios</Link>
                            <Link to="/productos/Carpas">Carpas</Link>
                            <Link to="/productos/Colchones">Colchones</Link>
                            <Link to="/productos/Coolers">Coolers</Link>
                            <Link to="/productos/Sacos">Sacos</Link>
                            <Link to="/productos/Mochilas">Mochilas</Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}