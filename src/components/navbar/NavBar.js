import { Container, Nav, Navbar} from "react-bootstrap";
import { useContext } from "react";
import logo from '../../assets/img/logo.svg';
import CartWidget from "../cart/cart-icon/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const NavBar = () => {
    const { items } = useContext(CartContext);
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Brand>
                    <Link to="/">
                        <img
                            src={logo}
                            width="250"
                            height="80"
                            className="d-inline-block align-top border"
                            alt="logo"
                        />
                    </Link>
                </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="navlink" to="category/cuadros">Cuadros</NavLink>
                        <NavLink className="navlink" to="category/guirnaldas">Guirnaldas</NavLink>
                        <NavLink className="navlink" to="category/especiales">Productos especiales</NavLink>
                        <NavLink className="navlink" to="/"> Todos</NavLink>
                    </Nav>

                    <NavLink to="/cart">
                        <CartWidget />
                        {totalQuantity > 0 && <span className="cart_number">{totalQuantity}</span>}  
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
