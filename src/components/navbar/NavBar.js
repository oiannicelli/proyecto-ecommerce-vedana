import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CartIcon from "../icon/CartIcon";
import "./NavBar.css";

const NavBar = () => {
  const activeStyle = {
    color: "red",
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Brand>
          <Link to="/">VEDANA</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              
                <NavLink
                  className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/cuadros">
                  Cuadros
                </NavLink>
             
                <NavLink
                  className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/guirnaldas">
                  Guirnaldas
                </NavLink>
            
                <NavLink
                  className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/todos">
                  Todos
                </NavLink>
              
            </NavDropdown>

            <NavLink
              className={({ isActive }) => isActive ? "activeClass" : undefined}
              to="/item">
              Item
            </NavLink>
        
          </Nav>

        </Navbar.Collapse>

       
        <Link to="/cart">
          <CartIcon />
        </Link>

      </Container>
    </Navbar>
  );
};

export default NavBar;