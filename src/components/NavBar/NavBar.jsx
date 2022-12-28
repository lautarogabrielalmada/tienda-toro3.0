import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Link to={"/"}>Electronica-Toro</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to={"/"}>Inicio</Link></Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to={"/category/consola"}>Consolas</Link></NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.1"><Link to={"/category/notebook"}>Notebooks</Link></NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <Link to={"/"}>Ver todo</Link>
              </NavDropdown.Item>
            </NavDropdown>
           
            
          </Nav>
        <div>
            <CartWidget/>
        </div>
          
        </Navbar.Collapse>

        

      </Container>
    </Navbar>
  );
}

export default NavBar;