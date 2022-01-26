/* escribir R + A, elegir opcion RAFCE para crear un componen rapido*/
import { Container, Nav, Navbar as BTNavbar } from "react-bootstrap";

/* importación del modulo para agregar el icono */
import CartIcon from "../icon/CartIcon";

const NavBar = () => {
    return (
        <BTNavbar bg="light" variant="light">
            <Container>
                
                <BTNavbar.Brand href="#index">VEDANA</BTNavbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#sobreMi">Sobre mí</Nav.Link>
                    <Nav.Link href="#faqs">FAQ's</Nav.Link>
                    <Nav.Link href="#tienda">Tienda</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>

                <CartIcon /> 

            </Container>
        </BTNavbar>
    )
}

export default NavBar