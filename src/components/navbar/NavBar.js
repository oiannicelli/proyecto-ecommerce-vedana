import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CardWidget from "../cart-widget/CartWidget";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const NavBar = () => {

  const {iconCart, cartList} =CartContext()

  return (

    <Navbar  expand="lg" className="navbar-moradita  fixed-top">
    <Container>
        
      <Navbar.Brand className="">
          <Link to="/">VEDANA</Link>
        </Navbar.Brand>


      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto text-center">
              
            <Nav.Link className="link" to="/category/cuadros">
              Cuadros
            </Nav.Link>
          
            <Nav.Link className="link" to={`/category/guirnaldas`}>
              Guirnaldas
            </Nav.Link>

          {/* ----------Dropdown-------- */}
          <NavDropdown className="link2" title="Ediciones Especiales" id="basic-nav-dropdown">

                <NavDropdown.Item className="link2" to={`/category/cupula`}>
                  Cupula
                </NavDropdown.Item>
              
              <NavDropdown.Item className="link2" to={`/category/insectos`}>
                Insectos
              </NavDropdown.Item>

                <NavDropdown.Item className="link2" to={`/category/flores`}>
                  Otras Flores
                </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>

    </Container>
      <Link  className="link" exact to={'/cart' }>
        <div className="text-center ">
        
        {cartList.length === 0 ?
            <></>
          :
          <div>
            <span className=" text-white  iconCart ">
            {iconCart()}
            </span>
            <CardWidget />
          </div>
        }

        </div>

      </Link>
  </Navbar>
  );
};

export default NavBar;



/* import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/cuadros">
                  Cuadros
                </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/guirnaldas">
                  Guirnaldas
                </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <NavLink
                  className={({ isActive }) => isActive ? "activeClass" : undefined}
                  to="category/todos">
                  Todos
                </NavLink>
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link>
            <NavLink
              className={({ isActive }) => isActive ? "activeClass" : undefined}
              to="/item">
              Item
            </NavLink>
        </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
       
        <Link to="/cart">
          <CartIcon />
        </Link>

      </Container>
    </Navbar>
  );
};

export default NavBar; */