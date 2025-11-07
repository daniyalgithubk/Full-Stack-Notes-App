import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="px-3">
      <Container fluid className="d-flex align-items-center">
        <Navbar.Brand as={Link} to="/"  className="me-5">
            {/* <Link to="/">Notes App</Link> */}
            Notes App
        </Navbar.Brand>

        <Form className="mx-auto" style={{ maxWidth: '250px' }}>
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </Form>

      
        <Nav className="d-flex flex-row align-items-center ms-auto" style={{ gap: '1.5rem' }}>
          
          
          <Nav.Link as={Link} to="/mynotes" href="#link" className="fw-semibold text-light">
            {/* <Link to="mynotes">My Notes</Link> */}
            My Notes
          </Nav.Link>

          <NavDropdown
            title={<span className="fw-semibold text-light">Daniyal khattak</span>}
            id="navbarScrollingDropdown"
            menuVariant="light"
            align="end"
            className="border border-light border-2 rounded px-2"
          >
            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
             Logout            
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;