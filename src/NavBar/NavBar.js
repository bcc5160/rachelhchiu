import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./NavBar.css";


function NavBar() {
    return (
      <div className="NavBar" class="col-md-12">

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Rachel Chiu</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Interviews</Nav.Link>
        <Nav.Link href="#link">Articles</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <a href="https://twitter.com/rachelhchiu?lang=en" class="twitter"><i class="icofont-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/rachelhchiu" class="linkedin"><i class="icofont-linkedin"></i></a>
                </Navbar.Text>
            </Navbar.Collapse>
  </Container>
</Navbar>
    
      </div>
    );
  }

export default NavBar;