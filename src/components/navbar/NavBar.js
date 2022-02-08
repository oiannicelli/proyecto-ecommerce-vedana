import { Container, Nav, Navbar as BTNavbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';


import CartIcon from "../icon/CartIcon";

const NavBar = () => {
    return (
        <BTNavbar bg="light" variant="light">
            <Container>
                
                <BTNavbar.Brand href="#home">
                    <Link to='/'>
                        VEDANA
                    </Link>
                </BTNavbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#sobreMi">
                        <Link to='/'>
                            Sobre mí
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="#faqs">FAQ's</Nav.Link>
                    <Nav.Link href="#tienda">
                        <NavLink to='/category' className={({isActive}) => isActive ? 'activeClass' : undefined }>
                            Tienda
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>

                <CartIcon /> 

            </Container>
        </BTNavbar>
    )
}

export default NavBar