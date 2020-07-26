import React from 'react'
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/"><img src='postscript.png' style={{height: '36px'}}/></Navbar.Brand>
      <Nav className="ml-auto">
        <div className="d-flex flex-row">
          <Form inline>
            <FormControl type="text" placeholder="🔍  search subscribers" className="mr-sm-2" />
          </Form>
          <Button variant="outline-light d-flex flex-row">
            <div className="align-self-center">{Math.floor(Math.random() * 150000) + 1}</div>
            <i className="fa fa-user fa-2x" aria-hidden="true" />
          </Button>
        </div>
        <div className="header-item d-flex flex-row">
          <span className="align-self-center">Free Trial - {Math.floor(Math.random() * 29) + 1} Days Remaining</span>
          <div className="buff-10px"></div>
          <Button variant="info">Choose Plan</Button>
        </div>
        <Nav.Link className="header-item align-self-center"><i className="fa fa-cog fa-2x" aria-hidden="true"></i></Nav.Link>
        <NavDropdown title="SamplePostScript" id="nav-dropdown" className="header-item align-self-center header-dropdown">
          <NavDropdown.Item eventKey="4.1" className="dropdown-item">Account</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" className="dropdown-item">API</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" className="dropdown-item">Resources</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4" className="dropdown-item">Terms of Service</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5" className="dropdown-item">Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <br />
    </Navbar>
  )
};

export default Header;
